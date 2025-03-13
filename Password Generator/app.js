function generatePassword(passwordLength , containsUpper , containsLower , containsNumber , containsSymbols){

    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';    
    const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    const numberChar = '0123456789';
    const symbolChar = '!@#$%^&*()_+-=`~';

    let allowedChar = "";
    let password = "";

    allowedChar += containsUpper ? upperChar : "";
    allowedChar += containsLower ? lowerChar : "";
    allowedChar += containsNumber ? numberChar : "";
    allowedChar += containsSymbols ? symbolChar : "";

    if(passwordLength <= 0){
        return `(The length of the password must be greater than 0!)`;
    }
    if(allowedChar.length === 0){
        return `(The password must contain atleast one charecter type!)`;
    }

    for(let i = 0; i < passwordLength ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length)
        password += allowedChar[randomIndex];
    }
    return password;
}

const passwordLength = document.getElementById("passwordLength").value;
const containsUpper = document.getElementById("upperCase").value;
const containsLower = document.getElementById("lowerCase").value;
const containsNumber = document.getElementById("numbers").value;
const containsSymbols = document.getElementById("symbols").value; 

document.getElementById("submit").onclick = function() {
    const passwordLength = document.getElementById("passwordLength").value;
    const containsUpper = document.getElementById("upperCase").value;
    const containsLower = document.getElementById("lowerCase").value;
    const containsNumber = document.getElementById("numbers").value;
    const containsSymbols = document.getElementById("symbols").value; 
    const password = generatePassword(passwordLength , containsUpper , containsLower , containsNumber , containsSymbols);
    document.getElementById("showPassword").textContent = `The Generated Password: ${password}`;
}
