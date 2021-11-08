let input = document.getElementById('input');
let userinput = input.value
//ボタンが押されたとき。
//google
let google = document.getElementById('google');
google.addEventListener("click",function(){
	let userinput = input.value
	if (userinput=="") {
		alert("言葉を入力してください。")
	}else if(userinput == " "){
		alert("言葉を入力してください。")
	}else{
		window.open("https://www.google.com/search?q="+userinput)
	}
});
//yahoo
let yahoo = document.getElementById('yahoo');
yahoo.addEventListener("click",function(){
	let userinput = input.value
	if (userinput=="") {
		alert("言葉を入力してください。")
	}else if(userinput == " "){
		alert("言葉を入力してください。")
	}else{
		window.open("https://search.yahoo.co.jp/search?p="+userinput)
	}
	});
//youtube
let youtube = document.getElementById('youtube');
youtube.addEventListener("click",function(){
	let userinput = input.value
	if (userinput=="") {
		alert("言葉を入力してください。")
	}else if(userinput == " "){
		alert("言葉を入力してください。")
	}else{
		window.open("https://www.youtube.com/results?search_query="+userinput)
	}
	});
//Twitter
let twitter = document.getElementById('twitter');
twitter.addEventListener("click",function(){
	let userinput = input.value
	if (userinput=="") {
		alert("言葉を入力してください。")
	}else if(userinput == " "){
		alert("言葉を入力してください。")
	}else{
		window.open("https://twitter.com/search?q="+userinput)
	}
	
	});
