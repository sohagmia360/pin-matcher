// select All element  ==================================

const generateBtn = document.querySelector('.generate-btn')
const shopingPin = document.querySelector('.shopingPin')
const calcBody = document.querySelector('.calc-body')


// addEventListener all ==================================

generateBtn.addEventListener('click' , getPin)


// function all =========================================== 

function getPin(){
    const unickKey = Math.round(Math.random() * (9000 - 4000) + 4000)
    shopingPin.value = unickKey
}