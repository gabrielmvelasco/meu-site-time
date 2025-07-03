const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-navegacao");

btnMenu.addEventListener('click', () => {
    if(menu.style.display === 'flex'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
})