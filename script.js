const menu_btn = document.querySelector('.burger');
const mobile_menu = document.querySelector('.mobil_nav')
menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})
window.addEventListener('scroll', function(){
   const scrollup = document.querySelector('.scrollup') 
   scrollup.classList.toggle("active", window.scrollY > 400)
})

function scrollToTop(){
    window.scrollTo({
        top:0
    })
}


const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show1');
        }
        else{
            entry.target.classList.remove('show1');
        }
    })
})





const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el)=> observer1.observe(el));






let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');

let progressValue = 0;
let progressEndValue = 90;
let speed = 60;

let progress = setInterval(()=>{
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(#30bae7 ${progressValue * 3.6}deg,
        #dfe8ed  ${progressValue * 3.6}deg) `;
    if (progressValue == progressEndValue){
        clearInterval(progress);
    }
} ,speed);


            


let progressBar1 = document.querySelector('.circular-progress1');
let valueContainer1 = document.querySelector('.value-container1');

let progressValue1 = 0;
let progressEndValue1 = 75;
let speed1 = 60;

let progress1 = setInterval(()=>{
    progressValue1++;
    valueContainer1.textContent = `${progressValue1}%`;
    progressBar1.style.background = `conic-gradient(#d74680 ${progressValue1 * 3.6}deg,
        #dfe8ed  ${progressValue1 * 3.6}deg) `;
    if (progressValue1 == progressEndValue1){
        clearInterval(progress1);
    }
} ,speed1);

let progressBar2 = document.querySelector('.circular-progress2');
let valueContainer2 = document.querySelector('.value-container2');

let progressValue2 = 0;
let progressEndValue2 = 70;
let speed2 = 60;

let progress2 = setInterval(()=>{
    progressValue2++;
    valueContainer2.textContent = `${progressValue2}%`;
    progressBar2.style.background = `conic-gradient(#15c7a8 ${progressValue2 * 3.6}deg,
        #dfe8ed  ${progressValue2 * 3.6}deg) `;
    if (progressValue2 == progressEndValue2){
        clearInterval(progress2);
    }
} ,speed2);

let progressBar3 = document.querySelector('.circular-progress3');
let valueContainer3 = document.querySelector('.value-container3');

let progressValue3 = 0;
let progressEndValue3 = 85;
let speed3 = 60;

let progress3 = setInterval(()=>{
    progressValue3++;
    valueContainer3.textContent = `${progressValue3}%`;
    progressBar3.style.background = `conic-gradient(#eb7d4b ${progressValue3 * 3.6}deg,
        #dfe8ed  ${progressValue3 * 3.6}deg) `;
    if (progressValue3 == progressEndValue3){
        clearInterval(progress3);
    }
} ,speed3);
