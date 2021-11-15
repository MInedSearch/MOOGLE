let google = document.getElementById("google");
let yahoo = document.getElementById("yahoo");
let youtube = document.getElementById("youtube");
let twitter = document.getElementById("twitter");
let letgo = document.getElementById("letgo");
//google
google.addEventListener("click",function(){
	let userinput = document.getElementById("seartch").value;
	let url = "https://www.google.com/search?q="+ userinput
	window.open( url, null, 'width=1000, height=1000')
});
//yahoo
yahoo.addEventListener("click",function(){
	let userinput = document.getElementById("seartch").value;
	let url = "https://search.yahoo.co.jp/search?p="+ userinput
	window.open( url, null, 'width=1000, height=1000')
})
//youtube
youtube.addEventListener("click",function(){
	let userinput = document.getElementById("seartch").value;
	let url = "https://www.youtube.com/results?search_query="+ userinput
	window.open( url, null, 'width=1000, height=1000')
})
//twitter
twitter.addEventListener("click",function(){
	let userinput = document.getElementById("seartch").value;
	let url = "https://twitter.com/search?q="+ userinput
	window.open( url, null, 'width=1000, height=1000')
})