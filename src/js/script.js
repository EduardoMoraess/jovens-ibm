//menu mobile
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

const menuBtn = document.getElementById('mobile-menu-btn');
menuBtn.addEventListener('click', toggleMenu);


//acessar agenda
function acessarAgenda(){
    const acessAgenda = document.getElementById('acess-agenda');

    acessAgenda.addEventListener('click', ()=>{
        
        window.open('https://agenda-ibm-ipsep.netlify.app/', '_blank')
    })
}
acessarAgenda();

//recomendação de musicas
function musicRecomendacao(){
    const acessMusic = document.getElementById('acess-music');

    acessMusic.addEventListener('click', ()=>{
        window.open('https://radio-music.netlify.app/', '_blank');
    })
}
musicRecomendacao();