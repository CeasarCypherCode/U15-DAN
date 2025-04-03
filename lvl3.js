if(localStorage.getItem("score") != null){
	var score = localStorage.getItem("score")
	score = parseInt(score)
}
else{
	var score = 0;
}

let player;
let floor;
let floor1;
let bgImage;
let black;
let grass;
let Spriteparent;
let dirt;
let block;
let playerWalking;
let animation;
let walkingImg;
let coin;
let controls;
let Table;
let basezoom = 1.3;
let scoredisplay;
let doorImg;
let backgroundIMAGE;

let tilemap=
[
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbb...............................................................bbbbb",
"bbbb...............................................................bbbbb",
"bbbb...............................................................bbbbbbbbbbbbbbbbb",
"bbbb.............................................................            ..bbbbb",
"bbbb..........................................................            .....bbbbb",
"bbbb..........................................................            ..x..bbbbb",
"bbbb...........................................................           ......bbbb",
"bbbb...............................................................bbbbbbbbbbbbbbbbb", 
"bbbb.....................................................bbbbb                   bbbbb",
"bbbb.......................................................bbbbb                 bbbbb",
"bbbb.........................................................bbbbb               bbbbb",
"bbbb.............................................................bbbbbbb.........bbbbb",
"bbbb.........................................................                  ..bbbbb",
"bbbb.........................................................              ..bbbbb",
"bbbb.........................................................            ..bbbbb",
"bbbb.........................................................          ..bbbbb",
"bbbb.........................................................       ..bbbbb",
"bbbb......................................................llllllbbbbb",
"bbbb............................tttt......................tttbbbbb",
"bbbb.............ttttttttt................................tttbbbbb",
"bbbb.............t.......................................ltttbbbbb",
"bbbb.......tt....t......................................lltbbbbb",
"bbbb....t........t.....................................llltttbbbbb",
"bbbbll...........t...........................lllllllllllllbbbbbbbb",
"bbbbtllll...................llllttt......llllttttttttttttttttbb",
	"bbbbttttllllllllllllllllllllltttttt......tttttttttttttttttttbb",
	"bbbbtttttttttttttoooooooottttttooto......tttttttttttttttttttbb",
	"bbbbllooooooooottootttotttoototooto......ttttttttttttttttttttbb",
	"bbbbtllllllllloooooootootootooottto...bb",
	"bbbbttttttttttlllllooooottooooottto...bb",
	"bbbboooototttttttttttoootooototttto...bb",
	"bbbbtttotottooooootttttttoootttttto...bb",
	"bbbboooottoooooooottttttttootttttto...bb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...bb",


]





function preload(){
	walkingImg = loadImage("dansheet.png");
	doorImg = loadImage('doorImg.png');
	backgroundIMAGE = loadImage("snowy1.jpg");
	
}



function setup() {
	new Canvas(windowWidth, windowHeight);
	
    displayMode();

	world.gravity.y = 18
	player = new Sprite(200, 1029, 'd')
	 
	// player.image = 'dan2.png'
	player.scale = 2.1
	player.friction = 20; 
	player.rotationLock = true;
    // player.debug = true;
	player.direction = "left"
	player.mass = 55; 
	player.w = 37.06;
	player.h = 46.10;
	player.bounciness = 0;
	player.drag = 2;
	player.layer = 9;
   
	player.spriteSheet = walkingImg;
	player.anis.frameDelay = 7;
	player.addAnis({
	  walk: {row: 33, frames: 19},
	});




	Spriteparent = new Group();
	Spriteparent.collider = "s"
	Spriteparent.w = 50;
	Spriteparent.h = 50;

	grass = new Spriteparent.Group();
	grass.tile = "l";
	grass.w = 320;
	grass.h = 320;
	grass.image = 'ice.png'
	grass.scale = 0.35;
	grass.layer = 9;
	grass.debug = true;

	black = new Spriteparent.Group();
	black.tile = "b";
	black.w = 240;
	black.h = 220;
	black.image = 'ice.png'
	black.visible = true;
	black.scale = 0.35;
	black.debug = true;	
	black.layer = 0;

	dirt = new Spriteparent.Group();
	dirt.tile = "o";
	dirt.w = 50;
	dirt.h = 50;
	dirt.image = 'ice.png'
	dirt.scale = 0.35;
	dirt.layer = 0;
	
	dirt.debug = true;

	block = new Spriteparent.Group();
	block.tile = "t";
	block.w = 230;
	block.h = 230;
	block.image = 'ice2.png'
	block.scale = 0.83;
	block.layer = 0;
	block.debug = true;
	

	coin = new Sprite(900, 950, 100, 100, 's');
	coin.image = 'coin.png'
	coin.scale = 0.1
	coin.rotationLock = true;
	coin.w = 20;
	coin.h = 20;
	coin.layer = 9;
	// coin.debug = true;

	// Table = new Sprite(300, 1000, 20, 100, 'k')
	// Table.rotationSpeed = 1;
	// Table.h = 50
	// Table.w = 210
	// Table.image = 'wood.png'
	// Table.layer = 0;
	//  Table.debug = true;

	door = new Group();
	door.w = 170;
	door.h = 210;
	door.tile = "x";
	door.collider = "static";
	door.image = doorImg;
	door.layer = 9;
	door.scale = 0.78;
	// door.debug = true;

	scoredisplay = new Sprite(0, 0, 0.1, 0.1, "s");
	scoredisplay.x = player.x - (windowWidth/2 + 5);
	scoredisplay.y = player.y - windowHeight/2;
	scoredisplay.text = "Score: 0";
	scoredisplay.textSize = 24;
	scoredisplay.color = "black";
	scoredisplay.textColor = "white";
	scoredisplay.layer = 9;
	// scoredisplay.opacity = 0;

	// bg = new  Sprite(windowWidth/2, windowHeight/2, 1, 1, "s");
	// bg.image = 'green.png';
	// bg.scale = 4
	// bg.layer = 0;

	// player.overlaps(bg)

	new Tiles(tilemap,0,0,50,50)

}





function draw() {
    clear();
    background(backgroundIMAGE)
	nextlevel();
	scoredisplay.text = "Score: " + score;
	
	// bg.x = player.x;
	// bg.y = player.y;
	
	if(player.collides(coin) ){
		score += 1;
		coin.remove()
	}

	if(mouse.pressed()){
		player.x = mouse.x;
		player.y = mouse.y;
	}

fill(0,200,0)
textSize(40)

// text("Score: " + score,20,30)
	
	if(kb.pressing("ARROW_UP")){
		basezoom += 0.05;
	}
	if(kb.pressing("ARROW_DOWN")){
		basezoom -= 0.05;
	}

	console.log(coin.y)

	camera.zoom = basezoom;
	camera.x = player.x;
	camera.y = player.y;

	scoredisplay.x = player.x - 200;
	scoredisplay.y = player.y - 305;

	





	if(kb.pressing('a')){
	player.x -= 5;
	player.mirror.x = false;
 }
 else if(kb.pressing('d')){
	player.x += 5;
	player.mirror.x = true;
 }



// if(player.vel.y == 0){
 
	if(kb.presses('space') && ((player.colliding(block)) || (player.colliding(grass)) || (player.colliding(black)) || (player.colliding(grass)))){
	player.vel.y = -15;

}

// }

if(player.y  >= 3000){
	player.y = 20;
	player.x = windowWidth / 4;
	score = 0;

	coin.remove()

	coin = new Sprite(900, 950, 100, 100, 's');
	coin.image = 'coin.png'
	coin.scale = 0.1
	coin.rotationLock = true;
	coin.w = 20;
	coin.h = 20;
	
}



if(player.collides(coin) ){
	coin.remove()
}

}

function nextlevel(){
	for(d of door){
		if(player.collides(d)){
			localStorage.setItem("score", score);
			// Tiles.removeAll()d
             
			window.location.href ="lvl3.html"

		}
	}
}

