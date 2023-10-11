function btnMenu(){

    var b = document.getElementById('imenu-lateral');
    var a = document.getElementById('main')
    a.style.display = 'none'
    b.style.left = "0%"
    b.style.transition = '0.3s'
}

function btnFechar(){
    var b = document.getElementById('imenu-lateral');
    b.style.left = "120%"
    b.style.transition = '0.1s'
    var a = document.getElementById('main')
    a.style.display = 'block'

}

