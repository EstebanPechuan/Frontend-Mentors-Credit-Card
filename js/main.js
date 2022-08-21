const numberCard = document.querySelector('#number')
numberCard.addEventListener('input', () => {
    const cardNumbers = document.querySelector('.numbers-card')
    
    let number1 = numberCard.value.substring(0, 4) 
    let number2 = numberCard.value.substring(4, 8)
    let number3 = numberCard.value.substring(8, 12)
    let number4 = numberCard.value.substring(12, 16)
    let result = number1 + ' ' + number2 + ' ' + number3 + ' ' + number4 + ' '
    
    cardNumbers.innerText = result
})

const nameCard = document.querySelector('#name')
    nameCard.addEventListener('input', () => {
    const cardName = document.querySelector('.name-card')
    
    cardName.innerText = nameCard.value
})

const monthCard = document.querySelector('#month')
    monthCard.addEventListener('input', () => {
    const cardMonth = document.querySelector('.month')
    
    let number1 = monthCard.value.substring(0, 2)
    cardMonth.innerText = number1
})

const yearCard = document.querySelector('#year')
    yearCard.addEventListener('input', () => {
    const cardYear = document.querySelector('.year')
    
    let number1 = yearCard.value.substring(0, 2)
    cardYear.innerText = number1
})

const cvcCard = document.querySelector('#cvc')
    cvcCard.addEventListener('input', () => {
    const cardCvc = document.querySelector('.input-cvc')
    
    let number1 = cvcCard.value.substring(0, 3)
    cardCvc.innerText = number1
})


function confirm() {
    document.querySelector('form').style.display = 'none'
    document.querySelector('.thanks').style.display = 'flex'
}