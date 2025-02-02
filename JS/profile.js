document.querySelector('.connect').addEventListener('click', function(){
    const button = this;
    
    if(button.textContent === 'Connect'){
        button.textContent = 'Connected';
        button.style.backgroundColor = '#28a745';
    }else{
        button.textContent = 'Connect';
        button.style.backgroundColor = '#0066ff';
    }
})
