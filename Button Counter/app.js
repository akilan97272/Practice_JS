let count;
let actualCount = 0;
count = Number(document.getElementById("countLabel").value); //type convertion

document.getElementById("decrease").onclick = function(){
	count--;
	document.getElementById("countLabel").classList.add('redLabel');
	document.getElementById("countLabel").classList.remove('blueLabel');
	document.getElementById("countLabel").classList.remove('greenLabel');
	document.getElementById("countLabel").textContent = count;
	actualCount++;
	console.log(`Action Performed : Decrement | count : ${actualCount}`);

}

document.getElementById("reset").onclick = function(){
	count = 0;
	document.getElementById("countLabel").classList.add('blueLabel');
	document.getElementById("countLabel").classList.remove('greenLabel');
	document.getElementById("countLabel").classList.remove('redLabel');
	document.getElementById("countLabel").textContent = count;
	actualCount++;
	console.log(`Action Performed : Reset | count : ${actualCount}`);
}

document.getElementById("increase").onclick = function(){
	count++;
	document.getElementById("countLabel").classList.add('greenLabel');
	document.getElementById("countLabel").classList.remove('redLabel');
	document.getElementById("countLabel").classList.remove('blueLabel');
	document.getElementById("countLabel").textContent = count;
	actualCount++;
	console.log(`Action Performed : Increment | count : ${actualCount}`);
}
