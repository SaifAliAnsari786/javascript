//Game value

let min = 1,
	max = 10,
	winningNum = getRandomNum(min,max),
	guessLeft = 3;

// UI Element
const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');

	  //Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown',function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
});

//Listen for guess
guessBtn.addEventListener('click',function(){
	let guess= parseInt(guessInput.value);
	console.log(guess);

	// Validate
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`Please enter a number btween ${min} and ${max}`,'red');
	}

	//check if won
	if(guess === winningNum){

	// Game over - own
	gameOver(true,`${winningNum} is Correct ,YOU WIN`);
	}else{
	// Worng  number
	guessLeft -= 1;

	if(guessLeft === 0){

	// Game over - lost
	gameOver(false,`Game Over you lost.The correct number was ${winningNum}`);
	}else{

	//Game continues - answer worng

	//change the border color
	guessInput.style.borderColor = 'red';

	//clear the input
	guessInput.value= '';

	//Tell user its is worng
	setMessage(`${guess} is  not correct,${guessLeft} guess left`,'red');

		}
	}
});

// Game over

function gameOver(own,msg){

	let color;
	own === true ? color = 'green': color = 'red';
	//Disable input
	guessInput.disabled = true;
	//change the borader color
	guessInput.style.borderColor = color;
	//  set textColor
	message.style.color = color;
	//set message
	setMessage(msg);

	// PLay Again?
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';
}

function getRandomNum(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

// setMessage
function setMessage(msg,color){

	message.style.color = color;
	message.textContent = msg;
}
