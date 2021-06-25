

var targetScrollPos;
var scrollPos = 0;
var nowScrollPos = pageYOffset;
var scrollInterval;

var clickVal;

let contentsPos01;
let contentsPos02;
let contentsPos03;

let contentPosArr;


let initBox = document.querySelector('#box1');
let moonBox = document.querySelector('#twoImage');

let moonInitPos;



let isMoonVisible = false;

document.addEventListener('DOMContentLoaded', setVal);
function setVal()
{
   // console.log("loaded!!!!");
    var menu = document.querySelectorAll('#menus li');


    console.log("contentsPos01=" + contentsPos01);
    console.log("contentsPos02=" + contentsPos02);
    console.log("contentsPos03=" + contentsPos03);

    contentPosArr = [0, 1000, 2850, 4750];

    moonInitPos = initBox.offsetTop;

    //console.log("initBox"+ moonInitPos);

    //console.log("menuLength!====" + menu.length);
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
    
    nowScrollPos = pageYOffset;
    scrollPos = nowScrollPos;
    //console.log("scroll!!!!"+scrollPos);
    if(moonInitPos+200 < pageYOffset && !isMoonVisible)
    {
       // console.log("달이뜬다~"+ screen.availHeight);
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





