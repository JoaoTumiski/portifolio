const cardsWebData = [
    {
        icon: "./img/html.svg",
        title: "HTML 5",
        description: "Estrutura a base de páginas da web, suportando multimídia e layout responsivo para aplicações modernas."
    },
    {
        icon: "./img/css.svg",
        title: "CSS3",
        description: "Responsável pela estilização de páginas web, define cores, fontes, layouts e animações, permitindo designs atrativos e responsivos."
    },
    {
        icon: "./img/java.svg",
        title: "JavaScript",
        description: "Linguagem essencial para a web, usada para criar interatividade, manipular o DOM e integrar APIs em aplicações dinâmicas."
    }
];

const cardsMobileData = [
    {
        icon: "./img/kotlin.svg",
        title: "Kotlin (Android)",
        description: "Linguagem de programação moderna, oficial para o desenvolvimento Android. Focada em segurança, concisão e interoperabilidade com Java."
    },
    {
        icon: "./img/swift.svg",
        title: "Swift (iOS)",
        description: "Linguagem nativa da Apple para desenvolvimento iOS e macOS. Oferece performance e segurança para aplicativos de alto desempenho."
    },
    {
        icon: "./img/firebase.svg",
        title: "Firebase",
        description: "Plataforma do Google para backend, oferece autenticação, banco de dados em tempo real, armazenamento e notificações push."
    }
];

const descriptionMobile = [
    {
        title:"O Rolê app",
        descrição:'O Rolê App é um aplicativo desenvolvido para facilitar a descoberta de restaurantes, bares e para compras de ingressos para eventos. Ele exibe uma espécie de "cardápio de eventos" baseado na cidade escolhida pelo usuário, com opções culturais, esportivas, musicais e mais. Com uma interface intuitiva e integração com pagamentos via PIX, o app oferece uma experiência prática e segura, conectando usuários aos melhores eventos da cidade.',
    },
    {
        title:"Parceiros do rolê",
        descrição:'O Parceiros do Rolê é um aplicativo desenvolvido para os parceiros configurarem seus estabelecimentos e eventos de forma simples e eficiente. Ele permite que organizadores personalizem as informações dos eventos, incluindo detalhes como datas, cardápio, imagens, descrições, horários, ingressos e promoções, diretamente pelo app.',
    },
    {
        title:"Clima",
        descrição:'O Clima Fácil é um aplicativo intuitivo que fornece informações completas sobre o clima, utilizando dados em tempo real obtidos de uma API confiável. Com ele, os usuários podem acessar previsões meteorológicas detalhadas, incluindo temperatura, condições do céu, umidade, velocidade do vento e muito mais. Projetado para ser simples e eficiente, o Clima Fácil é a solução ideal para quem deseja planejar o dia ou acompanhar mudanças no clima com praticidade e precisão.',
    },
    {
        title:"Under Conect",
        descrição:'O Under Conect é um aplicativo inovador que transforma a experiência do usuário durante eventos, funcionando como uma rede social exclusiva para participantes. Com funcionalidades como chat em tempo real, mapas interativos do evento e a possibilidade de comprar ingressos diretamente pelo app, ele conecta pessoas e facilita o acesso às informações essenciais.',
    },
    {
        title:"Under Festival",
        descrição:'O Under Festival é um aplicativo demonstrativo projetado como uma landing page interativa para apresentar informações e inspirações sobre a produção de eventos. Com um design moderno e visualmente impactante, ele destaca as principais etapas, conceitos e soluções para criar experiências únicas.',
    },
];



const descriptionsWeb = [
    {
        title:"O Rolê Web",
        url: "https://oroleapp.com.br",
        descrição: 'O Rolê Web é a versão online do aplicativo O Rolê, oferecendo uma plataforma prática para explorar e comprar ingressos para eventos. Além de apresentar quem somos e disponibilizar informações de contato, o site permite que os usuários descubram eventos por localização, categoria ou preferência e realizem compras de ingressos com facilidade, incluindo pagamento via PIX.',
    },
    {
        title:"Jogo da velha",
        url: "https://joaotumiski.github.io/Velha/",
        descrição:  'O Jogo da Velha Online é um projeto web simples e divertido, que recria o clássico jogo de lógica em uma plataforma digital. Com uma interface intuitiva e jogabilidade fluida, ele permite partidas rápidas entre dois jogadores diretamente no navegador.',
    },
    {
        title:"Portifólio",
        url: "https://joaotumiski.github.io/portifolio/",
        descrição:  'Este é o meu portfólio online, onde apresento meus projetos, habilidades e experiências na área de desenvolvimento. Com um design limpo e organizado, ele reúne informações sobre quem sou, meus trabalhos concluídos e formas de entrar em contato.',
    },
];


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = this;
    const loading = document.getElementById("loading");

    // Exibe o indicador de carregamento
    loading.style.display = "flex";

    // Envia o formulário via AJAX
    fetch(form.action, {
        method: form.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        })
    }).then(response => {
        // Oculta o indicador de carregamento
        loading.style.display = "none";

        if (response.ok) {
            showModal(); // Mostra o modal de sucesso
            form.reset(); // Reseta o formulário
        } else {
            alert("Falha ao enviar a mensagem. Tente novamente.");
        }
    }).catch(error => {
        // Oculta o indicador de carregamento em caso de erro
        loading.style.display = "none";
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro. Por favor, tente novamente mais tarde.");
    });
});

// Função para exibir o modal de sucesso
function showModal() {
    document.getElementById("success-modal").style.display = "flex";
}

// Função para fechar o modal de sucesso
function closeModal() {
    document.getElementById("success-modal").style.display = "none";
}
function getDescriptionMobile() {
    document.addEventListener("DOMContentLoaded", () => {
        const description = document.getElementById("DescriptionMobile");
        const TitleMobile = document.getElementById("Title");
        const carousel = $("#carouselMobileIndicators");

        function updateDescriptionMobile() {
            const activeIndex = carousel.find(".carousel-item.active").index();
            if (activeIndex !== -1 && descriptionMobile[activeIndex]) {
                TitleMobile.innerText = descriptionMobile[activeIndex].title;
                description.textContent = descriptionMobile[activeIndex].descrição;
            }
        }
        updateDescriptionMobile();

        carousel.on("slid.bs.carousel", () => {
            updateDescriptionMobile();
        });
    });
}

function getDescriptionWeb() {
    document.addEventListener('DOMContentLoaded', () => {
        const description = document.getElementById('DescriptionWEb');
        const Title = document.getElementById("TitleWEB");
        const carousel = $('#carouselWebIndicators');
        const button = document.getElementById("VerWEB");
        
        function updateDescription(){
            const activeIndex = carousel.find(".carousel-item.active").index();
            if (activeIndex !== -1 && descriptionsWeb[activeIndex]){
                Title.innerText = descriptionsWeb[activeIndex].title
                description.innerText = descriptionsWeb[activeIndex].descrição

                button.onclick = () =>{
                    window.open(descriptionsWeb[activeIndex].url, '_blank');
                };
            }
        }
        updateDescription();
    
        // Atualizar o texto ao mudar de slide
        carousel.on('slid.bs.carousel', () => {
            updateDescription();
        });
    });
}

function generateCards() {
    // Limpar conteúdo das seções antes de adicionar novos cards
    const containerWeb = document.getElementById('cardsWeb-container');
    containerWeb.innerHTML = '';

    const containerMobile = document.getElementById('cardsMobile-container');
    containerMobile.innerHTML = '';

    // Gerar cards para Tecnologias Web
    cardsWebData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('cards', 'playing');
        cardElement.innerHTML = `
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
                <img src="${card.icon}" alt="${card.title}" class="icon">
                <br>
                <strong>${card.title}</strong>
                <br>
                <div class="description">${card.description}</div>
            </div>
        `;
        containerWeb.appendChild(cardElement); // Adiciona os cards na seção correta
    });

    // Gerar cards para Tecnologias Mobile
    cardsMobileData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('cards', 'playing');
        cardElement.innerHTML = `
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
                <img src="${card.icon}" alt="${card.title}" class="icon">
                <br>
                <strong>${card.title}</strong>
                <br>
                <div class="description">${card.description}</div>
            </div>
        `;
        containerMobile.appendChild(cardElement); // Adiciona os cards na seção correta
    });
}

// Chama a função para gerar os cards quando a página carregar
generateCards();
getDescriptionWeb();
getDescriptionMobile();
