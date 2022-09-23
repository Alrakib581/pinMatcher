function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    };
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = getPin();
    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    // console.log(event.target.innerText)
    const number = event.target.innerText;
    const display = document.getElementById('cal-display');
    const prevtypedNumber = display.value;
    if(isNaN(number)){
        if(number === 'C'){
            display.value = '';
        }
        else if(number === '<'){
            const digits = prevtypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            display.value = remainingDigits;

        }
    }
    else{
        
        const newTypeNumber = prevtypedNumber + number; 
        display.value = newTypeNumber;
    }

});

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPin = document.getElementById('pin-field');
    const currentPin = displayPin.value;
    const typePin = document.getElementById('cal-display');
    const currentTypePin = typePin.value;
    const pinmatchId = document.getElementById('pin-success');
    const pinNotMatch = document.getElementById('pin-incorrect');
    if(currentPin === currentTypePin){
        pinmatchId.classList.remove('hidden');
        pinNotMatch.classList.add('hide');
        
    }
    else{
        pinNotMatch.classList.remove('hide');
        pinmatchId.classList.add('hidden');
    }

});