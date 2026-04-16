import React, { useState } from 'react';
import './App.css';
// Certifique-se de que sua foto está na pasta src/assets/
import fotoperfil from './assets/perfil.png';
import CardProjeto from './components/CardProjeto';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Lista de projetos extraída do seu script original
  const meusProjetos = [
    {
      titulo: "Projeto 01 - Meu Github",
      descricao: "Perfil do meu Github.",
      link: "https://github.com/Marcoscocal"
    },
    {
      titulo: "Projeto 02 - Desafio Controle Fluxo",
      descricao: "Desafio Controle de Fluxo do curso Java básico.",
      link: "https://github.com/Marcoscocal/DesafioControleFluxo"
    },
    {
      titulo: "Projeto 03 - Tipos-variáveis em java",
      descricao: "Criando o projeto para exemplo de tipo variável.",
      link: "https://github.com/Marcoscocal/Tipos-variaveis"
    },
    {
      titulo: "Projeto 04 - Desafio de Projeto sobre Git/GitHub",
      descricao: "Repositório criado para o Desafio de Projeto.",
      link: "https://github.com/Marcoscocal/dio-desafio-github-primeiro-re"
    },
    {
      titulo: "Projeto 05 - Criando um Sistema Bancário com Python",
      descricao: "Repositório de como criar um Sistema Bancário com Python.",
      link: "https://github.com/Marcoscocal/Criando-um-Sistema-Banc-rio-com-Python"
    }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-theme' : ''}>
      <header>
        <h1>Meu Portifólio</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li>
              <button id="btn-tema" onClick={toggleTheme}>
                {isDarkMode ? 'Claro' : 'Escuro'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <img src={fotoperfil} alt="Foto de Marcos José" />
          <p>Oi, me chamo Marcos José, sou aluno do curso Tecnologia em Sistemas para Internet (EAD-UAPI) do Polo de Cocal - Piauí.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">
            {meusProjetos.map((projeto, index) => (
              <CardProjeto 
                key={index}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <form id="meu-formulario" onSubmit={(e) => e.preventDefault()}>
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" required />
            </div>
            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" required />
            </div>
            <div className="campo">
              <label htmlFor="msg">Mensagem:</label>
              <textarea id="msg"></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Marcos José</p>
      </footer>
    </div>
  );
}

export default App;