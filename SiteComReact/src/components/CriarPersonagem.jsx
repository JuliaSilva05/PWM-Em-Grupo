import { useState, useEffect } from 'react';
import { getPersonagens, addPersonagem, updatePersonagem, deletePersonagem } from '../api';
import { getRacas, getClasses, getAntecedentes, getRacaDetalhes, getClasseDetalhes, getAntecedenteDetalhes } from '../api/dndApi';
import './CriarPersonagem.css';

function CriarPersonagem() {
  const [personagens, setPersonagens] = useState([]);
  const [racas, setRacas] = useState([]);
  const [classes, setClasses] = useState([]);
  const [antecedentes, setAntecedentes] = useState([]);
  const [racaDetalhes, setRacaDetalhes] = useState(null);
  const [classeDetalhes, setClasseDetalhes] = useState(null);
  const [antecedenteDetalhes, setAntecedenteDetalhes] = useState(null);
  const [form, setForm] = useState({
    nome: '',
    raca: '',
    classe: '',
    antecedente: '',
    background: ''
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    carregarPersonagens();
    carregarDadosDnD();
  }, []);

  async function carregarPersonagens() {
    const dados = await getPersonagens();
    setPersonagens(dados);
  }

  async function carregarDadosDnD() {
    // Carregar raças
    const racasData = await getRacas();
    setRacas(racasData);

    // Carregar classes
    const classesData = await getClasses();
    setClasses(classesData);

    // Carregar antecedentes
    const antecedentesData = await getAntecedentes();
    setAntecedentes(antecedentesData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    // Carregar detalhes quando uma raça, classe ou antecedente for selecionado
    if (name === 'raca' && value) {
      carregarRacaDetalhes(value);
    } else if (name === 'classe' && value) {
      carregarClasseDetalhes(value);
    } else if (name === 'antecedente' && value) {
      carregarAntecedenteDetalhes(value);
    }
  };

  async function carregarRacaDetalhes(index) {
    const detalhes = await getRacaDetalhes(index);
    setRacaDetalhes(detalhes);
  }

  async function carregarClasseDetalhes(index) {
    const detalhes = await getClasseDetalhes(index);
    setClasseDetalhes(detalhes);
  }

  async function carregarAntecedenteDetalhes(index) {
    const detalhes = await getAntecedenteDetalhes(index);
    setAntecedenteDetalhes(detalhes);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.nome.trim()) {
      alert('O nome do personagem é obrigatório!');
      return;
    }

    // Adicionar detalhes da raça, classe e antecedente ao personagem
    const personagemCompleto = {
      ...form,
      racaDetalhes: racaDetalhes,
      classeDetalhes: classeDetalhes,
      antecedenteDetalhes: antecedenteDetalhes
    };

    if (editando) {
      const atualizado = await updatePersonagem({ ...personagemCompleto, objectId: editando });
      if (atualizado) {
        setEditando(null);
        setForm({ nome: '', raca: '', classe: '', antecedente: '', background: '' });
        setRacaDetalhes(null);
        setClasseDetalhes(null);
        setAntecedenteDetalhes(null);
        await carregarPersonagens();
      }
    } else {
      const novoPersonagem = await addPersonagem(personagemCompleto);
      if (novoPersonagem) {
        setForm({ nome: '', raca: '', classe: '', antecedente: '', background: '' });
        setRacaDetalhes(null);
        setClasseDetalhes(null);
        setAntecedenteDetalhes(null);
        await carregarPersonagens();
      }
    }
  };

  const handleEdit = (personagem) => {
    setEditando(personagem.objectId);
    setForm({
      nome: personagem.nome,
      raca: personagem.raca,
      classe: personagem.classe,
      antecedente: personagem.antecedente,
      background: personagem.background
    });
    
    // Carregar detalhes da raça, classe e antecedente
    if (personagem.raca) {
      carregarRacaDetalhes(personagem.raca);
    }
    if (personagem.classe) {
      carregarClasseDetalhes(personagem.classe);
    }
    if (personagem.antecedente) {
      carregarAntecedenteDetalhes(personagem.antecedente);
    }
  };

  const handleDelete = async (objectId) => {
    if (window.confirm('Tem certeza que deseja excluir este personagem?')) {
      await deletePersonagem({ objectId });
      await carregarPersonagens();
    }
  };

  return (
    <div className="criar-personagem-container">
      <h1>Cadastro de Personagens de RPG</h1>
      
      <form onSubmit={handleSubmit} className="form-personagem">
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Raça:</label>
          <select
            name="raca"
            value={form.raca}
            onChange={handleChange}
          >
            <option value="">Selecione uma raça</option>
            {racas.map(raca => (
              <option key={raca.index} value={raca.index}>
                {raca.name}
              </option>
            ))}
          </select>
          {racaDetalhes && (
            <div className="detalhes-info">
              <h4>{racaDetalhes.name}</h4>
              <p><strong>Velocidade:</strong> {racaDetalhes.speed}</p>
              <p><strong>Idade:</strong> {racaDetalhes.age}</p>
              <p><strong>Alinhamento:</strong> {racaDetalhes.alignment}</p>
              <p><strong>Tamanho:</strong> {racaDetalhes.size_description}</p>
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label>Classe:</label>
          <select
            name="classe"
            value={form.classe}
            onChange={handleChange}
          >
            <option value="">Selecione uma classe</option>
            {classes.map(classe => (
              <option key={classe.index} value={classe.index}>
                {classe.name}
              </option>
            ))}
          </select>
          {classeDetalhes && (
            <div className="detalhes-info">
              <h4>{classeDetalhes.name}</h4>
              <p><strong>Dados de Vida:</strong> {classeDetalhes.hit_die}</p>
              <p><strong>Proficiências Iniciais:</strong> {classeDetalhes.proficiency_choices?.[0]?.desc}</p>
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label>Antecedente:</label>
          <select
            name="antecedente"
            value={form.antecedente}
            onChange={handleChange}
          >
            <option value="">Selecione um antecedente</option>
            {antecedentes.map(antecedente => (
              <option key={antecedente.index} value={antecedente.index}>
                {antecedente.name}
              </option>
            ))}
          </select>
          {antecedenteDetalhes && (
            <div className="detalhes-info">
              <h4>{antecedenteDetalhes.name}</h4>
              <p><strong>Descrição:</strong> {antecedenteDetalhes.desc}</p>
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label>Background:</label>
          <textarea
            name="background"
            value={form.background}
            onChange={handleChange}
            placeholder="Descreva a história do seu personagem..."
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="btn-primary">
            {editando ? 'Atualizar' : 'Cadastrar'}
          </button>
          
          {editando && (
            <button
              type="button"
              onClick={() => {
                setEditando(null);
                setForm({ nome: '', raca: '', classe: '', antecedente: '', background: '' });
                setRacaDetalhes(null);
                setClasseDetalhes(null);
                setAntecedenteDetalhes(null);
              }}
              className="btn-secondary"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
      
      <h2>Personagens Cadastrados</h2>
      {personagens.length === 0 ? (
        <p>Nenhum personagem cadastrado ainda.</p>
      ) : (
        <ul className="personagens-list">
          {personagens.map((p) => (
            <li key={p.objectId} className="personagem-item">
              <h3>{p.nome}</h3>
              <p><strong>Raça:</strong> {p.racaDetalhes ? p.racaDetalhes.name : p.raca}</p>
              <p><strong>Classe:</strong> {p.classeDetalhes ? p.classeDetalhes.name : p.classe}</p>
              <p><strong>Antecedente:</strong> {p.antecedenteDetalhes ? p.antecedenteDetalhes.name : p.antecedente}</p>
              <p><strong>Background:</strong> {p.background}</p>
              
              <div className="personagem-actions">
                <button
                  onClick={() => handleEdit(p)}
                  className="btn-edit"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(p.objectId)}
                  className="btn-delete"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CriarPersonagem; 