document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de Máquina de Escrever no Título Principal
    const textoTitulo = "Como Será Minha Vida";
    const elementoTitulo = document.getElementById("titulo-animado");
    let index = 0;

    function digitarTitulo() {
        if (index < textoTitulo.length) {
            elementoTitulo.textContent += textoTitulo.charAt(index);
            index++;
            setTimeout(digitarTitulo, 100); // Velocidade da digitação (100ms)
        }
    }
    
    // Inicia a digitação logo após carregar a página
    setTimeout(digitarTitulo, 300);


    // 2. Animação de Revelação ao Rolar a Página (Scroll Reveal)
    const cards = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2 // Ativa quando 20% do cartão estiver visível na tela
    });

    cards.forEach((card) => {
        observer.observe(card);
    });


    // 3. Efeito Extra: Partículas / Bolhas Flutuantes em Azul Bebê no Cabeçalho
    const heroSection = document.querySelector(".hero");

    function criarBolha() {
        const bolha = document.createElement("span");
        const tamanho = Math.random() * 40 + 15; // Tamanho entre 15px e 55px
        
        bolha.style.position = "absolute";
        bolha.style.bottom = "-60px";
        bolha.style.left = `${Math.random() * 100}%`;
        bolha.style.width = `${tamanho}px`;
        bolha.style.height = `${tamanho}px`;
        bolha.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        bolha.style.borderRadius = "50%";
        bolha.style.pointerEvents = "none";
        bolha.style.zIndex = "1";
        
        // Animação via Web Animations API do JavaScript
        const duracao = Math.random() * 4000 + 4000; // Entre 4s e 8s
        bolha.animate([
            { transform: "translateY(0) scale(1)", opacity: 0.7 },
            { transform: `translateY(-${window.innerHeight + 100}px) scale(1.3)`, opacity: 0 }
        ], {
            duration: duracao,
            easing: "ease-in-out"
        });

        heroSection.appendChild(bolha);

        // Remove a bolha da memória após terminar de subir
        setTimeout(() => {
            bolha.remove();
        }, duracao);
    }

    // Cria uma nova bolha a cada 600 milissegundos
    setInterval(criarBolha, 600);
});