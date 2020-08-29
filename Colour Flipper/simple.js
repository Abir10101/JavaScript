let colors = ['green','red','yellow','orange','blue','indigo','violet'];

let btn = document.getElementById('btn');
let colname = document.querySelector('.color');
btn.addEventListener('click', function() {
    let getNum = randomNum();
    document.body.style.backgroundColor = colors[getNum];
    colname.textContent = colors[getNum];
    // console.log(getNum)
    // console.log('hi')
})
function randomNum() {
    return Math.floor(Math.random() * colors.length);
}
