function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const rollResults = document.getElementById("rollResults");
    const rollImages = document.getElementById("rollImages");
    const value = [];
    const images = [];

    for(let i = 1 ; i <= numOfDice ; i++){
        const values = Math.floor(Math.random() * 6) + 1;
        value.push(values);
        images.push(`<img src="dice_images/${values}.png"></img>`);
    }

    rollResults.textContent = `Dice: ${value.join(', ')}`;
    rollImages.innerHTML = images.join(" ");
}