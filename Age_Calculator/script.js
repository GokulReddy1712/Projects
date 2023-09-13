const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthday")
const resultE1 = document.getElementById("result")


function calculate_age(){
    const birthday = birthdayE1.value;
    if(birthday === ""){
        alert("Please enter your birthday")
    }
    else{
        var date = new Date().getFullYear()
        console.log(date);
        var birthdayYear = birthday.slice(0,4)
        console.log(birthdayYear);
        var age = date - birthdayYear;
        console.log(age);
        resultE1.innerText = `Your age is ${age} old`
    }
}
btnE1.addEventListener("click",calculate_age)