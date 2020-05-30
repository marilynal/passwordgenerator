
var generateClick = document.querySelector(".generator");
var result = document.querySelector("#password")
var amount = document.getElementsByClassName("#template-body")

//create event for click and create prompts and alerts

// functions to generate password criteria
function randomNumber() {
    return Math.floor(Math.floor(Math.random() * 10))
}

function randomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function upperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}


function special() {
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}


generateClick.addEventListener("click", function (event) {
    event.preventDefault();
    if (generateClick) {
        var passwordLength = prompt("Choose character length between 8 and 128");
        var upperAsk = confirm("Would you like upper case?");
        var lowerAsk = confirm("Would you like lower case?");
        var numberAsk = confirm("Would you like to include numeric characters?");
        var specialAsk = confirm("Would you like to include special characters?");
        var passwordLength = amount.value

        if (passwordLength < 8 || passwordLength > 128) {
            alert("please choose a valid length");
        }

        if (upperAsk === true) {
            upperLetter();
        }

        if (lowerAsk === true) {
            randomLetter();

        }

        if (numberAsk === true) {
            randomNumber();
        }

        if (specialAsk === true) {
            special();
        }
        result.innerHTML = generatePassword()

    }


});
//create object to save password criteria

var collection = {
    number: randomNumber,
    lower: randomLetter,
    upper: upperLetter,
    symbols: special
};

// function to generate password
function generatePassword(lower, upper, number, symbols, passwordLength) {

    var generatedPassword = "";

    //convert object to array?

    //then loop?

}



//variables to get values
var passwordLength;
var upperAsk;
var lowerAsk;
var specialAsk;
var numberAsk;
// var passwordLengths = passwordLength.value



