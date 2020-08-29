let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F',];

let btn = document.getElementById('btn');
let colname = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[randomNum()];
    }
    // console.log(hexColor)    
    colname.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    // console.log('hi')
});
function randomNum() {
    return Math.floor(Math.random() * hex.length);
}
