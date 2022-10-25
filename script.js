const slides = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');
var counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`;
})
const slideImages = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
        if(counter == slides.length){
            counter = 1;
        }
        if(counter < 1){
            counter = slide.length;
        }
    })
}
const currentSlide = () =>{
    counter++;
    slideImages()
}
setInterval(currentSlide,3000)

// --------------------------------- NAV animation  ----------------------------------
const searchBtn = document.querySelector('nav .desktop-view .searchIcon');
const closeBtn = document.querySelector('.search-container .close');
const navBar = document.querySelector('.desktop-view');
const searchContainer = document.querySelector('.search-container');
const overlay = document.querySelector('.overlay');

searchBtn.addEventListener('click',()=>{
    navBar.classList.add('hide');
    searchContainer.classList.remove('hide')
    overlay.classList.add('show')
})
closeBtn.addEventListener('click',()=>{
    navBar.classList.remove('hide');
    searchContainer.classList.add('hide')
    overlay.classList.remove('show')
})
closeBtn.addEventListener('click',()=>{
    navBar.classList.remove('hide');
    searchContainer.classList.add('hide')
    overlay.classList.remove('show')
})

// Mobile view navbar
const menuContainer = document.querySelector('nav .menu-icon-box')
const navContainer = document.querySelector('.nav-container')

menuContainer.addEventListener('click',()=>{
    navContainer.classList.toggle('active')
})


const searchBar = document.querySelector('.mobile-search-container .search-box')
const nav = document.querySelector('.nav-container nav')
const search = document.querySelector('.mobile-search-container input')
const cancelBtn = document.querySelector('.mobile-search-container .cancel-btn')

search.addEventListener('click',()=>{
    searchBar.classList.add('active')
    nav.classList.add('move-up')
    navBar.classList.add('nav-move-down')
})
cancelBtn.addEventListener('click',()=>{
    searchBar.classList.remove('active')
    nav.classList.remove('move-up')
    navBar.classList.remove('nav-move-down')
})


//  Nav Cart
const bagIcon = document.querySelector('.nav-container nav .desktop-view .link-bag')
const navCart = document.querySelector('.nav-cart')
bagIcon.addEventListener('click',()=>{
    navCart.classList.toggle('active')
})








