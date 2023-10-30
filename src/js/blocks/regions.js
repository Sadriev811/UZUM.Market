let d = document
let country = d.querySelector('#country_modal');
let country_box = d.querySelector('.country_modal')
let country_btn = d.querySelector('#country_btn')
let country_btn2 = d.querySelector('#country_btn2')
let cross_country = d.querySelector('.cross')
let country_input = d.querySelector('#country_modal_input')
let burger_a = d.querySelector('.burger_a')
let regions = ['Аккурган', 'Алмазар (Чиназский район)', 'Алмалык', 'Ангрен', 'Андижан', 'Асака', 'Ахангаран', 'Бекабад', 'Бешарык', 'Бухара', 'Газалкент', 'Галаасия', 'Гиждуван', 'Гузар', 'Гулистан', 'Дангара', 'Денау', 'Джалакудук', 'Джизак', 'Жондор', 'Зангиота', 'Зарафшан', 'Ибрат', 'Каган', 'Каракитай', 'Каракуль', 'Карасу (Андижанская обл.)', 'Караулбазар', 'Карши', 'Касан', 'Каттакурган', 'Келес', 'Кибрай', 'Коканд', 'Кувасай', 'Куксарай', 'Кургантепа', 'Маргилан', 'Навои', 'Назарбек', 'Наманган', 'Нукус', 'Нурафшан', 'Пскент', 'Риштан', 'Самарканд', 'Ташкент', 'Термез', 'Туракурган', 'Ургенч', 'Учкудук', 'Фергана', 'Фуркат', 'Ханабад', 'Хива', 'Ходжаабад', 'Ходжейли', 'Чартак', 'Чирчик', 'Чуст', 'Шафиркан', 'Шахрисабз', 'Шахрихан', 'Эшангузар', 'Яйпан', 'Янгибазар', 'Янгийюль']
export function regionModal () {
    
    burger_a.onclick = (e) => {
        e.preventDefault()
        country_box.classList.add('country_active')
     }
    country_btn.onclick = () => {
        country_box.classList.add('country_active')
     }
     cross_country.onclick = () => {
        country_box.classList.remove('country_active')
     }
     for(let i = 0; i < regions.length; i++) {
            let elem = d.createElement('div')
            elem.classList.add('elem')
            country.appendChild(elem)
        
            let h3 = d.createElement('h3')
            h3.classList.add('elem_h3')
            h3.textContent = regions[i]
            elem.appendChild(h3)
            
            elem.onclick = (event) => {
             localStorage.setItem('elem', regions[i]) 
             country_box.classList.remove('country_active')
             window.location.reload()
            }
            if(regions[i] == localStorage.getItem('elem')) {
                country_btn.textContent = localStorage.getItem('elem')
                country_btn2.textContent = localStorage.getItem('elem')
             }  
    }

    country_input.oninput = () => {
        
        let value = country_input.value.trim()
        let allCountry = document.querySelectorAll('.elem')
        
        allCountry.forEach(country => {
        
            if(!country.innerHTML.toLowerCase().includes(value.toLowerCase())){
                country.classList.add('hide')
            } else {
                country.classList.remove('hide')
            }
        })
    }
}
