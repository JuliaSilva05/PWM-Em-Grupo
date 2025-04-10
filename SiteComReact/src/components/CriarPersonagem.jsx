import { useState, useEffect } from 'react'
import './CriarPersonagem.css'

function CriarPersonagem() {
 const [raças, setRaças] = useState([])
  const [classes, setClasses] = useState([])
  const [antecedentes, setAntecedentes] = useState([])
  const [personagem, setPersonagem] = useState({
    nome: '',
    raça: '',
    classe: '',
    antecedente: '',
    background: '',
    imagem: null
  })

  useEffect(() => {
    // Carregar raças
    fetch('https://www.dnd5eapi.co/api/races')
      .then(response => response.json())
      .then(data => setRaças(data.results))

    // Carregar classes
    fetch('https://www.dnd5eapi.co/api/classes')
      .then(response => response.json())
      .then(data => setClasses(data.results))

    // Carregar antecedentes
    fetch('https://www.dnd5eapi.co/api/backgrounds')
      .then(response => response.json())
      .then(data => setAntecedentes(data.results))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPersonagem(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPersonagem(prev => ({
          ...prev,
          imagem: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode salvar o personagem ou fazer o que for necessário
    console.log('Personagem criado:', personagem)
  }

  return (
    <div className="criar-personagem">
      <h2>Criar Novo Personagem</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Personagem:</label>
          <input
            type="text"
            name="nome"
            value={personagem.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Imagem do Personagem:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {personagem.imagem && (
            <img src={personagem.imagem} alt="Preview" className="preview-imagem" />
          )}
        </div>

        <div className="form-group">
          <label>Raça:</label>
          <select
            name="raça"
            value={personagem.raça}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma raça</option>
            {raças.map(raça => (
              <option key={raça.index} value={raça.index}>
                {raça.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Classe:</label>
          <select
            name="classe"
            value={personagem.classe}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma classe</option>
            {classes.map(classe => (
              <option key={classe.index} value={classe.index}>
                {classe.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Antecedente:</label>
          <select
            name="antecedente"
            value={personagem.antecedente}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um antecedente</option>
            {antecedentes.map(antecedente => (
              <option key={antecedente.index} value={antecedente.index}>
                {antecedente.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Background do Personagem:</label>
          <textarea
            name="background"
            value={personagem.background}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button type="submit">Criar Personagem</button>
      </form>
    </div>
  ) 
}

export default CriarPersonagem 