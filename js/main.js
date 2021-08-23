const modalOpen = document.querySelectorAll('.facts__card')
const modal = document.querySelector('.modal__overlay')
const content = document.querySelector('.modal__window')
const closeElements = document.querySelectorAll('.for-close')
const ANIMATION_SPEED = 300
const body = document.querySelector('.body')

for (var item of modalOpen) {
    item.onclick = function(){
        modal.classList.add('modal-active')
        body.classList.add('special_view')
    }
}

for (var element of closeElements) {
    element.onclick = function() {
        body.classList.remove('special_view')
        content.classList.add('hide')
        setTimeout(() => {
            content.classList.remove('hide')
            modal.classList.remove('modal-active')
        },ANIMATION_SPEED)
        
    }
}

const btnShow = document.querySelector('.more__btn')
const companies = document.querySelector('.bet__companies')
btnShow.onclick = function(){
    companies.classList.toggle('accordeon')

}

/**menu burger*/
const mobileBtn = document.querySelector('.mobile__btn')
const mobileItem = document.querySelector('.mobile__wrapper')
const mobileBg = document.querySelector('.mobile__hide_bg')
const burgerItems = document.querySelectorAll('.burger__element')
const firstBurger = document.querySelector('.span__rotate_1')
const secondBurger = document.querySelector('.span__rotate_2')
const lastBurger = document.querySelector('.span__hide')

mobileBtn.onclick = function() {
    mobileItem.classList.toggle('mobile__active')
    mobileBg.classList.toggle('mobile__active')
    for( var btnItem of burgerItems) {
        btnItem.classList.toggle('btn-styles')
    }
    firstBurger.classList.toggle('span-deg1')
    secondBurger.classList.toggle('span-deg2')
    lastBurger.classList.toggle('hiding-span')
    body.classList.toggle('special_view')
}

