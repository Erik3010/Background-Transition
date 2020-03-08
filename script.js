let container = document.querySelector('.container');

let cW = container.offsetWidth,
    cH = container.offsetHeight;

let sizeCardY = (cH / 3),
    sizeCardX = (cW / 5);

container.style.width = `${5*sizeCardX}px`;
container.style.height = `${3*sizeCardY}px`;

for(let y=0;y<3;y++) {
    for(let x=0;x<5;x++) {

        cardX = x * sizeCardX;
        cardY = y * sizeCardY;

        let div = document.createElement('div');
        div.setAttribute('class', 'fade');
        div.style.backgroundImage = `url(img/3.jpg)`;

        div.style.opacity = `0`;

        div.style.width = `${sizeCardX}px`;
        div.style.height = `${sizeCardY}px`;

        div.style.backgroundSize = `${cW}px ${cH}px`
        div.style.backgroundPosition = `-${cardX}px -${cardY}px`;

        container.appendChild(div);
    }
}

let divPhoto = document.querySelectorAll('.container div');
divPhoto.forEach((div, i) => {
    let delay = 0.5;
    div.style.animationDelay = `${delay+i*0.2}s`; 
    div.addEventListener('webkitAnimationEnd', function() {
        div.style.opacity = `1`
    })
})

// function randNum() {
//     let randArr = [];
//     let random;
//     do{
//         random = Math.round(Math.random()*((divPhoto.length-1) - 0)) + 0;
//         randArr.push(random);
//     }while(randArr.indexOf(random) !== -1);
//     randArr.push(random);
//     return random;
// }

// for(let i=0;i<divPhoto.length;i++) {
//     let delay = 3;
//     let random = randNum();
//     divPhoto[random].style.animationDelay = `${delay+i*0.2}s`;

//     divPhoto[random].addEventListener('webkitAnimationEnd', function() {
//         divPhoto[random].style.opacity = `1`;
//     })
// }