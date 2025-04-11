import { useEffect, useState } from "react";

export default function MonstrosCrud() {
  const [monstros, setMonstros] = useState([]);
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then((res) => res.json())
      .then((data) => setMonstros(data.results));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarFavorito = (monstro) => {
    if (!favoritos.some((f) => f.index === monstro.index)) {
      setFavoritos([...favoritos, { ...monstro, apelido: "" }]);
    }
  };

  const removerFavorito = (index) => {
    setFavoritos(favoritos.filter((m) => m.index !== index));
  };

  const atualizarApelido = (index, novoApelido) => {
    setFavoritos(
      favoritos.map((m) =>
        m.index === index ? { ...m, apelido: novoApelido } : m
      )
    );
  };

  return (
    <div className="p-4">
      <h1>🧟 Monstros do D&D</h1>

      <h2>Lista de Monstros</h2>
      <ul>
        {monstros.slice(0, 10).map((monstro) => (
          <li key={monstro.index}>
            {monstro.name}
            <button onClick={() => adicionarFavorito(monstro)} style={{ marginLeft: "10px" }}>
              Favoritar
            </button>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Favoritos</h2>
      <ul>
        {favoritos.map((fav) => (
          <li key={fav.index}>
            <strong>{fav.name}</strong> | Apelido:
            <input
              type="text"
              value={fav.apelido}
              onChange={(e) => atualizarApelido(fav.index, e.target.value)}
              style={{ marginLeft: "10px" }}
            />
            <button onClick={() => removerFavorito(fav.index)} style={{ marginLeft: "10px", color: "red" }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

