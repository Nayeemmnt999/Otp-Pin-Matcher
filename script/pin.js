function getCreatPin(){
    const letPin = pinCreat();
    const letPinString = letPin + '' ;

    if(letPinString.length == 4 ){
        return letPin ;
    }
    else{
        return getCreatPin() ;
}
}
 
function pinCreat(){
   const getPin=  Math.round(Math.random()*10000);
   return getPin;
}
document.getElementById('pin-generate-btn').addEventListener('click', function(){
    const setpin = getCreatPin()

    const getPinShower = document.getElementById('pin-shower');
    getPinShower.value = setpin ;
    // console.log(setpin);
});

document.getElementById('calculator').addEventListener('click', function(even){
    const getNumber = even.target.innerText ;
    const typeNumberAria = document.getElementById('input-set-pin');
    const previousNumber = typeNumberAria.value;
    if(isNaN(getNumber)){
        if(getNumber === 'C'){
            typeNumberAria.value = '' ;
        }
        else if (getNumber == '<'){
            const digite = previousNumber.split('')
            digite.pop();
            const remiangdegit = digite.join('');
            typeNumberAria.value = remiangdegit ;
        }
    }
    else{
        
        
        const newTypedNumber = previousNumber + getNumber ;
        typeNumberAria.value = newTypedNumber;
        
        
    }
    
})

document.getElementById('submit-value').addEventListener('click', function(){
    const getPin = document.getElementById('pin-shower');
    const getPinValue = getPin.value;

    const getInputSetPin = document.getElementById('input-set-pin') ;
    const getInputSetPinValue = getInputSetPin.value;


    const sucessNotify = document.getElementById('correct-pin');
    const faildNotify = document.getElementById('incorrect-notify');

    if(getPinValue == getInputSetPinValue){
        
        sucessNotify.style.display = 'block';
        faildNotify.style.display = 'none';
        
    }
    else{
        faildNotify.style.display = 'block';
        sucessNotify.style.display = 'none';
    }
})