"use strict"
const btnParent = document.querySelector('.button'),
    btns = document.querySelectorAll('.btn-solid'),
    imgContent = document.querySelectorAll('.img'),
    mainFooterParent = document.querySelector('.main-footer'),
    mainFooter = document.querySelectorAll('.main-footer__item'),
    menu = document.querySelector('.menu'),
    sidebar = document.querySelector('.sidebar')

    function hideTabContent () {
        imgContent.forEach((item) => {
            item.classList.add('hidden')
        })
        btns.forEach(item => {
            item.classList.remove('border')
        })
        
    }
    function showTabContent(i) {
        imgContent[i].classList.remove('hidden')
        imgContent[i].classList.add('animation')
        btns[i].classList.add('border')
    }

    hideTabContent()
    showTabContent(0)

    function hideTabFooter(i){
       mainFooter[i].classList.add('hidden')
    }
    function showTabFooter() {
        mainFooter.forEach(item => {
            item.classList.remove('hidden')
        })
    }
    showTabFooter()
    hideTabFooter(0)
    btnParent.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('btn-solid')){
            btns.forEach((item, index) => {
                if(e.target === item){
                    hideTabContent()
                    showTabContent(index)
                }
               
            })
        }
    })
    mainFooterParent.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('main-footer__item')){
            mainFooter.forEach((item, index) => {
                if(e.target === item){
                    hideTabContent()
                    showTabContent(index)
                    hideTabFooter(index)
                    showTabFooter()
                }
            })
            e.target.classList.add('hidden')
        }
        
        
    })

    menu.addEventListener('click', () =>{
        sidebar.classList.toggle('active')
        sidebar.classList.add('transition')
    })