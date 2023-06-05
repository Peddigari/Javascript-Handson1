let inputValue= document.querySelector('input')
// var res=document.getElementById("result")
let randomNumber=parseInt(Math.random()*100 +1)
console.log(randomNumber);
let gameText=document.getElementById("resText");
let gameCount=100;
let chances=document.getElementById('chancesCount');
chances.innerHTML=gameCount;
function checkNumber(){
	console.log(inputValue.value)
	if(randomNumber>inputValue.value){
		gameText.innerHTML="Your guess is low";
		gameCount--;
        chances.innerHTML=gameCount;
		
	}else if(randomNumber<inputValue.value){
        gameText.innerHTML="Your guess is high";
		gameCount--;
        chances.innerHTML=gameCount;
		
	}
	else{
            gameText.innerHTML="Your guess is right"
			gameCount--;
            chances.innerHTML=gameCount;
			document.getElementById('result').innerHTML = inputValue.value;
            document.getElementById('resultContainer').style.backgroundColor = 'green';
            
		}

}
