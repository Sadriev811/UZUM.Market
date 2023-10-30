let into = document.querySelector('.header_under_left_block')
let intoModal = document.querySelector('.into_modal')
let intoCross = document.querySelector('.into_cross')
let order = document.querySelector('.header_in_left_order')
let intoBtn = document.querySelector('.into_modal_box_btn')
let inputName = document.querySelector('.name')
let inputPassword = document.querySelector('.password')
let inputEmail = document.querySelector('.email')
let into_liked = document.querySelector('.into_liked')
let enter = document.querySelector('.enter')
function Intoo () {
    order.onclick = () => {
        intoModal.classList.add('into_active')
        document.body.style.overflow = 'hidden'
     }
     into.onclick = () => {
        intoModal.classList.add('into_active')
        document.body.style.overflow = 'hidden'
     }
     
     intoCross.onclick = () => {
        intoModal.classList.remove('into_active')
        document.body.style.overflow = 'visible'
        inputName.value = ""
        inputPassword.value = ""
        inputEmail.value = ""
     }
     intoBtn.onclick = () => {
      if(inputName.value == "") {
         inputName.classList.add('input_red')
      }else {
         inputName.classList.remove('input_red')
         inputName.classList.add('input_green')
      }
      if(inputPassword.value.length < 8) {
         inputPassword.classList.add('input_red')
      }else {
         inputPassword.classList.remove('input_red')
         inputPassword.classList.add('input_green')
      }
      if(inputEmail.value == "") {
         inputEmail.classList.add('input_red')
      }else {
         inputEmail.classList.remove('input_red')
         inputEmail.classList.add('input_green')
      }

      if(inputName.classList.contains('input_green') && inputPassword.classList.contains('input_green') && inputEmail.classList.contains('input_green')) {
         intoModal.classList.remove('into_active')
         document.body.style.overflow = 'visible'
         axios.post('http://localhost:3002/into', {
               name: inputName.value,
               password: inputPassword.value,
               email: inputEmail.value,
               isLoggined: 'true'
            });
            localStorage.setItem('isLoggined', 'true')
         window.location.reload()
      }
     }
     document.body.addEventListener('keydown', (event) => {
      if(event.keyCode == 13) {
         if(inputName.value == "") {
            inputName.classList.add('input_red')
         }else {
            inputName.classList.remove('input_red')
            inputName.classList.add('input_green')
         }
         if(inputPassword.value.length < 8) {
            inputPassword.classList.add('input_red')
         }else {
            inputPassword.classList.remove('input_red')
            inputPassword.classList.add('input_green')
         }
         if(inputEmail.value == "") {
            inputEmail.classList.add('input_red')
         }else {
            inputEmail.classList.remove('input_red')
            inputEmail.classList.add('input_green')
         }
   
         if(inputName.classList.contains('input_green') && inputPassword.classList.contains('input_green') && inputEmail.classList.contains('input_green')) {
            intoModal.classList.remove('into_active')
            document.body.style.overflow = 'visible'
            axios.post('http://localhost:3002/into', {
               name: inputName.value,
               password: inputPassword.value,
               email: inputEmail.value,
               isLoggined: 'true'
            });
            localStorage.setItem('isLoggined', 'true');
            window.location.reload()
         }
      }

      inputName.addEventListener('keydown', function (event) {
         if (event.key === 'Enter' && inputPassword.value == "") {
           event.preventDefault();
           inputPassword.focus();
         }
       });
       
       inputPassword.addEventListener('keydown', function (event) {
         if (event.key === 'Enter' && inputEmail.value == "") {
           event.preventDefault();
           inputEmail.focus();
         }
       });
       
       inputEmail.addEventListener('keydown', function (event) {
         if (event.key === 'Enter') {
           event.preventDefault();
           inputName.focus();
         }
       });
  })
         let isLoggined = localStorage.getItem('isLoggined')
      axios.get('http://localhost:3002/into')
         .then(res => {
            for(let item of res.data) {
            console.log(item);
            if(isLoggined === item.isLoggined) {
               enter.textContent = item.name
               order.onclick = () => {
                  intoModal.classList.remove('into_active')
               }
               into.onclick = () => {
                  intoModal.classList.remove('into_active')
               }
            }
         }
         })
  
}

export default Intoo;