const balloon = document.getElementById('air-balloon');
const cloudOne = document.getElementById('cloud-one');
const cloudTwo = document.getElementById('cloud-two');
const cloudThree = document.getElementById('cloud-three');
const cloudFour = document.getElementById('cloud-four');
const cloudFive = document.getElementById('cloud-five');

const js = document.getElementById('js');
const react = document.getElementById('react');
const graphql = document.getElementById('graphql');

function move(){
    console.log('scroll', move);
    const incrementer = window.scrollY;
    balloon.style.bottom = 10 + incrementer * 0.1 +'%';
    cloudOne.style.marginRight = incrementer * 0.1 +'%';
    cloudTwo.style.marginRight = incrementer * 0.1 +'%';
    cloudThree.style.marginLeft = incrementer * 0.1 +'%';
    cloudFour.style.marginLeft = incrementer * 0.11 +'%';
    cloudFive.style.marginRight = incrementer * 0.1 +'%';
    js.style.marginRight = 55 + incrementer * 0.1 +'%';
    react.style.marginRight = 43 + incrementer * 0.1 +'%';
    graphql.style.marginRight = 31 + incrementer * 0.1 +'%';


}

window.addEventListener('scroll', move);