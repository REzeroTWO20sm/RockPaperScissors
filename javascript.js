function getComputerChoise() {
	const variation = Math.random();
	if (variation >= 0 && variation <= 0.33) {
		return "rock";
	} else if (variation > 0.33 && variation <= 0.66) {
		return "paper";
	} else {
		return "scissors";
	}	
} // Rock - 0, Paper - 1, Scissors - 2;

let cScore = 0
let hScore = 0

const matchInfo = document.querySelector(".matchInfo")
const button_rock = document.querySelector(".rock");
const button_paper = document.querySelector(".paper");
const button_scissors = document.querySelector(".scissors");

button_rock.addEventListener("click", function() {
	getHumanChoise(this);
	playerShakeAndChoseAnim('rock');
});
button_paper.addEventListener("click", function() {
	getHumanChoise(this);
	playerShakeAndChoseAnim('paper');
});
button_scissors.addEventListener("click", function() {
	getHumanChoise(this);
	playerShakeAndChoseAnim('scissors');
});

function getHumanChoise(button) {

	const cChoise = getComputerChoise();
	const hChoise = button.value;
	console.log(cChoise,hChoise)
	let matchResult = ""

	if (cChoise === hChoise) {
		matchInfo.innerHTML = `<p>Computer [${cChoise}]<br>Computer score [${cScore}]<br>Human score [${hScore}]<br>[draw]</p>`
	} else {
		switch (true) {
			case (cChoise === "rock" && hChoise === "paper"):
				matchResult = "human win!";
				hScore += 1;
				break;
			case (cChoise === "paper" && hChoise === "rock"):
				matchResult = "computer win!";
				cScore += 1;
				break;
			case (cChoise === "scissors" && hChoise === "paper"):
				matchResult = "computer win!";
				cScore += 1;
				break;
			case (cChoise === "paper" && hChoise === "scissors"):
				matchResult = "human win!";
				hScore += 1;
				break;
			case (cChoise === "rock" && hChoise === "scissors"):
				matchResult = "computer win!";
				cScore += 1;
				break;
			case (cChoise === "scissors" && hChoise === "rock"):
				matchResult = "human win!";
				hScore += 1;
				break;
		}
		matchInfo.innerHTML = `<p>Computer [${cChoise}]<br>Computer score [${cScore}]<br>Human score [${hScore}]<br>[${matchResult}]</p>`
		console.log(matchResult)
	}
}

const display = document.querySelector(".display");
const computerDisplay = document.querySelector(".computer");
const playerDisplay = document.querySelector(".player");

function playerShakeAndChoseAnim(choise) {
	const shakePos_1 = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="100%" height="100%">`;
	const shakePos_2 = `<img src="./images/playerHand/player_handShake_bottom.jpg" alt="playerShake" width="100%" height="100%">`;
	const shakePos_3 = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="100%" height="100%">`;
	const shakePos_4 = `<img src="./images/playerHand/player_handShake_top.jpg" alt="playerShake" width="100%" height="100%">`;

	const rock = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="100%" height="100%">`;
	const paper = `<img src="./images/playerHand/playerPaper.jpg" alt="playerShake" width="100%" height="100%">`;
	const scissors = `<img src="./images/playerHand/playerScissors.jpg" alt="playerShake" width="100%" height="100%">`;


	const shakeList = [shakePos_1,shakePos_2,shakePos_3,shakePos_4];
	let i = 0;
	let j = 0;
	const playerShake = setInterval(function (){
		if (i === 4){
			i = 0;
			j++;
		}
		playerDisplay.innerHTML = shakeList[i];
		i++;
		if (j === 3){
			clearInterval(playerShake);
			if (choise === 'rock') {
				playerDisplay.innerHTML = rock;
			} else if (choise === 'paper') {
				playerDisplay.innerHTML = paper;
			} else {
				playerDisplay.innerHTML = scissors;
			}
		}
	},150);

}


