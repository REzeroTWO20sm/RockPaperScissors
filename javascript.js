// Preload images
const imagePaths = [
  './images/playerHand/player_handShake_central.jpg',
  './images/playerHand/player_handShake_bottom.jpg',
  './images/playerHand/player_handShake_top.jpg',
  './images/playerHand/playerPaper.jpg',
  './images/playerHand/playerScissors.jpg'
];

imagePaths.forEach(path => {
  const img = new Image();
  img.src = path;
});

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
});
button_paper.addEventListener("click", function() {
	getHumanChoise(this);
});
button_scissors.addEventListener("click", function() {
	getHumanChoise(this);
});

let matchResult = "";

function getHumanChoise(button) {
	matchInfo.innerHTML = `<p>Computer score [${cScore}]<br>Human score [${hScore}]<br>[]</p>`;
	matchInfo.style.color = "white";

	const cChoise = getComputerChoise();
	computerShakeAndChoseAnim(cChoise);
	const hChoise = button.value;
	playerShakeAndChoseAnim(hChoise);
	console.log(cChoise,hChoise);

	if (cChoise === hChoise) {
		matchResult = "draw";
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
				break;		}
		//matchInfo.innerHTML = `<p>Computer [${cChoise}]<br>Computer score [${cScore}]<br>Human score [${hScore}]<br>[${matchResult}]</p>`	
		console.log(matchResult)
	}
}

const display = document.querySelector(".display");
const computerDisplay = document.querySelector(".computer");
const playerDisplay = document.querySelector(".player");

function playerShakeAndChoseAnim(choise) {
	const shakePos_1 = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="400px" height="350px">`;
	const shakePos_2 = `<img src="./images/playerHand/player_handShake_bottom.jpg" alt="playerShake" width="400px" height="350px">`;
	const shakePos_3 = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="400px" height="350px">`;
	const shakePos_4 = `<img src="./images/playerHand/player_handShake_top.jpg" alt="playerShake" width="400px" height="350px">`;

	const rock = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="400px" height="350px">`;
	const paper = `<img src="./images/playerHand/playerPaper.jpg" alt="playerShake" width="400px" height="350px">`;
	const scissors = `<img src="./images/playerHand/playerScissors.jpg" alt="playerShake" width="400px" height="350px">`;

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
			matchInfo.innerHTML = `<p>Computer score [${cScore}]<br>Human score [${hScore}]<br>[${matchResult}]</p>`
			if (matchResult === "human win!") {
				matchInfo.style.color = "#e15990";
			} else if (matchResult === "computer win!") {
				matchInfo.style.color = "#7cc66e";
			} else {
				matchInfo.style.color = "#fff";
			}
		}
	},150);

}

function computerShakeAndChoseAnim(choise) {
	const shakePos_1 = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="400px" height="350px">`;
	const shakePos_2 = `<img src="./images/playerHand/player_handShake_bottom.jpg" alt="playerShake" width="400px" height="350px">`;
	const shakePos_3 = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="400px" height="350px">`;
	const shakePos_4 = `<img src="./images/playerHand/player_handShake_top.jpg" alt="playerShake" width="400px" height="350px">`;

	const rock = `<img src="./images/playerHand/player_handShake_central.jpg" alt="playerShake" width="400px" height="350px">`;
	const paper = `<img src="./images/playerHand/playerPaper.jpg" alt="playerShake" width="400px" height="350px">`;
	const scissors = `<img src="./images/playerHand/playerScissors.jpg" alt="playerShake" width="400px" height="350px">`;

	const shakeList = [shakePos_1,shakePos_2,shakePos_3,shakePos_4];
	let i = 0;
	let j = 0;
	const computerShake = setInterval(function (){
		if (i === 4){
			i = 0;
			j++;
		}
		computerDisplay.innerHTML = shakeList[i];
		i++;
		if (j === 3){
			clearInterval(computerShake);
			if (choise === 'rock') {
				computerDisplay.innerHTML = rock;
			} else if (choise === 'paper') {
				computerDisplay.innerHTML = paper;
			} else {
				computerDisplay.innerHTML = scissors;
			}
		}
	},150);

}

