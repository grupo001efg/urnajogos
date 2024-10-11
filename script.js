const votos = {
    "Free Fire": 0,
    "Minecraft": 0,
    "GTA": 0,
    "Roblox": 0,
    "Angela": 0
};

function registrarVoto() {
    const form = document.getElementById('votacao');
    const resultado = document.getElementById('resultado');
    const voto = form.comida.value;

    if (voto) {
        votos[voto]++;
        resultado.innerHTML = `Você votou em: ${voto}`;
        atualizarContador();
    } else {
        resultado.innerHTML = 'Por favor, selecione uma opção.';
    }
}

function atualizarContador() {
    document.getElementById('freeFireCount').innerText = votos["Free Fire"];
    document.getElementById('minecraftCount').innerText = votos["Minecraft"];
    document.getElementById('gtaCount').innerText = votos["GTA"];
    document.getElementById('robloxCount').innerText = votos["Roblox"];
    document.getElementById('angelaCount').innerText = votos["Angela"];
}

