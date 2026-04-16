// Gerenciamento do Formulário
const formulario = document.querySelector('#meu-formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome && email && msg) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
});

// Alternar Tema (Dark Mode)
const btnTema = document.querySelector('#btn-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
});

// Renderizar Projetos Dinamicamente
const meusProjetos = [
    {
        titulo: "Projeto 01 - Meu Github",
        descricao: "Perfil do meu Github.",
        link: "https://github.com/Marcoscocal"
    },
    {
        titulo: "Projeto 02 - Java Básico",
        descricao: "Desafio Controle de Fluxo do curso Java.",
        link: "https://github.com/Marcoscocal/DesafioControleFluxo"
    },
    {
        titulo: "Projeto 03 - Tipos-Variáveis",
        descricao: "Exemplos de tipos e variáveis em Java.",
        link: "https://github.com/Marcoscocal/Tipos-variaveis"
    },
    {
        titulo: "Projeto 04 - Git/GitHub",
        descricao: "Desafio de Projeto sobre versionamento.",
        link: "https://github.com/Marcoscocal/dio-desafio-github-primeiro-re"
    },
    {
        titulo: "Projeto 05 - Sistema Bancário",
        descricao: "Sistema Bancário desenvolvido com Python.",
        link: "https://github.com/Marcoscocal/Criando-um-Sistema-Banc-rio-com-Python"
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver no GitHub →</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();