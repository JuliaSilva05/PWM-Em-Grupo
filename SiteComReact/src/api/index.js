import axios from "axios";

const urlPersonagem = "https://parseapi.back4app.com/classes/Personagem";
const headers = {
  "X-Parse-Application-Id": "vhhJsv1uKHWZCaQBf8iuwUhEBebIJSgWSmeSAE2e",
  "X-Parse-REST-API-Key": "zQXCbWzj1QLsuOBVZsQey59ro4LnBAtJpX7jX40u",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getPersonagens() {
  try {
    const response = await axios.get(urlPersonagem, { headers });
    return response.data.results || [];
  } catch (err) {
    console.error("Erro ao buscar personagens:", err);
    return [];
  }
}

export async function addPersonagem(personagem) {
  try {
    const response = await axios.post(urlPersonagem, personagem, { headers: headersJson });
    return { ...personagem, ...response.data };
  } catch (err) {
    console.error("Erro ao criar personagem:", err);
    return null;
  }
}



export async function updatePersonagem(personagem) {
  try {
    const { objectId, ...dados } = personagem;
    const response = await axios.put(`${urlPersonagem}/${objectId}`, dados, { headers: headersJson });
    return response.data;
  } catch (err) {
    console.error("Erro ao atualizar personagem:", err);
    return null;
  }
}

export async function deletePersonagem(personagem) {
  try {
    const response = await axios.delete(`${urlPersonagem}/${personagem.objectId}`, { headers });
    return response.data;
  } catch (err) {
    console.error("Erro ao deletar personagem:", err);
    return null;
  }
}