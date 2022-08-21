
const numberCard = document.querySelector('#number')
numberCard.addEventListener('input', () => {
    const cardNumbers = document.querySelector('.numbers-card')
    
    let number1 = numberCard.value.substring(0, 4) 
    let number2 = numberCard.value.substring(4, 8)
    let number3 = numberCard.value.substring(8, 12)
    let number4 = numberCard.value.substring(12, 16)
    let result = number1 + ' ' + number2 + ' ' + number3 + ' ' + number4 + ' '
    
    cardNumbers.innerText = result
    
    if (cardNumbers.value == '') {
        cardNumbers.innerText = '0000 0000 0000 0000'
    }

    alert(cardNumbers.textContent)
})