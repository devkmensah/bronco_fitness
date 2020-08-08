const btnCheckbox = document.querySelector('#btn-checkbox');
const monthly = document.querySelectorAll('.monthly');
const annually = document.querySelectorAll('.annually');


const switcher = function(){

   for (let i = 0; i < monthly.length; i++){
    if(btnCheckbox.checked === true) {
        annually[i].style.display = 'block';
        monthly[i].style.display = 'none';
    } else if(btnCheckbox.checked === false){
        annually[i].style.display = 'none';
        monthly[i].style.display = 'block';
    }
   }

}

switcher()

