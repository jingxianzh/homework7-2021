var video = document.querySelector("#player1");
var videoMute = document.querySelector("#mute");
var videoVolume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	videoVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function decrease() {
	// console.log("Old video speed is " + video.playbackRate);
	video.playbackRate -= 0.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function increase(){
	// console.log("Old video speed is " + video.playbackRate);
	video.playbackRate += 0.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function (){
	console.log("Current Location", video.currentTime);
	video.currentTime += 15;
	if (video.currentTime == video.duration){
		video.currentTime = 0;
		console.log("New Start")
	}
	console.log("New Location", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function (){
	if (video.muted == false){
		video.muted = true;
		videoMute.innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		videoMute.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function (){
	console.log(video.volume);
	video.volume = document.querySelector("input").value/100;
	videoVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function (){
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video";
});