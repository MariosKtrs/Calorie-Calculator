let output = document.getElementById("output") 
let calories = document.getElementById("calories")
let sum = 0

function addMeals(){
    if (calories.value!="" && !calories.value.startsWith("0")){
        if(output.innerText.endsWith("!") || output.innerText==(""))
            output.innerText = "Your calories so far :"
        if(output.innerText.endsWith(":"))
            output.innerText += ` ${calories.value} `
        else
            output.innerText += ` - ${calories.value}`
           
        sum += parseInt(calories.value)
        calories.value=null;
    }
}
function calculateTotal(){
    calories.value = ""
    output.innerText = `Your total calories are : ${sum}!` 
    sum=0
}
function clearOutput(){
    output.innerText=""
    sum=0;
}