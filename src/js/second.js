import {regionModal} from './blocks/regions.js';
import swiper from './blocks/swiper.js';
import accordion from './blocks/accordion.js';
import loader from './blocks/loader.js';
import inToo from './blocks/into.js';
import burgers from './blocks/burger.js';

regionModal();
swiper();
accordion();
loader();
inToo();
burgers();


let second_box = document.querySelector('.second_box')
let header_under_center_btn = document.querySelector('.header_under_left_block')

axios.get('http://localhost:3002/second')
    .then(res => {
        for (let index = 0; index < 1; index++) {
        let secondItem = res.data.reverse()[index]
        console.log(secondItem);

        // главная картинка 
        let second_box_one = document.createElement('div')
        second_box_one.classList.add('second_box_one')
        second_box.appendChild(second_box_one)

        let second_box_one_img = document.createElement('img')
        second_box_one_img.src = secondItem.media[0]
        second_box_one.appendChild(second_box_one_img)
        // главная картинка 

        // 2 бокс
        let second_box_two = document.createElement('div')
        second_box_two.classList.add('second_box_two')
        second_box.appendChild(second_box_two)
        // 2 бокс

        // рейтинг
        let second_box_two_rating = document.createElement('div')
        second_box_two_rating.classList.add('second_box_two_rating')
        second_box_two.appendChild(second_box_two_rating)
        // рейтинг

        // sales
        let second_box_two_rating_sales = document.createElement('div')
        second_box_two_rating_sales.classList.add('second_box_two_rating_sales')
        second_box_two_rating.appendChild(second_box_two_rating_sales)
        // sales
        

        // sales top
        let second_box_two_rating_sales_top = document.createElement('div')
        second_box_two_rating_sales_top.classList.add('second_box_two_rating_sales_top')
        second_box_two_rating_sales.appendChild(second_box_two_rating_sales_top)
        // sales top
        
        // sales top img
        let second_box_two_rating_sales_top_img = document.createElement('img')
        second_box_two_rating_sales_top_img.src = '../img/star.png'
        second_box_two_rating_sales_top.appendChild(second_box_two_rating_sales_top_img)
        // sales top img

        // sales top a
        let second_box_two_rating_sales_top_span = document.createElement('span')
        second_box_two_rating_sales_top_span.textContent = secondItem.rating
        second_box_two_rating_sales_top.appendChild(second_box_two_rating_sales_top_span)
        // sales top a

        // sales top a span
        let second_box_two_rating_sales_top_a = document.createElement('span')
        second_box_two_rating_sales_top_a.textContent = '(2 оценок)'
        second_box_two_rating_sales_top_span.appendChild(second_box_two_rating_sales_top_a)
        // sales top a span
        
        // sales under
        let second_box_two_rating_sales_under = document.createElement('div')
        second_box_two_rating_sales_under.classList.add('second_box_two_rating_sales_under')
        second_box_two_rating_sales.appendChild(second_box_two_rating_sales_under)
        // sales under

        // sales under h3
        let second_box_two_rating_sales_under_h3 = document.createElement('h3')
        second_box_two_rating_sales_under_h3.textContent = secondItem.howManySale
        second_box_two_rating_sales_under.appendChild(second_box_two_rating_sales_under_h3)
        // sales under h3

        // liked 
        let second_box_two_rating_liked = document.createElement('div')
        second_box_two_rating_liked.innerHTML = `                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M5.95 2.02002C8.51792 2.02002 10 4.17236 10 4.17236C10 4.17236 11.485 2.02002 14.05 2.02002C16.705 2.02002 19 4.09002 19 6.97002C19 11.2005 12.5604 15.6397 10.3651 17.5803C10.1582 17.7632 9.84179 17.7632 9.63488 17.5803C7.44056 15.6409 1 11.2003 1 6.97002C1 4.09002 3.295 2.02002 5.95 2.02002Z" fill="none" fill-opacity="0.8"/>
        <path d="M1 6.88488C1 4.22299 3.15017 2.02002 5.86486 2.02002C7.98685 2.02002 9.35921 3.37878 10 4.20675C10.6408 3.37878 12.0132 2.02002 14.1351 2.02002C16.8506 2.02002 19 4.22304 19 6.88488C19 8.04989 18.5328 9.20624 17.8534 10.285C17.1716 11.3676 16.252 12.4103 15.29 13.3577C13.9567 14.6708 12.4757 15.8587 11.4134 16.7107C10.9618 17.0729 10.5859 17.3744 10.3293 17.599C10.1407 17.7639 9.85926 17.7639 9.67075 17.599C9.41405 17.3744 9.03815 17.0729 8.58659 16.7107C7.52431 15.8587 6.04326 14.6708 4.70997 13.3577C3.74802 12.4103 2.82836 11.3676 2.14659 10.285C1.46724 9.20624 1 8.04989 1 6.88488ZM5.86486 3.02002C3.70929 3.02002 2 4.7684 2 6.88488C2 7.78745 2.36553 8.75609 2.99277 9.7521C3.61759 10.7442 4.47833 11.726 5.41165 12.6452C6.71033 13.9242 8.08423 15.025 9.13396 15.8661C9.45728 16.1252 9.74985 16.3596 10 16.567C10.2501 16.3596 10.5427 16.1252 10.866 15.8661C11.9158 15.025 13.2897 13.9242 14.5883 12.6452C15.5217 11.726 16.3824 10.7442 17.0072 9.7521C17.6345 8.75609 18 7.78745 18 6.88488C18 4.76835 16.2914 3.02002 14.1351 3.02002C12.0406 3.02002 10.8181 4.72213 10.5033 5.2303C10.2727 5.60252 9.72727 5.60251 9.4967 5.23029C9.1819 4.72212 7.95944 3.02002 5.86486 3.02002Z" fill="black"/>
        </svg>`
        second_box_two_rating_liked.classList.add('second_box_two_rating_liked')
        second_box_two_rating.appendChild(second_box_two_rating_liked)
        // liked

        // liked p =======================
        let second_box_two_rating_liked_p = document.createElement('p')
        second_box_two_rating_liked_p.textContent = "В желания"
        second_box_two_rating_liked.appendChild(second_box_two_rating_liked_p)
        // liked p

        // h1
        let h1 = document.createElement('h1')
        h1.textContent = secondItem.title
        second_box_two.appendChild(h1)
        // h1

        // saler
        let second_box_two_saler = document.createElement('div')
        second_box_two_saler.classList.add('second_box_two_saler')
        second_box_two.appendChild(second_box_two_saler)
        // saler
        
        // saler h3
        let second_box_two_saler_h3 = document.createElement('h3')
        second_box_two_saler_h3.textContent = 'Продавец:'
        second_box_two_saler.appendChild(second_box_two_saler_h3)
        // saler h3

        // saler a 
        let second_box_two_saler_a = document.createElement('a')
        second_box_two_saler_a.textContent = secondItem.boss
        second_box_two_saler.appendChild(second_box_two_saler_a)
        // saler a

        // toHome
        let second_box_two_tohome = document.createElement('div')
        second_box_two_tohome.classList.add('second_box_two_tohome')
        second_box_two.appendChild(second_box_two_tohome)
        // toHOme

        // tohome h3
        let second_box_two_tohome_h3 = document.createElement('h3')
        second_box_two_tohome_h3.textContent = 'Доставка'
        second_box_two_tohome.appendChild(second_box_two_tohome_h3)
        // tohome h3

        // tohome p
        let second_box_two_tohome_p = document.createElement('p')
        second_box_two_tohome_p.textContent = '1 день, бесплатно'
        second_box_two_tohome.appendChild(second_box_two_tohome_p)
        // tohome p

        // hr
        let hr = document.createElement('hr')
        second_box_two.appendChild(hr)
        // hr

        // h4 1
        let second_box_two_h4 = document.createElement('h4')
        second_box_two_h4.textContent = 'Цвет:'
        second_box_two.appendChild(second_box_two_h4)
        // h4 1

        // second_box_two_colors
        let second_box_two_colors = document.createElement('div')
        second_box_two_colors.classList.add('second_box_two_colors')
        second_box_two.appendChild(second_box_two_colors)
        // second_box_two_colors

        // second_box_two_colors_blcoks
        for(let elem of secondItem.colors) {
            let second_box_two_colors_block = document.createElement('button')
            second_box_two_colors_block.style.backgroundColor = elem
            second_box_two_colors_block.onclick = function () {
                toggleClass(this);
            }
            second_box_two_colors_block.classList.add('second_box_two_colors_block')
            second_box_two_colors.appendChild(second_box_two_colors_block)

        }
        // second_box_two_colors_blocks

        // h4 2
        let second_box_two_h4_2 = document.createElement('h4')
        second_box_two_h4_2.textContent = 'Размер:'
        second_box_two.appendChild(second_box_two_h4_2)
        // h4 2

        // second_box_two_size
        let second_box_two_size = document.createElement('div')
        second_box_two_size.classList.add('second_box_two_size')
        second_box_two.appendChild(second_box_two_size)
        // second_box_two_size

        // second_box_two_size_block
        for(let item of secondItem.size) {
            let second_box_two_size_block = document.createElement('div')
            second_box_two_size_block.textContent = item
            second_box_two_size_block.onclick = function () {
                toggleClass2(this);
            }
            second_box_two_size_block.classList.add('second_box_two_size_block')
            second_box_two_size.appendChild(second_box_two_size_block)
        }
        // second_box_two_size_block

        // h4 3
        let second_box_two_h4_3 = document.createElement('h4')
        second_box_two_h4_3.textContent = 'Количество:'
        second_box_two.appendChild(second_box_two_h4_3)
        // h4 3

        // second_box_two_counter
        let second_box_two_counter = document.createElement('div')
        second_box_two_counter.classList.add('second_box_two_counter')
        second_box_two.appendChild(second_box_two_counter)
        // second_box_two_counter

        // second_box_two_counter_left
        let second_box_two_counter_left = document.createElement('div')
        second_box_two_counter_left.classList.add('second_box_two_counter_left')
        second_box_two_counter.appendChild(second_box_two_counter_left)
        // second_box_two_counter_left

        // minusBtn 
        let minBtn = document.createElement('button')
        minBtn.textContent = '-'
        second_box_two_counter_left.appendChild(minBtn)
        // minusBtn

        // centerInp     
        let centerInp = document.createElement('input')
        centerInp.value = '1'
        centerInp.readOnly = true
        second_box_two_counter_left.appendChild(centerInp)  
        // centerInp

        // plusBtn
        let plusBtn = document.createElement('button')
        plusBtn.textContent = '+'
        second_box_two_counter_left.appendChild(plusBtn)
        // plusBtn


        minBtn.onclick = () => {
            centerInp.value--
            if(centerInp.value <= 1) {
                centerInp.value = 1
            }
        }
        plusBtn.onclick = () => {
            centerInp.value++
            if(centerInp.value >= secondItem.have) {
                centerInp.value = secondItem.have
            }
            
        }


        // second_box_two_counter_right
        let second_box_two_counter_right = document.createElement('div')
        second_box_two_counter_right.classList.add('second_box_two_counter_right')
        second_box_two_counter.appendChild(second_box_two_counter_right)
        // second_box_two_counter_right
        
        // second_box_two_counter_right_h3 
        let second_box_two_counter_right_h3 = document.createElement('h3')
        second_box_two_counter_right_h3.textContent = `В наличии ${secondItem.have}`
        second_box_two_counter_right.appendChild(second_box_two_counter_right_h3)
        // second_box_two_counter_right_h3

         // h4 4
         let second_box_two_h4_4 = document.createElement('h4')
         second_box_two_h4_4.textContent = 'Цена:'
         second_box_two.appendChild(second_box_two_h4_4)
         // h4 4

        // second_box_two_price
        let second_box_two_price = document.createElement('div')
        second_box_two_price.classList.add('second_box_two_price')
        second_box_two.appendChild(second_box_two_price)
        // second_box_two_price

        // second_box_two_price_new
        let second_box_two_price_new = document.createElement('h3')
        second_box_two_price_new.classList.add('second_box_two_price_new')
        second_box_two_price_new.textContent = `${secondItem.price} сум`
        second_box_two_price.appendChild(second_box_two_price_new)
        // second_box_two_price_new

        // second_box_two_price_old
        let second_box_two_price_old = document.createElement('h5')
        second_box_two_price_old.classList.add('second_box_two_price_old')
        second_box_two_price_old.textContent = `${secondItem.oldPrice} сум`
        second_box_two_price.appendChild(second_box_two_price_old)
        // second_box_two_price_old

        // ifaction
        if(secondItem.isBlackFriday == true) {
            let second_box_two_price_ifaction = document.createElement('img')
            second_box_two_price_ifaction.src = '../img/action.png'
            second_box_two_price.appendChild(second_box_two_price_ifaction)
        }
        // ifaction

        // second_box_two_month
        let second_box_two_month = document.createElement('div')
        second_box_two_month.classList.add('second_box_two_month')
        second_box_two.appendChild(second_box_two_month)
        // second_box_two_month

        // second_box_two_month_many
        let second_box_two_month_many = document.createElement('div')
        second_box_two_month_many.textContent = `От ${secondItem.monthPrice} сум/мес`
        second_box_two_month_many.classList.add('second_box_two_month_many')
        second_box_two_month.appendChild(second_box_two_month_many)
        // second_box_two_month_many

        // span 
        let second_box_two_month_span = document.createElement('span')
        second_box_two_month_span.textContent = 'в рассрочку'
        second_box_two_month.appendChild(second_box_two_month_span)
        // span

        // second_box_two_btns
        let second_box_two_btns = document.createElement('div')
        second_box_two_btns.classList.add('second_box_two_btns')
        second_box_two.appendChild(second_box_two_btns)
        // second_box_two_btns

        // second_box_two_btns1
        let second_box_two_btns_one = document.createElement('button')
        second_box_two_btns_one.classList.add('second_box_two_btns_one')
        second_box_two_btns_one.textContent = "Добавить в корзину"
        second_box_two_btns.appendChild(second_box_two_btns_one)
        // second_box_two_btns1

         // second_box_two_btns2
         let second_box_two_btns_two = document.createElement('button')
         second_box_two_btns_two.classList.add('second_box_two_btns_two')
         second_box_two_btns_two.textContent = "Купить в 1 клик"
         second_box_two_btns.appendChild(second_box_two_btns_two)
         // second_box_two_btns2

        // second_box_two_bought
        let second_box_two_bought = document.createElement('div')
        second_box_two_bought.classList.add('second_box_two_bought')
        second_box_two.appendChild(second_box_two_bought)
        // second_box_two_bought

        // second_box_two_bought_img 
        let second_box_two_bought_img = document.createElement('img')
        second_box_two_bought_img.src = '../img/Frame.png'
        second_box_two_bought.appendChild(second_box_two_bought_img)
        // second_box_two_bought_img
        
        // second_box_two_bought_p
        let second_box_two_bought_p = document.createElement('p')
        second_box_two_bought_p.textContent = secondItem.bought
        second_box_two_bought.appendChild(second_box_two_bought_p)
        // second_box_two_bought_p
    }
})

function toggleClass (elem) {
    let color_block = document.querySelectorAll('.second_box_two_colors_block')

    color_block.forEach(item => {
        if(item !== elem) {
            item.classList.remove('border_active')
        }
    });

    elem.classList.toggle('border_active');
}
function toggleClass2 (elem) {
    let color_block = document.querySelectorAll('.second_box_two_size_block')

    color_block.forEach(item => {
        if(item !== elem) {
            item.classList.remove('border_active')
        }
    });

    elem.classList.toggle('border_active');
}