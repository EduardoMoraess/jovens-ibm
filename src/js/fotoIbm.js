/**
 * 1. CONFIGURAÇÃO DE CAMINHO
 * Verifique se a pasta é realmente '../img/imgIBM/' 
 * (O '../' significa que o JS está dentro de uma pasta e a imagem está em outra fora dela)
 */
const CAMINHO_PASTA = '../img/imgIBM/';

/**
 * 2. LISTA DE ARQUIVOS
 * Verifique se os nomes abaixo estão EXATAMENTE iguais aos arquivos na pasta.
 */
const imagens = [
    "IMG-20260405-WA0039.jpg", "IMG-20260405-WA0040.jpg", "IMG-20260405-WA0041.jpg",
    "IMG-20260405-WA0042.jpg", "IMG-20260405-WA0043.jpg", "IMG-20260405-WA0044.jpg",
    "IMG-20260405-WA0045.jpg", "IMG-20260405-WA0046.jpg", "IMG-20260405-WA0047.jpg",
    "IMG-20260405-WA0048.jpg", "IMG-20260405-WA0048.jpg", "IMG-20260405-WA0048.jpg",
    "IMG-20260405-WA0048.jpg", "IMG-20260405-WA0048.jpg", "IMG-20260405-WA0049.jpg",
    "IMG-20260405-WA0050.jpg", "IMG-20260405-WA0051.jpg", "IMG-20260405-WA0052.jpg",
    "IMG-20260405-WA0053.jpg", "IMG-20260405-WA0054.jpg", "IMG-20260405-WA0055.jpg",
    "IMG-20260405-WA0056.jpg", "IMG-20260405-WA0057.jpg", "IMG-20260405-WA0058.jpg",
    "IMG-20260405-WA0059.jpg", "IMG-20260405-WA0060.jpg", "IMG-20260405-WA0061.jpg",
    "IMG-20260405-WA0062.jpg", "IMG-20260405-WA0063.jpg", "IMG-20260405-WA0064.jpg",
    "IMG-20260405-WA0065.jpg", "IMG-20260405-WA0066.jpg", "IMG-20260405-WA0067.jpg",
    "IMG-20260405-WA0068.jpg", "IMG-20260405-WA0069.jpg", "IMG-20260405-WA0070.jpg",
    "IMG-20260405-WA0071.jpg", "IMG-20260405-WA0072.jpg", "IMG-20260405-WA0073.jpg",
    "IMG-20260405-WA0074.jpg", "IMG-20260405-WA0075.jpg", "IMG-20260405-WA0076.jpg",
    "IMG-20260405-WA0077.jpg", "IMG-20260405-WA0078.jpg", "IMG-20260405-WA0079.jpg",
    "IMG-20260405-WA0080.jpg", "IMG-20260405-WA0081.jpg", "IMG-20260405-WA0082.jpg",
    "IMG-20260405-WA0083.jpg", "IMG-20260405-WA0084.jpg", "IMG-20260405-WA0085.jpg",
    "IMG-20260405-WA0086.jpg"
];

/**
 * 3. ELEMENTOS DO HTML
 */
const grid = document.getElementById('masonry-grid');
const modal = document.getElementById('photo-modal');
const modalImg = document.getElementById('img-expanded');
const closeModal = document.querySelector('.close-modal');

/**
 * 4. FUNÇÃO PARA GERAR A GALERIA
 */
function carregarGaleria() {
    if (!grid) return;

    // Limpa o grid antes de começar para não duplicar nada
    grid.innerHTML = '';

    imagens.forEach((nomeFoto, index) => {
        const item = document.createElement('div');
        item.className = 'pin-item';

        const source = `${CAMINHO_PASTA}${nomeFoto}`;
        const titulo = `Foto #${index + 1}`;

        item.innerHTML = `
            <img src="${source}" alt="${titulo}" loading="lazy" onerror="this.parentElement.style.display='none'">
            <div class="pin-overlay">
                <span class="pin-title">${titulo}</span>
            </div>
        `;

        // Abrir modal
        item.addEventListener('click', () => {
            if (modal && modalImg) {
                modal.style.display = "flex";
                modalImg.src = source;
            }
        });

        grid.appendChild(item);
    });
}

/**
 * 5. EVENTOS DE FECHAMENTO
 */
if (closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// Fecha com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal) modal.style.display = "none";
});

// Inicia tudo
document.addEventListener('DOMContentLoaded', carregarGaleria);