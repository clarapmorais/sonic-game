// PÁGINA DE TESTE DE CÓDIGO

const inicio = document.querySelector("#inicio"); // Botão para iniciar
const persona = document.querySelector("#persona"); // Personagem
const block = document.querySelector("#vilao"); // Rocha
const nuvens = document.querySelector("#nuvens"); // Nuvens
const reiniciar = document.querySelector("#reloud"); // Botão para recarregar a página

// Garantindo que não haja animação antes do play
persona.style.animation = "none";
block.style.animation = "none";
nuvens.style.animation = "none";

// Evento play (Inicia o jogo)
inicio.addEventListener("click", () => {

    // Configurações iniciais
    inicio.style.display = "none"; // Garantir que o botão não seja visível durante o jogo
    // Inicia a animação dos objetos do jogo
    persona.style.animation = "";
    block.style.animation = "";
    nuvens.style.animation = "";

    // Função para contagem do tempo, dispara assim que clicar em iniciar
    const time = document.querySelector("span");
    let interval;
    let value = parseFloat(time.innerHTML);
    interval = setInterval(() => {
        value += 0.1;
        time.innerHTML = value.toFixed(1);
    }, 100);

    // Função para cliques no teclado
    document.addEventListener("keydown", jump);

    function jump() { // Função para garantir a movimentação do personagem
        persona.classList.add("animation"); // Adiciona a classe animação ao personagem

        setTimeout(() => { // Com um período de 500ms, retira a classe do personage
            persona.classList.remove("animation");
        }, 500);
    }

    // Função para controlar o fim do jogo
    const loop = setInterval(() => {
        const posicaoVilao = block.offsetLeft; // Calcular a posição da rocha
        const posicaoPersona = +window.getComputedStyle(persona).bottom.replace("px", ""); // Calcular a altura do pulo do personagem
        const img = document.querySelector("#img"); // Para modificar a imagem do personagem ao fim do jogo

        // Analisando se há uma colisão entre o personagem e a rocha
        if (posicaoVilao <= 66 && posicaoVilao > 0 && posicaoPersona < -200) {
            // Parar a animação da rocha
            block.style.animation = "none";
            block.style.left = `${posicaoVilao}px`;

            // Parar o cronômetro
            clearInterval(interval);

            // Parar e modificar a imagem do personagem
            persona.style.animation = "none";
            img.src = "./Imagens/fim.png";
            img.style.width = "80px";

            // Apresentar o botão para reiniciar o jogo
            reiniciar.style.display = "block";

            // Para a função de contagem das posições
            clearInterval(loop);
        }
    }, 10);
});

// Botão para reiniciar a página
reiniciar.addEventListener("click", () => {
    window.location.reload();
});
