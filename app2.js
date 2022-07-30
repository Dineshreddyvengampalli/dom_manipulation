let btn1 = document.querySelector('#btn1');

function alertSecret(){
    alert('Sorry this box contains no secret')
};

btn1.addEventListener('click',alertSecret);

let div3 = document.querySelector('#div3')

div3.addEventListener('mouseover',changeBackGround)

function changeBackGround(){
    div3.style.backgroundColor='red'
}

div3.addEventListener('mouseout',mouseout)

function mouseout(){
    div3.style.backgroundColor = 'aquamarine'
}
  
// function changeBgColour(){
//     div3.style.backGroundColour = 'blue';

// };

// div3.addEventListener("mouseover",changeBgColour);