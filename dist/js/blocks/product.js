async function product () {
    let mainFirstBox = document.querySelector('.main_first_box')
    let moreBtn = document.querySelector('.more_btn')
axios.get('http://localhost:3002/values')
   .then(res => {
        
      for (let i = 0; i < res.data.length; i++) {
         let item = res.data[i]

         // блоки
         let mainFirstBoxBlock = document.createElement('div')
         mainFirstBoxBlock.classList.add('main_first_box_block')
         mainFirstBox.appendChild(mainFirstBoxBlock)

         let blocks = document.querySelectorAll('.main_first_box_block')

         // иконки
         let firstBlockImg = document.createElement('div')
         firstBlockImg.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path d="M5.95 2.02002C8.51792 2.02002 10 4.17236 10 4.17236C10 4.17236 11.485 2.02002 14.05 2.02002C16.705 2.02002 19 4.09002 19 6.97002C19 11.2005 12.5604 15.6397 10.3651 17.5803C10.1582 17.7632 9.84179 17.7632 9.63488 17.5803C7.44056 15.6409 1 11.2003 1 6.97002C1 4.09002 3.295 2.02002 5.95 2.02002Z" fill="none" fill-opacity="0.8"/>
      <path d="M1 6.88488C1 4.22299 3.15017 2.02002 5.86486 2.02002C7.98685 2.02002 9.35921 3.37878 10 4.20675C10.6408 3.37878 12.0132 2.02002 14.1351 2.02002C16.8506 2.02002 19 4.22304 19 6.88488C19 8.04989 18.5328 9.20624 17.8534 10.285C17.1716 11.3676 16.252 12.4103 15.29 13.3577C13.9567 14.6708 12.4757 15.8587 11.4134 16.7107C10.9618 17.0729 10.5859 17.3744 10.3293 17.599C10.1407 17.7639 9.85926 17.7639 9.67075 17.599C9.41405 17.3744 9.03815 17.0729 8.58659 16.7107C7.52431 15.8587 6.04326 14.6708 4.70997 13.3577C3.74802 12.4103 2.82836 11.3676 2.14659 10.285C1.46724 9.20624 1 8.04989 1 6.88488ZM5.86486 3.02002C3.70929 3.02002 2 4.7684 2 6.88488C2 7.78745 2.36553 8.75609 2.99277 9.7521C3.61759 10.7442 4.47833 11.726 5.41165 12.6452C6.71033 13.9242 8.08423 15.025 9.13396 15.8661C9.45728 16.1252 9.74985 16.3596 10 16.567C10.2501 16.3596 10.5427 16.1252 10.866 15.8661C11.9158 15.025 13.2897 13.9242 14.5883 12.6452C15.5217 11.726 16.3824 10.7442 17.0072 9.7521C17.6345 8.75609 18 7.78745 18 6.88488C18 4.76835 16.2914 3.02002 14.1351 3.02002C12.0406 3.02002 10.8181 4.72213 10.5033 5.2303C10.2727 5.60252 9.72727 5.60251 9.4967 5.23029C9.1819 4.72212 7.95944 3.02002 5.86486 3.02002Z" fill="black"/>
      </svg>
         `
         firstBlockImg.classList.add('main_first_box_block_like')
         mainFirstBoxBlock.appendChild(firstBlockImg)
         // иконки
         

         if(item.isBlackFriday == true) {
            let firstBlockAction = document.createElement('img')
            firstBlockAction.src = "../img/action.png"
            firstBlockAction.classList.add('main_first_box_block_action')
            mainFirstBoxBlock.appendChild(firstBlockAction)
         }

         // top
         let firstBlockTop = document.createElement('div')
         firstBlockTop.classList.add('main_first_box_block_top')
         mainFirstBoxBlock.appendChild(firstBlockTop)

         let ref = document.createElement('a')
         ref.href = 'second.html'
         ref.classList.add('main_first_box_block')
         firstBlockTop.appendChild(ref)

         // images
         let firstBlockTopImage = document.createElement('img')
         firstBlockTopImage.classList.add('main_first_box_block_top_img')
         firstBlockTopImage.src = item.media[0]
         firstBlockTopImage.style.width = "100%"
         firstBlockTopImage.style.height = "380px"
         firstBlockTopImage.style.borderRadius = "8px"
         firstBlockTopImage.style.objectFit = 'cover'
         ref.appendChild(firstBlockTopImage)

        // 
        firstBlockTopImage.onclick = (event) => {
            axios.post('http://localhost:3002/second', item)
            axios.get('http://localhost:3002/second')
                .then(res => {
                    for (let index = 0; index < 1; index++) {
                        let secondItem = res.data.reverse()[index]
                    }
                })
            
            
        }


         // bottom
         let firstBlockBottom = document.createElement('div')
         firstBlockBottom.classList.add('main_first_box_block_bottom')
         mainFirstBoxBlock.appendChild(firstBlockBottom)

         // h2
         let firstBlockBottomH2 = document.createElement('h2')
         firstBlockBottomH2.textContent = item.title
         firstBlockBottomH2.classList.add('main_first_box_block_bottom_h2')
         firstBlockBottom.appendChild(firstBlockBottomH2)

         // rating
         let firstBlockBottomRating = document.createElement('div')
         firstBlockBottomRating.classList.add('main_first_box_block_bottom_rating')
         firstBlockBottom.appendChild(firstBlockBottomRating)

         // ratingImg
         let firstBlockBottomRatingImg = document.createElement('img')
         firstBlockBottomRatingImg.src = "../img/star.png"
         firstBlockBottomRating.appendChild(firstBlockBottomRatingImg)
         
         // ratingA
         let firstBlockBottomRatingA = document.createElement('a')
         firstBlockBottomRatingA.classList.add('main_first_box_block_bottom_rating_a')
         firstBlockBottomRatingA.textContent = `${item.rating} (2 оценок)`
         firstBlockBottomRating.appendChild(firstBlockBottomRatingA)

         // bottomItem
         let firstBlockBottomItem = document.createElement('div')
         firstBlockBottomItem.classList.add('main_first_box_block_bottom_item')
         firstBlockBottom.appendChild(firstBlockBottomItem)

         // bottomItemH3
         let firstBlockBottomItemH3 = document.createElement('h3')
         firstBlockBottomItemH3.classList.add('main_first_box_block_bottom_item_h3')
         firstBlockBottomItemH3.textContent = `${item.monthPrice} сум`
         firstBlockBottomItem.appendChild(firstBlockBottomItemH3)
         
         // moneyBox
         let firstBlockBottomMoneyBox = document.createElement('div')
         firstBlockBottomMoneyBox.classList.add('main_first_box_block_bottom_moneybox')
         firstBlockBottom.appendChild(firstBlockBottomMoneyBox)

         // moneyBoxMoney
         let firstBlockBottomMoneyBoxMoney = document.createElement('div')
         firstBlockBottomMoneyBoxMoney.classList.add('main_first_box_block_bottom_moneybox_money')
         firstBlockBottomMoneyBox.appendChild(firstBlockBottomMoneyBoxMoney)

         // moneyBoxMoneyP
         let firstBlockBottomMoneyBoxP = document.createElement('p')
         firstBlockBottomMoneyBoxP.classList.add('main_first_box_block_bottom_moneybox_money_p')
         firstBlockBottomMoneyBoxP.textContent = `${item.oldPrice} сум`
         firstBlockBottomMoneyBoxMoney.appendChild(firstBlockBottomMoneyBoxP)

         // moneyBoxMoneyH4
         let firstBlockBottomMoneyBoxH4 = document.createElement('h4')
         firstBlockBottomMoneyBoxH4.classList.add('main_first_box_block_bottom_moneybox_money_h4')
         firstBlockBottomMoneyBoxH4.textContent = `${item.price} сум`
         firstBlockBottomMoneyBoxMoney.appendChild(firstBlockBottomMoneyBoxH4)

         // moneyBoxMoneyImages
         let firstBlockBottomMoneyBoxImage = document.createElement('img')
         firstBlockBottomMoneyBoxImage.src = "../img/packet.svg"
         firstBlockBottomMoneyBoxImage.classList.add('main_first_box_block_bottom_moneybox_packet')
         firstBlockBottomMoneyBox.appendChild(firstBlockBottomMoneyBoxImage)



         firstBlockBottomMoneyBoxImage.onclick = () => {
            firstBlockBottomMoneyBoxImage.classList.toggle('packet_active')

            if (firstBlockBottomMoneyBoxImage.classList.contains('packet_active')) {
               axios.post('http://localhost:3002/backet', item)
            }else {
                let idd2 = item.id
                axios.delete(`http://localhost:3002/backet/${idd2}`)
            }
         }

        //  more_btn
         moreBtn.onclick = () => {
            blocks.forEach(el => {
               el.style.display = 'block' 
            });
            moreBtn.style.display = 'none'
         }
        

        //  POST ============================================================
         
         firstBlockImg.onclick= (event) => {
            firstBlockImg.classList.toggle('first_block_img')

            if (firstBlockImg.classList.contains('first_block_img')) {
               axios.post('http://localhost:3002/liked', item)
            }else {
                let idd = item.id
                axios.delete(`http://localhost:3002/liked/${idd}`)
            }
         }

         //  POST ============================================================
         

      }
   });
}
export default product;