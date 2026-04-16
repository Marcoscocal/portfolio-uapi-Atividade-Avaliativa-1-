// components/CardProjeto.jsx
export default function CardProjeto({ titulo, descricao, link }) {
  return (
    <article className="card-projeto">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noreferrer">Ver no GitHub →</a>
    </article>
  );
}