var a=document.getElementById("text")
console.log(a)

let b=document.getElementsByTagName("h1")
console.log(b)

let c=document.getElementsByClassName("box")
console.log(c)
//ques4
var d=document.getElementsByClassName("updateText")
console.log(d[0].innerHTML)

d[0].addEventListener('click',()=>{
    d[0].innerText="Hello World"
})
//ques5
var change=document.getElementById("replace")
console.log(change)
function replaceText(){
    var change=document.getElementById("replace")
    change.innerText="Welcome to Elevation Academy"
}
//ques6
var styling=document.getElementById("heading")
styling.style.color="red"
//Ques7
var par=document.getElementById("parent")
//creating cards
var card1=document.createElement("div")
var card2=document.createElement("div")
var card3=document.createElement("div")
//adding cards into parent div
par.appendChild(card1)
par.appendChild(card2)
par.appendChild(card3)


par.classList.add("flexbox");
card1.classList.add("flexChild");
card2.classList.add("flexChild");
card3.classList.add("flexChild");
// card1.innerHTML="fld"
let count=0;
function changeFlex(){
    par.classList.remove("flexbox");
    par.classList.add("flexvert");
    if(count%2===0){
        par.style.display="block";
        count++;
    }
    else{
        par.style.display="flex";
        count--;

    }
}


//ques9

setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
// showTime();

