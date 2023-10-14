function btnMenu(){

    var menuLateral = document.getElementById('imenu-lateral');
    var main = document.getElementById('main')
    
    menuLateral.style.left = "0%"
    menuLateral.style.transition = '0.3s'
    
    main.style.display = 'none'
}

function btnFechar(){
    var menuLateral = document.getElementById('imenu-lateral');
    menuLateral.style.left = "120%"
    menuLateral.style.transition = '0.1s'

    var main = document.getElementById('main')
    main.style.display = 'block'

}





var follower = document.getElementById('follower');
document.documentElement.addEventListener('mousemove', (e) => {
    var x = e.clientX - 150; // 50 é metade da largura da div
    var y = e.clientY - 150; // 50 é metade da altura da div
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
});







