'use strict'

// document.querySelector('.message').textContent = 14;

let rand_num = Math.floor(Math.random() * 20 + 1);
let num_of_guesses = 20;
console.log(rand_num);

function update_message(message){
    document.getElementById('message').textContent = message;
}

function update_divbox(num){
     document.getElementById('mystery-num').textContent = num;
}

function compare_numbers(num1, num2){
    if(num1>num2){
        return true;
    }
    return false;
}

function reset_game(){
    num_of_guesses = 20;
    rand_num = Math.floor(Math.random() * 20 + 1);
    document.getElementById('body').style.backgroundColor = '#1a191b';
    document.getElementById('number-of-guesses').textContent = 20;
    document.getElementById('mystery-num').textContent = '?'
    update_message('Start guessing...');
}

document.getElementById('check').addEventListener('click', function(){
    
        const guess = Number(document.getElementById('guess').value);
    
        if(!guess){
        update_message('⛔️ Enter a number!');
        }

        else if(guess === rand_num){
            update_message('🎉 gj');
            update_divbox(guess);
            document.getElementById('body').style.backgroundColor = '#39ad79';
        }
        else{
           
            num_of_guesses = num_of_guesses - 1;
            document.getElementById('number-of-guesses').textContent = num_of_guesses;
            console.log(num_of_guesses); 
            if(num_of_guesses === 0){
                update_message('💥 You lost')
            }

            if(!compare_numbers(rand_num, guess)){
                update_message('📈 Too high!');
            }
            else{
                update_message('📉 Too low!');
            }
        }
    }
);

document.getElementById('again').addEventListener('click', function(){
    reset_game();
});

