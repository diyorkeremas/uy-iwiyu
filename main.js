const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const soqqasi = document.querySelector('.soqqasi')
const soni = document.querySelector('.soni')
const btn3 = document.querySelector('.btn3')

let narx = 0;
let son = 0;

btn1.addEventListener('click', ()=> {
    narx = narx + 20
    son = son + 1
    soqqasi.innerHTML = 'olgan ktoblarz narxi:' + narx + '$'
    soni.innerHTML = 'ktoblarz son  :' + son
})

btn2.addEventListener('click', ()=> {
    alert('bu kitob taqiqlanadi!!!')
})

btn3.addEventListener('click',()=> {
    narx = 0
    son = 0
    soqqasi.innerHTML = 'olgan ktoblarz narxi:' + narx 
    soni.innerHTML = 'ktoblarz son  :' + son
})
