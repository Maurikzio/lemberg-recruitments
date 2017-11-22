$(document).ready(function(){
    // $(".owl-carousel").owlCarousel();
    // var owl = $('.owl-carousel');
    // owl.owlCarousel({
    //     items:2,
    //     loop:true,
    //     margin:10,
    //     autoplay:true,
    //     autoplayTimeout:1000,
    //     autoplayHoverPause:false
    // });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:false,
        responsiveClass:true,
        responsive:{
            320:{
                items:1
            },
            600:{
                items:1

            },
            1000:{
                items:1
            }
        }
    })
});

(function writing (str) {
    document.getElementById('writeHere').innerHTML = " ";        
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.getElementById('writeHere').innerHTML += arrFromStr[i];
      //document.body.innerHTML += arrFromStr[i];
      i++;
      if(i === arrFromStr.length){
          clearInterval(printStr);
      }
    },300);  
  })('Cheer Up!');

  //writing('Cheer Up!');

//find the location of element on pixeles
function findLocationOf(theElementId){
    let target = document.getElementById(theElementId);
    let pos = target.offsetTop;
    return pos;
}

window.onscroll = function(){
    let theWindowScroll = window.scrollY;
    // console.log('the scroll is:' + theWindowScroll);

    // if(theWindowScroll === findLocationOf('theContactSection')){
    //     writing('Cheer Up!');
    // }

}


// console.log(findLocationOf('theContactSection'));
function showit(elemIdentifier){
    $(elemIdentifier).toggle();
}
let showFunctor = document.getElementById('toShow');
let clickMe = document.getElementById('clickHere');

clickMe.onclick = function(){
    showit('#toShow');
    showit('.advantages');
};


//primer slideshow images 
let sliderImages = document.querySelectorAll('.myOwnSlide'),
current = 0;

//clear images
function reset(){
    for(let i = 0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
} 
//initialize the slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}    
function myFunction(){
     myVar = setInterval(slideRight, 9000);
}

//show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
    if(current === sliderImages.length - 1){
        current = -1;
    }
}
startSlide(); 
myFunction();
