document.addEventListener('DOMContentLoaded', setVal);

var targetScrollPos;
var scrollPos = 0;
var nowScrollPos = pageYOffset;
var scrollInterval;

var clickVal;

let contentsPos01 = document.querySelector('#title').getBoundingClientRect().top + window.pageYOffset;
let contentsPos02 = document.querySelector('#title2').getBoundingClientRect().top + window.pageYOffset;
let contentsPos03 = document.querySelector('#title3').getBoundingClientRect().top + window.pageYOffset;

console.log("contentsPos01=" + contentsPos01);
console.log("contentsPos02=" + contentsPos02);
console.log("contentsPos03=" + contentsPos03);


let contentPosArr = [0, contentsPos01, contentsPos02, contentsPos03];


let initBox = document.querySelector('#box1');
let moonBox = document.querySelector('#twoImage');

let moonInitPos = initBox.offsetTop;

console.log("initBox"+ moonInitPos);

let isMoonVisible = false;


function setVal()
{
    console.log("loaded!!!!");
    var menu = document.querySelectorAll('#menus li');

    console.log("menuLength!====" + menu.length);
    for( var i =0; i < menu.length; i++)
    {
        menu[i].addEventListener('click', menuClick);

        function menuClick()
        {
            clickVal = this.getAttribute('clickVal');

            //console.log("clickVal-----" + clickVal);

            targetScrollPos = contentPosArr[clickVal];

            //console.log(targetScrollPos);

            //window.scroll(0, targetScrollPos );

            scrollInterval = requestAnimationFrame(moveTo);
        }
    }
}

window.addEventListener('scroll', scrollFn);

function scrollFn()
{
   // console.log("scroll!!!!");
    nowScrollPos = pageYOffset;
    scrollPos = nowScrollPos;

    if((moonInitPos - screen.availHeight -50) < pageYOffset && !isMoonVisible)
    {
        console.log("달이뜬다~");
        isMoonVisible = true;
        moonBox.classList.add('on');
    }
}

function moveTo()
{
    scrollPos += (targetScrollPos - nowScrollPos) * 0.05;
    window.scroll(0, scrollPos);

    if( Math.abs(targetScrollPos - scrollPos) <= 1)
    {
        cancelAnimationFrame(scrollInterval);
        window.scroll(0, targetScrollPos);
        nowScrollPos = targetScrollPos;
    }
    else{
        requestAnimationFrame(moveTo);
    }
}





