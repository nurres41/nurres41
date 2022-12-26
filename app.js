const letterFirstFth = document.querySelectorAll('.letter-first');
const letterFirstTwo = document.querySelectorAll('.letter-first-two');
const letterFirstThree = document.querySelectorAll('.letter-first-three');
const letterFirstFour = document.querySelectorAll('.letter-four');

const letterTwo = document.querySelectorAll('.letter-two');
const letterTwoTwo = document.querySelectorAll('.letter-two-two');
const letterTwoThree = document.querySelectorAll('.letter-two-three');
const letterTwoFour = document.querySelectorAll('.letter-four-two');

const letterThree = document.querySelectorAll('.letter-three');
const letterThreeTwo = document.querySelectorAll('.letter-three-two');
const letterThreeThree = document.querySelectorAll('.letter-three-three');
const letterThreeFour = document.querySelectorAll('.letter-four-three');

const buton = document.querySelector('#dondur');
const win = document.querySelector('#kazandi');
const carpan = document.getElementById('carpan');



let spin = () => {

    win.style.display ='none';

    const random = getRandomInt2()[0] * -1;
    const style = `translateY(calc( ${random}px))`;

    const random1 = getRandomInt2()[1] * -1;
    const style1 = `translateY(calc( ${random1}px))`;

    const random2 = getRandomInt2()[2] * -1;
    const style2 = `translateY(calc( ${random2}px))`;

    const random3 = getRandomInt2()[2] * -1;
    const style3 = `translateY(calc( ${random3}px))`;

    const random4 = getRandomInt2()[4] * -1;
    const style4 = `translateY(calc( ${random4}px))`;

    const random5 = getRandomInt2()[5] * -1;
    const style5 = `translateY(calc( ${random5}px))`;

    const random6 = getRandomInt2()[6] * -1;
    const style6 = `translateY(calc( ${random6}px))`;

    const random7 = getRandomInt2()[7] * -1;
    const style7 = `translateY(calc( ${random7}px))`;

    const random8 = getRandomInt2()[8] * -1;
    const style8 = `translateY(calc( ${random8}px))`;

    const random9 = getRandomInt2()[9] * -1;
    const style9 = `translateY(calc( ${random9}px))`;

    const random10 = getRandomInt2()[10] * -1;
    const style10 = `translateY(calc( ${random10}px))`;

    const random11 = getRandomInt2()[11] * -1;
    const style11 = `translateY(calc( ${random11}px))`;


    letterFirstFth[0].style.setProperty('transform', style);
    letterFirstTwo[0].style.setProperty('transform',style1);
    letterFirstThree[0].style.setProperty('transform',style2);
    letterFirstFour[0].style.setProperty('transform',style9);

    letterTwo[0].style.setProperty('transform',style3);
    letterTwoTwo[0].style.setProperty('transform',style4);
    letterTwoThree[0].style.setProperty('transform',style5);
    letterTwoFour[0].style.setProperty('transform',style10);

    letterThree[0].style.setProperty('transform',style6);
    letterThreeTwo[0].style.setProperty('transform',style7);
    letterThreeThree[0].style.setProperty('transform',style8);
    letterThreeFour[0].style.setProperty('transform',style11);


    if (random === random3 && random === random6 && random === random9 && random === 0){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `150x`;

    } else if (random === random3 && random === random6 && random === random9 && random === -120){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `100x`;
    } else if (random === random3 && random === random6 && random === random9 && random === -240){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `50x`;
    } else if (random === random3 && random === random6 && random === random9 && random === -360){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `10x`;
    } else if (random === random3 && random === random6 && random === random9 && random === -480){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `5x`;
    }

    if (random1 === random4 && random1 === random7 && random1 === random10 && random1 === 0){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `15x`;

    } else if (random1 === random4 && random1 === random7 && random1 === random10 && random1 === -120){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `10x`;
    } else if (random1 === random4 && random1 === random7 && random1 === random10 && random1 === -240){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `8x`;
    } else if (random1 === random4 && random1 === random7 && random1 === random10 && random1 === -360){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `7x`;
    } else if(random1 === random4 && random1 === random7 && random1 === random10 && random1 === -480){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `6x`;
    }

    if(random === random3 && random === random6 && random1 === random4 && random1 === random7){
        win.style.display = "flex";
        win.style.animation = 'ease';
        win.style.animationDelay = '1s';
        carpan.innerText = `100x`;
    }




}

buton.addEventListener('click',spin);

function getRandomInt2() {
    let max = 5;
    let sayi1 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi2 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi3 = Math.abs(Math.floor(Math.random() * max)) * 120;


    let sayi4 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi5 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi6 = Math.abs(Math.floor(Math.random() * max)) * 120;

    let sayi7 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi8 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi9 = Math.abs(Math.floor(Math.random() * max)) * 120;

    let sayi10 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi11 = Math.abs(Math.floor(Math.random() * max)) * 120;
    let sayi12 = Math.abs(Math.floor(Math.random() * max)) * 120;

    return [sayi1,sayi2,sayi3,sayi4,sayi5,sayi6,sayi7,sayi8,sayi9,sayi10,sayi11,sayi12];
}





