var askAround = askAround1;
var button1clicked = false;
var footsteps = true;

function askAround1() {
	// Will only start if 'button1clicked' is flase
	if (!button1clicked) {
		// set to true so cannot be clicked again
		button1clicked =  true;
		askAround = askAround2;
		var linebreak = document.createElement("br");
		var a = document.createTextNode("David: Thank god you're okay! They've took the childen... all of them, you need to help us. ");
		document.getElementById("dialogBox").appendChild(a);
		document.getElementById("dialogBox").appendChild(linebreak);
		var b = document.createTextNode("David: You need to get your stregth back go to the campfire and rest, after that go find Keith!");
		document.getElementById("dialogBox").appendChild(b);
		document.getElementById("dialogBox").appendChild(linebreak);
		document.getElementById("button1").innerHTML = "Talk to Kieth!";
	}
}
function askAround2() {
	if (!button1clicked) {
		button1clicked =  true;
		footsteps = false;
		var linebreak = document.createElement("br");
		var a = document.createTextNode("Kieth: David told me you'd be round soon can't say I wasnt happy, we tracked the scum to the edge of the forrest. You'll need to go after them yourself from there just follow the footsteps and if you need anything our shop will be open again soon!");
		document.getElementById("dialogBox").appendChild(a);
		document.getElementById("dialogBox").appendChild(linebreak);
	}
}

function campFire() {
	button1clicked = false;
	var linebreak = document.createElement("br");
	var a = document.createTextNode("*You heat up by the campfire and reagin your strength*");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("dialogBox").appendChild(linebreak);
}

function followFootsteps() {
	if (!footsteps) {
		location.href='02.html';
	}
}