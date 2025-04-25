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

button_rock.addEventListener("click", function() {getHumanChoise(this)});
button_paper.addEventListener("click", function() {getHumanChoise(this)});
button_scissors.addEventListener("click", function() {getHumanChoise(this)});

function getHumanChoise(button) {

	const cChoise = getComputerChoise();
	const hChoise = button.value;
	console.log(cChoise,hChoise)
	let matchResult = ""

	if (cChoise === hChoise) {
		matchInfo.innerHTML = `<p>Computer score [${cScore}] :  Human score [${hScore}]<br>Computer Choise [${cChoise}]<br>Human Choise [${hChoise}]<br>Match result [draw]</p>`
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
		matchInfo.innerHTML = `<p>Computer score [${cScore}] :  Human score [${hScore}]<br>Computer Choise [${cChoise}]<br>Human Choise [${hChoise}]<br>Match result [${matchResult}]</p>`
		console.log(matchResult)
	}
}

