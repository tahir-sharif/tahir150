var num = document.querySelector('.num');
var text = document.querySelector('.text');
var button = document.querySelector('.btn1');
var reset = document.querySelector('.btn2');
var box = document.querySelector('.box');
var outputNum;
var i = 0;;

if(localStorage.number != undefined){
    outputNum = localStorage.number
}else{
    outputNum = 0;
}
num.innerHTML = outputNum;

button.addEventListener('click' , () => {
    
    text.innerHTML = 'CASIO'


    if(i == '1'){
        outputNum = +outputNum + 1
        num.innerHTML = outputNum;
        localStorage.setItem('number' , outputNum)
    }else{ i = 1}
    
        setTimeout(()=>{
            num.style.opacity = '1'
            text.style.opacity = '0'
        } , 1000)
});
reset.addEventListener('click' , ()=> {

    outputNum = 0;
    num.innerHTML = outputNum;
    localStorage.setItem('number' , 0);

})
// Colors
var yellow = 'rgba(255, 206, 90, 0.842)';
yellowEmoji = document.querySelector('.yellow');
var green = 'rgb(101, 162, 33)';
greenEmoji = document.querySelector('.green');
var blue = 'rgb(43, 167, 211)';
blueEmoji = document.querySelector('.blue');
var lastEmoji = yellowEmoji;


emoji = document.querySelector('.emoji');

function themeChanger(color , emojiName){
    if(i == 1){
    lastEmoji.style.display = 'none'
    lastEmoji = emojiName;
    clearTimeout();

    lastEmoji.style.display = 'block'
    emoji.style.opacity = '1';

    setTimeout(() => {
        emoji.style.top ='16%'
    setTimeout(() => {
        emoji.style.zIndex = '10'
    }, 200);
    setTimeout(() => {
        emoji.style.top ='40%'
    setTimeout(() => {
        emojiName.style.width = '150px'
        emoji.style.opacity = '0';
        box.style.background = color;
    setTimeout(() => {
        emojiName.style.width = '95px'
        emoji.style.zIndex = '0'
    }, 50);
    }, 500);
    }, 500);
    }, 500);
}else{
    alert('Turn Me on First ! ')
}
}

// themeChanger(yellow , yellowEmoji);
// themeChanger(green , greenEmoji);
// themeChanger(blue , blueEmoji);

document.querySelector('.closeTheme').addEventListener('click' , () => {
    document.querySelector('.thememn').style.display = 'none';

    document.querySelector('.themeText').style.display = 'block'   
    document.querySelector('.themeTextbg').style.display = 'block'   
})
document.querySelector('.themeText').addEventListener('click' , () => {
    document.querySelector('.thememn').style.display = 'block';

    document.querySelector('.themeText').style.display = 'none'
    document.querySelector('.themeTextbg').style.display = 'none'
})
document.querySelectorAll('.closeTheme')[1].addEventListener('click' , () => {
    document.querySelector('.bg').style.display = 'none';

    document.querySelector('.themeText').style.display = 'block'   
    document.querySelector('.themeTextbg').style.display = 'block'   
})
document.querySelector('.themeTextbg').addEventListener('click' , () => {
    document.querySelector('.bg').style.display = 'block';

    document.querySelector('.themeText').style.display = 'none'
    document.querySelector('.themeTextbg').style.display = 'none'
})

function backgroundChanger(value){
    document.body.style.backgroundColor = value;
}
console.log('hi');