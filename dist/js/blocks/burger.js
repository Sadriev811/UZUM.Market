let burger = document.querySelector('.header_under_home_burger')
let burger_menu = document.querySelector('.burger_menu')
let burger_cross = document.querySelector('.burger_menu_box_header_cross')

function burgers () {
    burger.onclick = () => {
        burger_menu.classList.add('burger_active')
        console.log(burger_menu);
    }
    burger_cross.onclick = () => {
        burger_menu.classList.remove('burger_active')
    }
    
}

export default burgers;