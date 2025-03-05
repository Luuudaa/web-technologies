function isInRange(number, min, max) {
    return number >= min && number <= max;
}

//отр вв чис
function checkRange() {
    const number = parseInt(document.getElementById('number').value);
    const min = 1;
    const max = 10;
    const result = isInRange(number, min, max);
    
    document.getElementById('rangeResult').textContent = 
        result ? `Число ${number} знаходиться в діапазоні від ${min} до ${max}.` : 
        `Число ${number} не знаходиться в діапазоні від ${min} до ${max}.`;
}

//NOT (!) для зміни стану змінної
let state = false;

function toggle() {
    state = !state;
    document.getElementById('state').textContent = state;
}
