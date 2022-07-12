const counters = document.querySelectorAll('.counter');
counters.forEach(counter=>{
    counter. innerText = '0';
    counterIncreament()
    function counterIncreament(){
        let currentNum = +counter.innerText;
        let dataCeil = counter.getAttribute('data-ciel');
        const increament = dataCeil / 5; 
        currentNum = Math.ceil(currentNum + increament);
        counter.innerText = currentNum;
        if(currentNum < dataCeil){
            setTimeout(counterIncreament, 100);
        }else{
            counter.innerText = dataCeil;
        }
    }
})
