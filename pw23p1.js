let input = "Subhasish Das";

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}
setTimeout(function(){
    let reversed=reverseString(input);
    console.log(reversed)
},2000)