import React, { useState, useEffect } from 'react'
import './CriarPersonagem.css'
import { addPersonagem } from '../services/personagemService'

const CriarPersonagem = () => {
  const [nome, setNome] = useState('')
  const [races, setRaces] = useState([])
  const [selectedRace, setSelectedRace] = useState('')
  const [classes, setClasses] = useState([])
  const [selectedClass, setSelectedClass] = useState('')
  const [imagem, setImagem] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRacesAndClasses = async () => {
      try {
        setLoading(true)
        const racesResponse = await fetch('https://www.dnd5eapi.co/api/races')
        const racesData = await racesResponse.json()
        setRaces(racesData.results)

        const classesResponse = await fetch('https://www.dnd5eapi.co/api/classes')
        const classesData = await classesResponse.json()
        setClasses(classesData.results)
      } catch (err) {
        setError('Erro ao carregar raças e classes')
      } finally {
        setLoading(false)
      }
    }

    fetchRacesAndClasses()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const personagem = {
        nome,
        raca: selectedRace,
        classe: selectedClass,
        imagem
      }
      await addPersonagem(personagem)
      // Limpar formulário após sucesso
      setNome('')
      setSelectedRace('')
      setSelectedClass('')
      setImagem(null)
      alert('Personagem criado com sucesso!')
    } catch (err) {
      setError('Erro ao criar personagem')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="criar-personagem-container">Carregando...</div>
  if (error) return <div className="criar-personagem-container">{error}</div>

  return (
    <div className="criar-personagem-container">
      <h2>Criar Novo Personagem</h2>
      <form className="personagem-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="raca">Raça</label>
          <select
            id="raca"
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
            required
          >
            <option value="">Selecione uma raça</option>
            {races.map((race) => (
              <option key={race.index} value={race.index}>
                {race.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="classe">Classe</label>
          <select
            id="classe"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
            <option value="">Selecione uma classe</option>
            {classes.map((classe) => (
              <option key={classe.index} value={classe.index}>
                {classe.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="imagem">Imagem</label>
          <input
            type="file"
            id="imagem"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files[0])}
          />
        </div>

        <button type="submit" className="submit-button">
          Criar Personagem
        </button>
      </form>
    </div>
  )
}

export default CriarPersonagem 