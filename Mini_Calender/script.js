const monthname = document.getElementById("month")
const day = document.getElementById("day")
const daynum = document.getElementById("day-num")
const year = document.getElementById("year")

const date = new Date()
monthname.innerText = date.toLocaleDateString("en",{
    month:"long"
})
day.innerText = date.toLocaleDateString("en",{
    weekday:"long"
})
daynum.innerText=date.getDate()
year.innerText = date.getFullYear()
