import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co/api";

// Função para buscar todas as raças
export async function getRacas() {
  try {
    const response = await axios.get(`${BASE_URL}/races`);
    return response.data.results || [];
  } catch (err) {
    console.error("Erro ao buscar raças:", err);
    return [];
  }
}

// Função para buscar detalhes de uma raça específica
export async function getRacaDetalhes(index) {
  try {
    const response = await axios.get(`${BASE_URL}/races/${index}`);
    return response.data;
  } catch (err) {
    console.error(`Erro ao buscar detalhes da raça ${index}:`, err);
    return null;
  }
}

// Função para buscar todas as classes
export async function getClasses() {
  try {
    const response = await axios.get(`${BASE_URL}/classes`);
    return response.data.results || [];
  } catch (err) {
    console.error("Erro ao buscar classes:", err);
    return [];
  }
}

// Função para buscar detalhes de uma classe específica
export async function getClasseDetalhes(index) {
  try {
    const response = await axios.get(`${BASE_URL}/classes/${index}`);
    return response.data;
  } catch (err) {
    console.error(`Erro ao buscar detalhes da classe ${index}:`, err);
    return null;
  }
}

// Função para buscar todos os antecedentes
export async function getAntecedentes() {
  try {
    const response = await axios.get(`${BASE_URL}/backgrounds`);
    return response.data.results || [];
  } catch (err) {
    console.error("Erro ao buscar antecedentes:", err);
    return [];
  }
}

// Função para buscar detalhes de um antecedente específico
export async function getAntecedenteDetalhes(index) {
  try {
    const response = await axios.get(`${BASE_URL}/backgrounds/${index}`);
    return response.data;
  } catch (err) {
    console.error(`Erro ao buscar detalhes do antecedente ${index}:`, err);
    return null;
  }
}

// Função para buscar todas as habilidades
export async function getHabilidades() {
  try {
    const response = await axios.get(`${BASE_URL}/ability-scores`);
    return response.data.results || [];
  } catch (err) {
    console.error("Erro ao buscar habilidades:", err);
    return [];
  }
}

// Função para buscar detalhes de uma habilidade específica
export async function getHabilidadeDetalhes(index) {
  try {
    const response = await axios.get(`${BASE_URL}/ability-scores/${index}`);
    return response.data;
  } catch (err) {
    console.error(`Erro ao buscar detalhes da habilidade ${index}:`, err);
    return null;
  }
}