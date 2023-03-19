AOS.init();


const as = document.querySelectorAll('.food-type>ul>li>a')

const foods = document.querySelector('.foods')


const all_foods = [
 {
    img1:"./assets/1.png" ,
    img2:"./assets/2.png" ,
    img3:"./assets/3.png" ,
    img4:"./assets/4.png" ,
    img5:"./assets/5.png" ,
    img6:"./assets/6.png" 
 } ,
 
 {
    img1:"./assets/13.png" ,
    img2:"./assets/14.png" ,
    img3:"./assets/15.png" ,
    img4:"./assets/16.png" ,
    img5:"./assets/17.png" ,
    img6:"./assets/18.png" 
 }
 ,
 {
    img1:"./assets/dinner1.png" ,
    img2:"./assets/dinner2.png" ,
    img3:"./assets/dinner3.png" ,
    img4:"./assets/dinner4.png" ,
    img5:"./assets/dinner5.png" ,
    img6:"./assets/dinner6.png" 
 }
 ,
 {
    img1:"./assets/wine1.png" ,
    img2:"./assets/wine2.png" ,
    img3:"./assets/wine3.png" ,
    img4:"./assets/wine4.png" ,
    img5:"./assets/wine5.png" ,
    img6:"./assets/wine6.png" 
 }
]



as[0].addEventListener('click' , e=> {
    as[1].classList.remove('active')
    as[2].classList.remove('active')
    as[3].classList.remove('active')
    as[0].classList.add('active')

    foods.innerHTML = `
    <div class="food">
<div class="food-img">
    <img src=${all_foods[0].img1}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[0].img2}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[0].img3}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[0].img4}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[0].img5}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[0].img6}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
`
    
})
as[1].addEventListener('click' , e=> {
    as[0].classList.remove('active')
    as[2].classList.remove('active')
    as[3].classList.remove('active')
    as[1].classList.add('active')


    foods.innerHTML = `
    <div class="food">
<div class="food-img">
    <img src=${all_foods[1].img1}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[1].img2}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[1].img3}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[1].img4}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[1].img5}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[1].img6}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
`
    
})
as[2].addEventListener('click' , e=> {
    as[0].classList.remove('active')
    as[1].classList.remove('active')
    as[3].classList.remove('active')
    as[2].classList.add('active')

    foods.innerHTML = `
    <div class="food">
<div class="food-img">
    <img src=${all_foods[2].img1}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[2].img2}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[2].img3}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[2].img4}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[2].img5}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[2].img6}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
`
})
as[3].addEventListener('click' , e=> {
    as[1].classList.remove('active')
    as[2].classList.remove('active')
    as[0].classList.remove('active')
    as[3].classList.add('active')

    foods.innerHTML = `
    <div class="food">
<div class="food-img">
    <img src=${all_foods[3].img1}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[3].img2}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[3].img3}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[3].img4}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[3].img5}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
<div class="food">
<div class="food-img">
    <img src=${all_foods[3].img6}>
</div>
<div class="food-data">
    <div class="upper">
        <h5>Lasagne</h5>
        <div></div>
        <p>$3.45</p>
    </div>
    <div class="lower">
        <p>
            Vegetables, cheeses, ground meats, tomato sauce,
             seasonings and spices
        </p>
    </div>
</div>
</div>
`
})

const hamburger = document.querySelector('.hamburger')
const hamup = document.querySelector('.hamup');
const hammid = document.querySelector('.hammid');
const hamdown = document.querySelector('.hamdown');
const menubar = document.querySelector('.menubar')




hamburger.addEventListener('click' , e =>{
    hamup.classList.toggle('hamupnew')
    hammid.classList.toggle('hammidnew')
    hamdown.classList.toggle('hamdownnew')
    menubar.classList.toggle('menubarnew')
})