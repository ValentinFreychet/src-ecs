import * as $ from "jquery";
require('./scss/homepage.scss');
require('./ts/partials/layout.ts');

// let slideIndex = 1;
// showSlides(slideIndex);
//
// let back = document.getElementById("slideback");
// let forward = document.getElementById("slideforward");
//
// if(back !==null){
//     back.addEventListener('click', function () {
//         showSlides(slideIndex += -1);
//     });
// }
//
// if(forward !==null){
//     forward.addEventListener('click', function () {
//         showSlides(slideIndex += 1);
//     });
// }

// function showSlides(n : number) {
//     let i;
//     let slides = document.getElementsByClassName("Slide")as HTMLCollectionOf<HTMLElement>;
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "flex";
// }

$(document).ready(function(){

    var img1 = $('.cont-img div:first-child');
    var img2 = $('.cont-img div:last-child');

    var heightImg1 = img1.height();
    var heightImg2 = img2.height();
    var posImg1 = img1.offset();
    var posImg2 = img2.offset();

    var augmente = 10;

    var topImg2 = posImg2.top;
    console.log('top img 2: '+topImg2);
    console.log('heightCont: '+heightImg1);
    console.log('tik: '+tik);



    var tik = heightImg1/20;

    var direction = 0;
    var oldPos = 0;
    var actuPos = 0;

    $(window).scroll(function(){
        var valScroll = $(this).scrollTop();
        console.log(valScroll);


        actuPos = valScroll;

        //On regarde si on monte ou si on descend
        if(actuPos<oldPos){
            //vers le haut
            direction = 1;
        }else{
            //vers le bas
            direction = 0;

        }
        oldPos = actuPos;

        if(direction == 0){

            // valScroll = valScroll + tik;
            // if(valScroll)
            // if(valScroll/50 > valScroll){
            if(valScroll > 300){
                img2.css('top', heightImg1/2.7+'px')
                heightImg2 = heightImg2 + augmente;
                img2.css('height', heightImg2+'px');
            }


        }else if(direction == 1){
            heightImg2 = heightImg2 + -augmente;
            img2.css('height', heightImg2+'px');
        }
    });



});