// select All element  ==================================

const generateBtn = document.querySelector('.generate-btn')
const shopingPin = document.querySelector('.shopingPin')
const key = document.querySelectorAll('.button')
const typedKey = document.querySelector('.typedKey')
const submitBtn = document.querySelector('.submit-btn')
const notifyError = document.querySelector('.notifyError')
const notifySucces = document.querySelector('.notifySucces')
const notifyEndTry = document.querySelector('.notifyEndTry')
const leftTry = document.querySelector('.left-try')
let count = 3
leftTry.innerText = count
console.log(typedKey)
// addEventListener all ==================================

generateBtn.addEventListener('click' , getPin)
submitBtn.addEventListener('click' , ()=> machingPenCode(shopingPin,typedKey))
// function all =========================================== 

function getPin(){
    const unickKey = Math.round(Math.random() * (9000 - 4000) + 4000)
    shopingPin.value = unickKey
    if(shopingPin.value){
        if(count > 0){
            submitBtn.classList.remove('disable')
        }
    }else{
        submitBtn.classList.add('disable')
    }
}


    key.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            const numbers = e.target.innerText

            if(isNaN(numbers)){
               if(numbers == 'C'){
                typedKey.value = ''
               }else if(numbers == '<'){
                    const Makearray = typedKey.value.slice(0, -1)
                    typedKey.value = Makearray
                    console.log(Makearray)
               } 
            }else{
                typedKey.value +=  numbers
            }
        })
    })



function machingPenCode(generatePin , typingPin){
     if(generatePin.value == typingPin.value){
        console.log('maching')
        notifySucces.style.display = 'block'
        notifyError.style.display ='none'
     }   else{
         console.log('not mactch')
         notifySucces.style.display = 'none'
         notifyError.style.display ='block'
         count--
         leftTry.innerText = count
         if(count == 0){
            submitBtn.classList.add('disable')
            notifyEndTry.style.display = 'block'
         }
         console.log(count)
        
     }
}
