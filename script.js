//Acessa o ínicio da página
const ancora = document.querySelector('.cabecalho__nav-portfolio');

ancora.addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

// Função para adicionar eventos de clique aos itens do menu
function addMenuClickEvents() {
    // Remover eventos de clique existentes
    document.querySelectorAll('.cabecalho__nav-menu-acesso-lista-itens').forEach(item => {
        item.removeEventListener('click', menuClickHandler);
    });

    // Adicionar eventos de clique
    document.querySelectorAll('.cabecalho__nav-menu-acesso-lista-itens').forEach(item => {
        item.addEventListener('click', menuClickHandler);
    });
}

// Função para lidar com cliques no menu
function menuClickHandler() {
    // Obtém a âncora correspondente com base no valor do atributo data-lang
    const langKey = this.getAttribute('data-lang');
    const anchor = document.getElementById(`id__${langKey}`);

    // Verifica se a âncora existe antes de rolar para ela
    if (anchor) {
        anchor.scrollIntoView({top: 10, behavior: 'smooth' });

        // Oculta o menu após a rolagem
        document.querySelector('.cabecalho__nav-menu-icone-x').classList.toggle('visivel');
        document.querySelector('.cabecalho__nav-menu-acesso').classList.toggle('ativo');
        document.querySelector('.cabecalho__nav-menu-icone-hamburg').classList.toggle('invisivel');
    }
}

// Adiciona um evento de clique ao ícone "Hamburguer" para exibir o menu
document.querySelector('.cabecalho__nav-menu-icone-hamburg').addEventListener('click', function () {
    const menuAcesso = document.querySelector('.cabecalho__nav-menu-acesso');
    const iconeHamburguer = document.querySelector('.cabecalho__nav-menu-icone-hamburg');
    const iconeX = document.querySelector('.cabecalho__nav-menu-icone-x');

    menuAcesso.classList.toggle('ativo');
    iconeHamburguer.classList.toggle('invisivel');
    iconeX.classList.toggle('visivel');
});

// Adiciona um evento de clique ao ícone "X" para ocultar o menu
document.querySelector('.cabecalho__nav-menu-icone-x').addEventListener('click', function () {
    const menuAcesso = document.querySelector('.cabecalho__nav-menu-acesso');
    const iconeHamburguer = document.querySelector('.cabecalho__nav-menu-icone-hamburg');
    const iconeX = document.querySelector('.cabecalho__nav-menu-icone-x');

    menuAcesso.classList.toggle('ativo');
    iconeHamburguer.classList.toggle('invisivel');
    iconeX.classList.toggle('visivel');
});

// Função para alternar o idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');

        // Verifica se o idioma é "pt", se for, use o conteúdo original do HTML
        const translation = lang === 'pt' ? element.dataset.langOriginal : (translations[lang][key] || key);
        element.textContent = translation;
    });

    // Adiciona novamente os eventos de clique ao menu após a mudança de idioma
    addMenuClickEvents();
}

document.querySelector('.cabecalho__nav-idioma').addEventListener('click', function () {
    // Alterna entre inglês (en) e português (pt)
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    
    // Altera o idioma
    changeLanguage(newLanguage);

    // Atualiza o idioma atual
    currentLanguage = newLanguage;
});

// Inicializa as traduções
translations = {
    'en': {
        'sobre': 'About',
        'habilidades': 'Skills',
        'projetos': 'Projects',
        'contatos': 'Contacts',
        'portfolio': 'Portfolio',
        'idioma': 'PT-BR',
        'apresentacao01': 'Hello, I am Bruno Fernandes',
        'apresentacao02': 'Back-End Software Developer',
        'sobretexto': 'Back-end Developer specialized in Java, Spring Boot, MySQL, Docker, and JUnit 5. With extensive knowledge in programming logic and a constant commitment to technical improvement, I have experience in developing robust and scalable solutions. I am seeking opportunities to apply my creativity and skills in innovative Back-end development projects, contributing to the creation of efficient and high-quality systems.',
        'veja': 'See more',
        'textoProjeto01': 'The Pamonha da Iris project is a website that showcases the irresistible corn cakes made by Iris. Featuring an interactive carousel, quick access links, and responsive design, it provides an engaging and consistent visual experience across various devices. Integrated with WhatsApp for orders and displaying detailed menu information, the site was developed using HTML, CSS, JavaScript, with the design created in Figma.',
        'textoProjeto02': 'This project consists of a website dedicated to a Japanese ramen restaurant, featuring an interactive carousel to visually showcase the available dishes. Users can adjust the desired quantities, and upon completing the order, the information is automatically sent to the restaurant WhatsApp. Developed with HTML, CSS, JavaScript, and Figma, the project aims to streamline the online ordering experience and integrate with the widely used WhatsApp platform. ',
        'textoProjeto03': 'This project is a website for "ESTADÃO Bar & Lanche," a traditional establishment in downtown São Paulo since 1968. The site features dedicated sections for the menu, allowing the visualization of dishes through an interactive carousel. Additionally, there is a "Contact Us" area with a form for message submission and a "About Us" section, providing details about the history and prominence of the famous Pernil Sandwich from Estadão. Developed using HTML, CSS, JavaScript, and utilizing Figma for design, the website aims to provide an informative and interactive experience for users.',
        'textoProjeto04': 'This is a project called "Fokus," presented on a simple website with three modes: "Focus," "Short Break," and "Long Break." The design is clean and modern, using the Montserrat and Prata fonts. The page features a banner section with the motto "Optimize your productivity, dive into what matters," accompanied by a representative image. In the card section, you can switch between focus and break modes, as well as toggle the music on or off. The timer is displayed centrally on the page, and a "Start" button allows you to initiate or pause the countdown.'
    }
};

// Inicializa o idioma atual
let currentLanguage = 'pt';

// Salva o conteúdo original do HTML nos atributos dataset
document.querySelectorAll('[data-lang]').forEach(element => {
    element.dataset.langOriginal = element.textContent.trim();
});

// Inicializa os eventos de clique no menu
addMenuClickEvents();

//Muda o card
// Adiciona um evento de clique aos elementos do card
document.querySelectorAll('.principal__projetos__container-itens').forEach(item => {
    item.addEventListener('click', function () {
        // Adiciona ou remove a classe 'virado' ao elemento do card clicado
        this.classList.toggle('virado');
    });
});


