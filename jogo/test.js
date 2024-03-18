// PÁGINA DE TESTE DE CÓDIGO

const persona = document.querySelector("#persona");
const block = document.querySelector("#vilao");
const container = document.querySelector(".texto");
const button = document.querySelector("#reloud");
const time = document.querySelector("span");

let interval;
let value = parseFloat(time.innerHTML);
interval = setInterval(() => {
    value += 0.1;
    time.innerHTML = value.toFixed(1);
}, 100);

function jump() {
    persona.classList.add("animation");
    setTimeout(() => {
        persona.classList.remove("animation");
    }, 500);
}

const loop = setInterval(() => {
    const posicaoVilao = block.offsetLeft;
    const posicaoPersona = +window.getComputedStyle(persona).bottom.replace("px", "");
    const img = document.querySelector("#img");
    if (posicaoVilao <= 66 && posicaoVilao > 0 && posicaoPersona < -200) {
        block.style.animation = "none";
        block.style.left = `${posicaoVilao}px`;
        clearInterval(interval);
        persona.style.animation = "none";
        img.src = "./fim.png";
        img.style.width = "80px";
        button.style.display = "block";
        clearInterval(loop);
    }
}, 10);

document.addEventListener("keydown", jump);

button.addEventListener("click", () => {
    window.location.reload();
});
