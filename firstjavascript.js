// GLOBAL FUNCTIONS
var num_coins;
var karma_points;
var health_points;

function essentials(){ // used to display heath, karma and coins to the UI
	document.getElementById("karmabar").innerHTML = localStorage.karma_points;
	document.getElementById("money").innerHTML = localStorage.num_coins;
	document.getElementById("healthbar").innerHTML = localStorage.health_points;
	document.getElementById("machete").innerHTML = localStorage.machete;
	document.getElementById("torch").innerHTML = localStorage.torch;
	document.getElementById("hook").innerHTML = localStorage.grapple;
	document.getElementById("explosive").innerHTML = localStorage.explosive;

}

function shop(){
	location.href='shop.html';
}

function playerDead(){
	alert("You have taken to much damage and unfortuantly died... sadly you must start the game again!");
	location.href = "index.html";
}

// SHOP.HTML
function buyHook(){
	var linebreak = document.createElement("br");
	var grapple = localStorage.getItem("grapple");
	if (grapple == 'false'){
		var coins = parseInt(localStorage.getItem("num_coins"));
		if (coins >= 10){
			localStorage.setItem("num_coins", (coins - 10));
			localStorage.grapple = "true";
			document.getElementById("dialogBox").appendChild(linebreak);
			var a = document.createTextNode("*You have purchased the grappling hook!*");
			document.getElementById("dialogBox").appendChild(a);
			essentials();
		}
		else
		{
			noMoney();
		}   
	}
	else
	{
		alreadyHave();
	}
}

function buyMachete(){
	var linebreak = document.createElement("br");
	var machete = localStorage.getItem("machete");
	if (machete == 'false'){
		var coins = parseInt(localStorage.getItem("num_coins"));
		if (coins >= 10){
			localStorage.setItem("num_coins", (coins - 10));
			localStorage.machete = "true";
			document.getElementById("dialogBox").appendChild(linebreak);
			var a = document.createTextNode("*You have purchased the machete!*");
			document.getElementById("dialogBox").appendChild(a);
			essentials();
		}
		else
		{
			noMoney();
		}   
	}
	else
	{
		alreadyHave();
	}
}

function buyTorch(){
	var linebreak = document.createElement("br");
	var torch = localStorage.getItem("torch");
	if (torch == 'false'){
		var coins = parseInt(localStorage.getItem("num_coins"));
		if (coins >= 5){
			localStorage.setItem("num_coins", (coins - 5));
			localStorage.torch = "true";
			document.getElementById("dialogBox").appendChild(linebreak);
			var a = document.createTextNode("*You have purchased the torch!*");
			document.getElementById("dialogBox").appendChild(a);
			essentials();
		}
		else
		{
			noMoney();
		}   
	}
	else
	{
		alreadyHave();
	}
}

function buyExplosive(){
	var linebreak = document.createElement("br");
	var explosive = localStorage.getItem("explosive");
	if (explosive == 'false'){
		var coins = parseInt(localStorage.getItem("num_coins"));
		if (coins >= 15){
			localStorage.setItem("num_coins", (coins - 15));
			localStorage.explosive = "true";
			document.getElementById("dialogBox").appendChild(linebreak);
			var a = document.createTextNode("*You have purchased explosives!*");
			document.getElementById("dialogBox").appendChild(a);
			essentials();
		}
		else
		{
			noMoney();
		}   
	}
	else
	{
		alreadyHave();
	}
}

function alreadyHave(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("David: You've already bought one of these!");
	document.getElementById("dialogBox").appendChild(a);
}

function noMoney(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("David: Sorry no exceptions you've not got enough for this");
	document.getElementById("dialogBox").appendChild(a);
}

// END OF SHOP.HTML
// MAINPAGE.HTML
var askAround = askAround1;
var button1clicked = false;
var footsteps = true;
var response1 = false;

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
		document.getElementById("dialogBox").innerHTML = "Kieth: David told me you'd be round soon can't say I wasnt happy, we tracked the scum to the edge of the forrest. You'll need to go after them yourself from there just follow the footsteps and if you need anything our shop will be open again soon!";
		document.getElementById("dialogBox").appendChild(linebreak);
	}
}

function campFire() {
	button1clicked = false;
	localStorage.health_points = 100;
	document.getElementById("healthbar").innerHTML = localStorage.health_points;
	var linebreak = document.createElement("br");
	var a = document.createTextNode("*You heat up by the campfire and regain your strength*");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("dialogBox").appendChild(linebreak);
}

function followFootsteps() {
	if (!footsteps) {
		location.href='forrest.html';
	}
}

function response() {
	if (!response1) {
		response1 = true;
		var linebreak = document.createElement("br");
		var a = document.createTextNode("Me: No, nothing yet.");
		document.getElementById("dialogBox").appendChild(a);
		document.getElementById("dialogBox").appendChild(linebreak);
	}
}
// END OF MAINPAGE JS
// FORREST.HTML 

function returnHome() {
	location.href='mainpage1.html';
}

var forrestButton2 = flookAround;
function flookAround() {
	var linebreak = document.createElement("br");
	var a = document.createTextNode("You can see an obvious three paths infront of you, one leading into the side of a mountain, one covered with dense vegatation and the other down the side of a small stream!");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("dialogBox").appendChild(linebreak);
	document.getElementById("button2").innerHTML = "Follow the River";
	document.getElementById("button3").innerHTML = "Go deeper into the Forest";
	document.getElementById("button4").innerHTML = "Head into the mountain";
	forrestButton2 = followRiver;
}

function followRiver() {
	location.href = 'riverside.html';
}
function deepForest() {
var linebreak = document.createElement("br");
var machete = localStorage.getItem('machete');
if (machete == 'false'){
	document.getElementById("dialogBox").innerHTML="You're going to need something other than your sword, sharp enough to cut through all this vegitation!";
	document.getElementById("dialogBox").appendChild(linebreak);
}else{
	location.href='deepForest.html';
}
}

function travelMountain() {
var linebreak = document.createElement("br");
var torch = localStorage.getItem('torch');
if (torch == 'false'){
	document.getElementById("dialogBox").innerHTML="You're going to need some sort of light to go in there its pitch black!";
	document.getElementById("dialogBox").appendChild(linebreak);
}
else
{
	location.href='cave.html';
}
}

//END OF FORREST JS
//DEEP FOREST JS

var button2deep = approachHouse;
var button3deep;
var button4deep;



function approachHouse(){
	document.getElementById("dialogBox").innerHTML="You get closer to the house and have a look around it, you can see two points of entry. An entrance to the basement on the outside or the front door, it seems to be abandoned.";
	document.getElementById("button3").innerHTML = "Go in the basement";
	document.getElementById("button4").innerHTML = "Go in the front door";
	button2deep = nothing;
	button3deep = enterBasement;
	button4deep = enterHouse;
}

function enterBasement(){
	alert("You enter the basement!");
	document.getElementById("dialogBox").innerHTML = "The basement is old and rotten and relativly empty. There is a unusual light in the corner of the room, unusual because it is the only sign anyone has been here at all recently. ";
	document.getElementById("button2").innerHTML = "Investigate the light"
	button2deep = investigateLight;
	document.body.style.backgroundImage = "url(images/basement.jpg)";
	document.getElementById("header").innerHTML = "Basement";
}

function investigateLight(){
	document.getElementById("dialogBox").innerHTML = "The light is next to anold painting that seems to be squint on the wall. You go to straighten it and it falls from the wall revealing a tunnel beind it.";
	document.getElementById("button2").innerHTML = "Go into tunnel";
	button2deep = travelTunnel;
}

function travelTunnel(){
	torch = localStorage.getItem("torch");
	if (torch == "true"){
		alert("You're crawling through the tunnel for a little while when the floor starts to give away and suddenly you're falling... You get up luckily uninjured in a cold dark cave, you begin walking.")
		location.href='cave.html';
	}
	else
	{
		alert("You need a torch to go this way!");
	}
}

function enterHouse(){
	alert("You enter the house!");
	document.getElementById("dialogBox").innerHTML = "The house is old and abandoned it doesn't look like anyone is living here.";
	document.getElementById("button2").innerHTML = "Search the house";
	button2deep = searchHouse;
	document.body.style.backgroundImage = "url(images/cabin.jpg)";
	document.getElementById("header").innerHTML = "House";
}

function searchHouse(){
	var house = localStorage.getItem("house");
	if (house == "false"){
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").innerHTML = "You search every inch of the house finding 10 coins and a torch!";
		document.getElementById("dialogBox").appendChild(linebreak);
		torch = localStorage.getItem("torch");
		if (torch == "true"){
			var a = document.createTextNode("*You leave the torch as you already have one but take the coins.*");
			document.getElementById("dialogBox").appendChild(a);
			var coins = parseInt(localStorage.getItem("num_coins"));
			localStorage.setItem("num_coins", (coins + 10));
			localStorage.house = "true";
			essentials();
		}
		else
		{
			var a = document.createTextNode("*You take the torch and the coins.*");
			document.getElementById("dialogBox").appendChild(a);
			localStorage.torch = "true";
			var coins = parseInt(localStorage.getItem("num_coins"));
			localStorage.setItem("num_coins", (coins + 10));
			localStorage.house = "true";
			essentials();
		}
	}
	else
	{
		alert("You have already searched the house!")
	}
}

//END OF DEEP FOREST JS
//RIVERSIDE JS


function killTraveller(){
	var traveller = localStorage.getItem("traveller");
	if (traveller == 'false'){
		traveller = "true";
		localStorage.setItem("traveller", traveller);
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").innerHTML = "You plunge your sword into man without a second thought and take all he had... ";
		document.getElementById("dialogBox").appendChild(linebreak);
		var a = document.createTextNode("*You pick up 20 coins from his body*");
		document.getElementById("dialogBox").appendChild(a);
		document.getElementById("dialogBox").appendChild(linebreak);
		var coins = parseInt(localStorage.getItem("num_coins"));
		localStorage.setItem("num_coins", (coins + 20));
		var karma = parseInt(localStorage.getItem("karma_points"));
		localStorage.setItem("karma_points", --karma);
		essentials();}
	else {
		document.getElementById("dialogBox").innerHTML = "You have already completed this activity and it cannot be done again!";
	}
}
function saveTraveller(){
	var traveller = localStorage.getItem("traveller");
	if (traveller == 'false'){
		traveller = "true";
		localStorage.setItem("traveller", traveller);
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").innerHTML = "MAN: hello? Thank god your here I was looking for a nearby village when I feel from up there, do you think you can point me in the right direction?";
		document.getElementById("dialogBox").appendChild(linebreak);
		var a = document.createTextNode("*You give the man directions to your village and he awards you with 15 coins for your help*");
		document.getElementById("dialogBox").appendChild(a);
		var coins = parseInt(localStorage.getItem("num_coins"));
		localStorage.setItem("num_coins", (coins + 15));
		var karma = parseInt(localStorage.getItem("karma_points"));
		localStorage.setItem("karma_points", ++karma);
		essentials();}
	else {
	document.getElementById("dialogBox").innerHTML = "You have already completed this activity and it cannot be done again!";
	}
}

function climbMountain(){
	var grapple = localStorage.getItem("grapple");
	if (grapple == 'false'){
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		var a = document.createTextNode("You attempt to climb the mountain but don't get very far as you keep losing your grip, if only you had something to climb it with... ");
		document.getElementById("dialogBox").appendChild(a);
	}
	else
	{
		alert("You launch your grapple hook into the air and it hooks onto edge of the cliff...\n You begin climbing");
		document.getElementById("button3").innerHTML = grapple;
		location.href = "clifftop.html";
	}
}
// END OF RIVERSIDE JS
// START OF CLIFFTOP JS

var button2cliff = investigateSmoke;
var button3cliff;
var button4cliff;
var campsite = localStorage.getItem("campsite");

function investigateSmoke(){
	if (campsite == "false"){
		document.getElementById("dialogBox").innerHTML="Once you arrive at the smoke you realise you've discovered someones campsite. Theres no one around but the fires still burning so whoever it is must be planning on coming back soon.";
		document.getElementById("button3").innerHTML="Steal from the campsite";
		button3cliff = stealCampsite;
		document.getElementById("button4").innerHTML="Wait on the owner to return";
		button4cliff = waitCampsite;
	}
	else
	{
		alert("You have already completed this event");
	}
}

function stealCampsite(){
	document.getElementById("dialogBox").innerHTML="You begin raiding the campsite, you find some coins in the tent aswell as what seems to be a map to your village! It seems that is where whoever this is is headed.";
	var coins = parseInt(localStorage.getItem("num_coins"));
	localStorage.setItem("num_coins", (coins + 12));
	localStorage.campsite = "true"; 
	var karma = parseInt(localStorage.getItem("karma_points"));
	localStorage.setItem("karma_points", (karma - 1));
	essentials();
	button2cliff = nothing;
	button3cliff = nothing;
	button4cliff = nothing;
}

function waitCampsite(){
	document.getElementById("dialogBox").innerHTML="Your not waiting for long before you hear a voice from behind you...";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("Unknown: Please I mean no harm take what you want and leave.");
	document.getElementById("dialogBox").appendChild(a);
	button2cliff = nothing;
	button3cliff = cliffResponse
	button4cliff = nothing;
	document.getElementById("button3").innerHTML="Respond";

}

function cliffResponse(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML="Me: Don't worry im not here to do that. I was wondering if you needed any help on your travels.";
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("Jeff: Well in that case hi my name is Jeff. I'm actually looking for a village nearby but can't figure out my way down this hill.");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("Me: Not to worry as thats where Ive just come from follow me.");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button3").innerHTML="Help Jeff";
	button3cliff = helpJeff;
	document.getElementById("button4").innerHTML="Kill Jeff";
	button4cliff = killJeff;
}

function helpJeff(){
	document.getElementById("dialogBox").innerHTML="*You take Jeff to the cliff where you climbed up and show him directions to your village*";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("Jeff: Thank you for helping me a lot of people would have just stolen from me here is 15 coins for your troubles!");
	document.getElementById("dialogBox").appendChild(a);
	var coins = parseInt(localStorage.getItem("num_coins"));
	localStorage.setItem("num_coins", (coins + 15));
	var karma = parseInt(localStorage.getItem("karma_points"));
	localStorage.setItem("karma_points", (karma + 1));
	essentials();
	localStorage.campsite = "true"; 
	button3cliff = nothing;
	button4cliff = nothing;
}

function killJeff(){
	document.getElementById("dialogBox").innerHTML="*You take Jeff to the cliff where you climbed up as he is looking at the grappling hook you stab him straight through the back. You take all his coins from his corpse.*";
	var coins = parseInt(localStorage.getItem("num_coins"));
	localStorage.setItem("num_coins", (coins + 15));
	var karma = parseInt(localStorage.getItem("karma_points"));
	localStorage.setItem("karma_points", (karma - 1));
	essentials();
	localStorage.campsite = "true"; 
	button3cliff = nothing;
	button4cliff = nothing;
}


// END OF CLIFFTOP JS
//START OF CAVE JS

var button2cave = investigate;
var button3cave = attackcave;
var button4cave = blockcave;
var tall = "";
var cavemonster = localStorage.getItem("cavemonster");

function investigate(){
	if (cavemonster == "false"){
		button2cave = dodgecave;
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		var a = document.createTextNode("As you get closer to the noise you begin to see a human like figure walking towards you. Only as it gets closer you begin to realise how tall it is...  It begins to run at you. ");
		document.getElementById("dialogBox").appendChild(a);
		document.getElementById("dialogBox").appendChild(linebreak);
		var b = document.createTextNode("What do you do? ");
		document.getElementById("dialogBox").appendChild(b);
		document.getElementById("button2").innerHTML="Dodge";
		document.getElementById("button3").innerHTML="Attack";
		document.getElementById("button4").innerHTML="Block";
	}
	else if (cavemonster == "true")
	{
		button2cave = godeeper;
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		var a = document.createTextNode("As you get closer to the noise you realise the noise is just rats surrounding the creature you previously defeated!");
		document.getElementById("dialogBox").appendChild(a);
		document.getElementById("dialogBox").appendChild(linebreak);
		var b = document.createTextNode("What do you do? ");
		document.getElementById("dialogBox").appendChild(b);
		document.getElementById("button2").innerHTML="Go deeper into the cave!";
	}
}
function blockcave(){
	if (tall == "stunned"){
		document.getElementById("dialogBox").innerHTML="You block... the creature looks slightly confused as to why you didnt attack. It then stands up and begins to charge again!";
		tall = "notstunned";
	}
	else
	{
		document.getElementById("dialogBox").innerHTML="You attempt to block the dark figures attack but he runs right through it throwing you against one of the cave walls!";
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		alert("*You take some damage*");
		var b = document.createTextNode("The tall figure turns round and begins charging again, what do you do?");
		document.getElementById("dialogBox").appendChild(b);
		var health = parseInt(localStorage.getItem("health_points"));
		health = health - 20;
		if (health < 0){
			playerDead();
		}
		localStorage.setItem("health_points", health);
		essentials();
	}
}
function attackcave(){
	if (tall == "stunned"){
		document.getElementById("dialogBox").innerHTML="You lunge at the figure as it lays on the ground pointing your sword infront of you as you do straight into its neck...";
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		var a = document.createTextNode("You watch as it takes its last breath...");
		document.getElementById("dialogBox").appendChild(a);
		alert(" You have succesfully defeated the creature!");
		localStorage.cavemonster = "true";
		button2cave = godeeper;
		button3cave = nothing;
		button4cave = nothing;
		document.getElementById("button2").innerHTML="Go deeper into the cave!";
		document.getElementById("button3").innerHTML="";
		document.getElementById("button4").innerHTML="";

	}
	else 
	{
		document.getElementById("dialogBox").innerHTML="You attempt to attack the dark figures attack but he pushs you, throwing you against the cave wall...";
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		alert("*You take some damage*");
		var b = document.createTextNode("The tall figure turns round and begins charging again, what do you do?");
		document.getElementById("dialogBox").appendChild(b);
		var health = parseInt(localStorage.getItem("health_points"));
		health = health - 20;
		if (health < 0){
			playerDead();
		}
		localStorage.setItem("health_points", health);
		essentials();
	}
}

function dodgecave(){
	if (tall == "stunned"){
		document.getElementById("dialogBox").innerHTML="You dodge... you literally dodge nothing... The creature then stands up and begins to charge again!";
		tall = "notstunned";
	}
	else
	{
		document.getElementById("dialogBox").innerHTML="You quickly move out of the way of the attack resulting in the figure running into the wall and falling over...";
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").appendChild(linebreak);
		alert("*The monster seems stunned*");
		var b = document.createTextNode("What do you do?");
		document.getElementById("dialogBox").appendChild(b);
		tall = "stunned";
	}
}
function godeeper(){
	children = localStorage.getItem("cavechild");
	if (children == "false"){
		button2cave = godeeper2;
		button3cave = killChildren;
		button4cave = leaveChildren;
		document.getElementById("dialogBox").innerHTML="You approach what seems to be where the creature lived only to find a nest filled with baby versions of the creature. Do you kill them before they mature of leave them be?";
		document.getElementById("button3").innerHTML="Kill Them";
		document.getElementById("button4").innerHTML="Leave them be";
	}
	else if (children == "dead")
	{
		document.getElementById("dialogBox").innerHTML="You come to the home of the monster you previously defeated here... only this home is tainted with death.";
		button2cave = godeeper2;
	}
	else 
	{
		document.getElementById("dialogBox").innerHTML="You come to the home of the monster you previously defeated here... The nest is empty now the childeren must have left.";
		button2cave = godeeper2;

	}
}

function nothing(){
	alert("You cannot do this")
}

function killChildren(){
	document.getElementById("dialogBox").innerHTML="You stop and stare for a minute considering your options. The thought of your child comes to your head filling you with rage... you draw your sword  and brutally murder each and every one of them. Some of them try to fight back scratching and kicking while the others try to run. Unfotunatly for them they had nowhere to go...";
	karma = parseInt(localStorage.getItem("karma_points"));
	health = parseInt(localStorage.getItem("health_points"));
	health = health - 5;
	if (health < 0){
			playerDead();
	}
	localStorage.setItem("health_points", health);
	localStorage.setItem("karma_points", (karma - 1));
	localStorage.cavechild = "dead";
	essentials();
	button3cave = nothing;
	button4cave = nothing;
}

function leaveChildren(){
	document.getElementById("dialogBox").innerHTML="You stop and stare for a minute considering your options. The thought of your own child comes to your head... you turn your back to them and leave them be.";
	karma = parseInt(localStorage.getItem("karma_points"));
	localStorage.setItem("karma_points", (karma + 1));
	localStorage.cavechild = "alive";
	essentials();
	button4cave = nothing;
	button3cave = nothing;
}

function godeeper2(){
	alert("You seem to be approaching some sort of light");
	location.href = "lava.html";
}

// END OF CAVE JS
// START OF LAVA JS  // NOTE TO SELF GIVE MORE 10 COINS AFTER THIS 

var button1lava = goBack;
var button2lava = rock;
var button3lava;
var button4lava;

function goBack(){
	location.href='cave.html'
}
function rock(){
	var explosive = localStorage.getItem("explosive");
	if (explosive == "false"){
	document.getElementById("dialogBox").innerHTML="You approach the massive rock trying to get around it but its not possible, you also try climbing it but its far to big. Your not sure what but something about the rock doesnt seem right... If you had some sort of explosives maybe you could get past it.";

	}
	else
	{
		alert("WARNING: AFTER THIS PART OF THE GAME YOU CAN NO LONGER GO BACK");
		alert("You set the explosives... once the smoke clears something else is in the way!")
		document.getElementById("dialogBox").innerHTML = "It's the rock! Only this time it has a face and looks angry... It sprouts its legs now seeming almost double the size and begins swinging its massive baseball bat like arm in your direction!(You're the ball)";
		document.getElementById("button2").innerHTML = "Block";
		document.getElementById("button3").innerHTML = "Attack";
		document.getElementById("button4").innerHTML = "Dodge";
		button2lava = blockRock;
		button3lava = attackRock;
		button4lava = dodgeRock;
	}
}

function attackRock(){
	document.getElementById("dialogBox").innerHTML = "You dive towards the giant rock going between his legs and striking him from behind. The rock turns around looks at you and begins swinging again, your attack didnt seem to do much.";
}

function dodgeRock(){
	document.getElementById("dialogBox").innerHTML = "You dive out the way of the swing only mearly missing it by inches. The rock postures up and goes for it again!";
}

function blockRock(){
	document.getElementById("dialogBox").innerHTML = "You attempt to block the swing from the rock, but the power from it blows right through your guard knocking you off the edge and towards the molten lava floor...";
	document.getElementById("button1").innerHTML = "Wake Up...";
	document.getElementById("button2").innerHTML = "";
	document.getElementById("button3").innerHTML = "";
	document.getElementById("button4").innerHTML = "";
	button1lava = wakeUp;
	button2lava = nothing;
	button3lava = nothing;
	button4lava = nothing;
}

function wakeUp(){
	document.getElementById("dialogBox").innerHTML = "You begin opening your eyes, your staring at the ceiling. You can see the platform you were on above you, all you can feel is heat from all sides... You have been knocked off the platform but luckily landed on another smaller one just above the lava floor!";
	document.getElementById("button3").innerHTML = "Look around";
	button3lava = seachLava;
}

function seachLava(){
	document.getElementById("dialogBox").innerHTML = "There doesnt seem to be much of anyhting around you except a small hole in the wall maybe 20 metres away. Only problem is its 20 metres of molten lava!";
	document.getElementById("button1").innerHTML = "Use grappling hook!"
	button1lava = useGrapple;
}

function useGrapple(){
	var grapple = localStorage.getItem("grapple");
	if (grapple == "true"){
		alert("You swing your grappling hook and throw it towards the hole in the wall, luckily it catches on to a ledge just above it.")
		document.getElementById("dialogBox").innerHTML = "You slowly pull yourself and the platform over to the hole, switching to other small platforms where appropiate. Once you're there you see its covered in cobwebs and can't see much at all through it. ";
		document.getElementById("button2").innerHTML = "Climb into hole";
		document.getElementById("button3").innerHTML = "";
		button2lava = leaveLava;
		button3lava = nothing;
	}
	else
	{
		alert("You don't have a grappling hook!");
		var health = parseInt(localStorage.getItem("health_points"));
		document.getElementById("dialogBox").innerHTML = "You only have one other choice... You begin leaping from platform to platform slowly making your way to the hole in the wall... *You take 20 damage* ";
		document.getElementById("button2").innerHTML = "Climb into hole";
		document.getElementById("button3").innerHTML = "";
		health = health - 20;
		if (health < 0){
			playerDead();
		}
		localStorage.setItem("health_points", health);
		essentials();
		button2lava = leaveLava;
		button3lava = nothing;

	}
}

function leaveLava(){
	alert("You begin climbing into the hole barely able to see anything, you keep getting thick cobwebs in your face. You just keep climbing as its all you can do....");
	location.href = "spider.html";
}

// END OF LAVA JS
// START OF SPIDER

var button1spider = searchSpider;
var button2spider;
var button3spider;
var button4spider;

function searchSpider(){
	document.getElementById("dialogBox").innerHTML = "Looking around the room you cant see much, theres a light at the bottom thankfully it looks like sunlight and not lava. Thats not all... theres bones everywhere, human bones! Everywhere you look its all you can see..."
	document.getElementById("button1").innerHTML = "Walk towards the light..."
	button1spider = walkSpider;
}

function walkSpider(){
	document.getElementById("dialogBox").innerHTML = "You begin walking, with each step putting your leg in atleast a foot of cobwebs making it extremly hard to move. ";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("Suddenly almost silently you see a massive spider coming from the ceiling, it breaks off from its web slamming to the floor infront of you it... ");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button1").innerHTML = "ATTACK";
	button1spider = initialAttack;
}

function initialAttack(){
	document.getElementById("dialogBox").innerHTML = "You lunge at the beast striking it before it notices you're even there... You sever one of its legs, its screams in pain turns to you and jumps at you...";
	document.getElementById("button1").innerHTML = "Attack";
	document.getElementById("button2").innerHTML = "Block";
	document.getElementById("button3").innerHTML = "Dodge";
	button1spider = attackSpider;
	button2spider = blockSpider;
	button3spider = dodgeSpider;
}

function dodgeSpider(){
	document.getElementById("dialogBox").innerHTML = "You attempt to doge out of the way of the spiders attack forgetting how hard it is to move. Meaning the spider is able to learn a perfect strike hurting you a lot";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("The spider looks at you again and tries the same strike jumping at you!");
	document.getElementById("dialogBox").appendChild(a);
	var health = parseInt(localStorage.getItem("health_points"));
	health = health - 20;
	if (health < 0){
			playerDead();
		}
	localStorage.setItem("health_points", health);
	essentials();
}

function attackSpider(){
	document.getElementById("dialogBox").innerHTML = "You counter attack the spider lunging at it again fortuantly for you this caused the spider to jump over you";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("While the spider turning round this gives you some time to take cover behind one of the support beams holding the roof above you. The spider realising it cannot jump at you now begins chasing you around the beam its obvious it is going to get you soon...");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button2").innerHTML = "";
	document.getElementById("button3").innerHTML = "";
	button2spider = nothing;
	button3spider = nothing;
	button1spider = attackSpider2;
}

function blockSpider(){
	document.getElementById("dialogBox").innerHTML = "You block the spiders attack absobing most of the damage but not all";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("The spider takes a minute obviously slightly stunned from the block, this gives you some time to take cover behind one of the support beams holding the roof above you. The spider realising it cannot jump at you now begins chasing you around the beam its obvious it is going to get you soon...");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button2").innerHTML = "";
	document.getElementById("button3").innerHTML = "";
	var health = parseInt(localStorage.getItem("health_points"));
	health = health - 5;
	if (health < 0){
			playerDead();
		}
	localStorage.setItem("health_points", health);
	essentials();
	button2spider = nothing;
	button3spider = nothing;
	button1spider = attackSpider2;
}
function attackSpider2(){
	document.getElementById("dialogBox").innerHTML = "You turn round swinging for the spider managing to sever another one of its seven remaining legs, the spider screaches but doesnt give up it comes at you faster than before.";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("You try swinging for it again only this time the spider is expecting it... It bites your arm causeing you to drop your sword leaving you nearly defenceless. For some reason the spider seems to back off.");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button1").innerHTML = "Plant remaining explosives...";
	button1spider = killSpider;
}

function killSpider(){
	document.getElementById("dialogBox").innerHTML = "The spider for some reason has backed off, giving you the time you need to plant the rest of your explosives!";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("You light the fuse...");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button1").innerHTML = "RUN!";
	button1spider = runSpider;
}

function runSpider(){
	document.getElementById("dialogBox").innerHTML = "You run as fast as you can jumping through the cobwebs, you hear the spider scuttling accross the floor behind you but then...  BOOM!";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("The explsion knocks you to the floor... you turn around the spider is racing towards you but just in time a part of the roof falls crushing it right in front of you!");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button1").innerHTML = "Inspect the spider";
	document.getElementById("button2").innerHTML = "Head towards the light";
	button1spider = inspectSpider;
	button2spider = leaveSpider;
}

function inspectSpider(){
	document.getElementById("dialogBox").innerHTML = "You approch the spider... its still alive! You can see it's in a lot of pain, its alive but its whole abdomen has been crushed underneith a rock and its unable to move!";
	document.getElementById("button1").innerHTML = "Put the spider out its misery";
	document.getElementById("button2").innerHTML = "Leave it to suffer";
	button1spider = goodSpider;
	button2spider = badSpider;
}

function goodSpider(){
	document.getElementById("dialogBox").innerHTML = "You swiftly put an end to the spiders misery... the right thing to do.";
	var karma = parseInt(localStorage.getItem("karma_points"));
	localStorage.setItem("karma_points", (karma + 1));
	document.getElementById("button1").innerHTML = "Head towards the light";
	document.getElementById("button2").innerHTML = "";
	essentials();
	button2spider = nothing;
	button1spider = leaveSpider;
}

function badSpider(){
	document.getElementById("dialogBox").innerHTML = "You consider offing the spider but decide against it, turning your back to it with no remorse...";
	var karma = parseInt(localStorage.getItem("karma_points"));
	localStorage.setItem("karma_points", (karma - 1));
	document.getElementById("button1").innerHTML = "Head towards the light";
	document.getElementById("button2").innerHTML = "";
	essentials();
	button2spider = nothing;
	button1spider = leaveSpider;
}

function leaveSpider(){
	alert("You begin heading to the light hoping its a way out of the cave... But as you get closer it seems like your walking into something else, only its not natural been built and at that a long time ago.");
	location.href = "temple.html";
}

// END OF SPIDER JS
// START OF TEMPLE JS

var button1temple = searchTemple;
var button2temple;
var button3temple;
var button4temple;
var finished = 0;


function searchTemple(){
	document.getElementById("dialogBox").innerHTML = "Although obviously old the structure seems to still be in an almost immaculate condition, you can see a body of water in the centre of the room.";
	document.getElementById("button1").innerHTML = "Head to the water";
	button1temple = waterTemple;
}

function waterTemple(){
	document.getElementById("dialogBox").innerHTML = "Just before you reach the water you here a voice from behind you, you turn to the sound but cannot see anyone.";
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").appendChild(linebreak);
	var a = document.createTextNode("Unknown: You've come very far traveller.");
	document.getElementById("dialogBox").appendChild(a);
	document.getElementById("button1").innerHTML = "Who are you!";
	document.getElementById("button2").innerHTML = "What is this place!";
	document.getElementById("button3").innerHTML = "Do you know where my child is!";
	document.getElementById("button4").innerHTML = "How do you know how far i've came!";
	button1temple = whoTemple;
	button2temple = whatTemple;
	button3temple = whereTemple;
	button4temple = howTemple;
}

function whoTemple(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: Who are you!";
	document.getElementById("dialogBox").appendChild(linebreak);
	var b = document.createTextNode("Unknown: Thats not important at this time... but what is is who are you?");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button1").innerHTML = "GIVE ME BACK MY CHILD!";
	button1temple = whoTemple2;
}

function whoTemple2(){
	if (finished == 3){ // If player has clicked the rest of the buttons let them click this one.
		var linebreak = document.createElement("br");
		document.getElementById("dialogBox").innerHTML = "Me: GIVE ME BACK MY CHILD!";
		document.getElementById("dialogBox").appendChild(linebreak);
		var b = document.createTextNode("Unknown: He is not ours to give but yours to earn.");
		document.getElementById("dialogBox").appendChild(b);
		document.getElementById("button1").innerHTML = "I have travelled...!";
		button1temple = whoTemple3; 
	}
	else 
	{
		alert("You cannot do this yet");
	}
}	

function whoTemple3(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: I have travelled a thousand miles I think I deserve him!";
	document.getElementById("dialogBox").appendChild(linebreak);
	var b = document.createTextNode("Unknown: Yes but at what have you become");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button1").innerHTML = "I am who I have always been";
	button1temple = whoTemple4;
}

function whoTemple4(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: I am who I have always been";
	document.getElementById("dialogBox").appendChild(linebreak);
	var b = document.createTextNode("Unknown: Drink from the water.. only after this will you have the chance to see your son again.");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button1").innerHTML = "And if I refuse?";
	document.getElementById("button2").innerHTML = "Drink the water";
	button2temple = endGame;
	button1temple = whoTemple5;
}

function whoTemple5(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: And if I refuse?";
	document.getElementById("dialogBox").appendChild(linebreak);
	var b = document.createTextNode("Unknown: Then the bite from the spider will kill you...");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button1").innerHTML = "";
	button1temple = nothing;
}

function whatTemple(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: What is this place!";
	document.getElementById("dialogBox").appendChild(linebreak)
	var b = document.createTextNode("Unknown: Thats not important, it is important how you got here...");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button2").innerHTML = "Whats that supossed to mean!";
	button2temple = whatTemple2
}

function whatTemple2(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: Whats that supposed to mean!";
	document.getElementById("dialogBox").appendChild(linebreak)
	var b = document.createTextNode("Unknown: What it means is we've been watching closely and know what kind of a person you really are.");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button2").innerHTML = "";
	finished = finished + 1;
	button2temple = nothing;
}

function whereTemple(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: Do you know where my child is!";
	document.getElementById("dialogBox").appendChild(linebreak)
	var b = document.createTextNode("Unknown: I know where he will be");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button3").innerHTML = "WHERE!";
	button3temple = whereTemple2

}

function whereTemple2(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: WHERE!";
	document.getElementById("dialogBox").appendChild(linebreak);
	var b = document.createTextNode("Unknown: ...");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button3").innerHTML = "";
	finished = finished + 1;
	button3temple = nothing;

}

function howTemple(){
	var linebreak = document.createElement("br");
	document.getElementById("dialogBox").innerHTML = "Me: How do you know how far I've came!";
	document.getElementById("dialogBox").appendChild(linebreak);
	var b = document.createTextNode("Unknown: Because we've been watching you deciding if you are worthy.");
	document.getElementById("dialogBox").appendChild(b);
	document.getElementById("button4").innerHTML = "";
	finished = finished + 1;
	button4temple = nothing;
}

function endGame(){
	alert("You drink from the water...");
	karma = parseInt(localStorage.getItem("karma_points"))
	if (karma < 0) {
		location.href = "badEnding.html";
	}
	else
	{
		location.href = "goodEnding.html";
	}
}

// END OF TAMPLE JS
// END OF GAME