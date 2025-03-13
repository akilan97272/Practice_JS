const minNum = 0;
const maxNum = 10;
const input = document.getElementById("inputBox");
let count = 0;
let attempts = 0;

document.getElementById("submit").onclick = function(){
	if(Math.floor(Math.random()*(maxNum - minNum)+minNum) == Number(input.value)){
		count++;
		window.alert("Correct guess!");
		document.getElementById("count").textContent = `Number of correct gess: ${count}`;
	}
	else if(isNaN(input.value)){
		document.body.innerHTML = "";
		document.body.style.backgroundColor = 'red';
		document.body.innerHTML = "<h1 style='font-size: 50px'>You may leave now [@#$%]</h1>";
	}
	else{
		window.alert("Better luck next time!");
	}
	attempts++;
	document.getElementById("attempts").textContent = `Number of attempts: ${attempts}`;
}
