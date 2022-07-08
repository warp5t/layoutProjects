// -------------------- debuging -------------------------------- 

//let mntr = document.querySelector('.images').offsetWidth; // coordinate child element

// let mntr = document.querySelector('.text_3').getBoundingClientRect().left + window.pageXOffset;
let mntr = document.querySelector('.input').clientWidth; // coordinate child element


// console.log(mntr);
// console.log('check');

// ------------------------- working code ---------------------------------------

// -------------------------- slide show --------------------------------------

let sliderLine = document.querySelector('.images_wrap');
let images = document.querySelectorAll('.images');
let width = document.querySelector('.images_wrap').offsetWidth;
let count = 0;

let widthImage = document.querySelector(".images").width;
let marginLeft = 30;

//console.log(images.length,);

function init(){

    sliderLine.style.width = width * images.length + 'px';
    
};

//init();
// window.addEventListener('resize', init);

function changeNumb(){
    document.querySelector('.numberL').innerHTML = count + 1;
}

document.querySelector('.greaterLesserR').addEventListener('click', function (){

    count++;
    countSlide = count + 1; 
    console.log("count: ", count);
    if (count >= 5) {
        count = 0;
       
        console.log('count >= countSlide');
    }
    rollSlider();
    changeNumb();
});

document.querySelector('.greaterLesserL').addEventListener('click', function (){

    count--;
    countSlide = count + 1; 
    if (count < 0) {
        count = 4;
       
    }
    rollSlider();
    changeNumb();
});

function rollSlider() {
    if(count === 4){
        console.log('code 432');
       
        sliderLine.style.transform = 'translateX(-' + ((count * (width - 20)) - widthImage - marginLeft) + 'px)';

    }
    else if(count !== 4)  {

        sliderLine.style.transform = 'translateX(-' + count * (width - 20) + 'px)';

    }
   
     console.log( sliderLine.style.transform);
     console.log("rollSlide  count : ", count);
     console.log(document.querySelector('.images').position);
    // sliderLine.style.transform = 'translateX(-' + (count * width) + 'px)'; 

 }

 // ------------------------- input mode ---------------------------------

 let textShow = document.querySelector('.indent');
 let textInput = document.getElementById('#input_fvBlock');

 textShow.addEventListener('click',deleteTxt);

  function deleteTxt(){

    textShow.textContent = " ";
    textInput.innerText = ".    ";
    console.log('check');

  }