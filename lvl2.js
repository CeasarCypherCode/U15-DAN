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
let lavaImg;
let enemy3Img;
let backgroundMusic;


let tilemap=
[
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbb...............................................................bbbbb",
"bbbb............................................................bbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", 
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbb....................................................bbbbb",
"bbbb....................................................bbbbb",
"bbbb....................................................bbbbb",
"bbbb....................................................bbbbb",
"bbbb....................................................bbbbb",
"bbbb................................................llllbbbbb",
"bbbb.................................................tttbbbbb",
"bbbb..................................................ttbbbbb",
"bbbb...................................................tbbbbb",
"bbbb...................................................tbbbbb",
"bbbb...................................................ttbbbbb",
"bbbb.........................................lllllllllllllbbbb",
"bbbb........................llllttt......   llllttttttttttttbb",
	"bbbblllllllllllllllllllllllllttttob.....bbttttttttttttttttbb",
	"bbbbtttttttttttttoooooooottttttooob.....btttttttttttttttttbb",
	"bbbbllooooooooottootttotttoototooob.....bttttttttttttttttttbb",
	"bbbbtllllllllloooooootootootooottob.....bobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	"bbbbttttttttttlllllooooottooooottob.....bobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	"bbbboooototttttttttttoootooototttob.....bobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	"bbbbtttotottooooootttttttoootttttob.....bobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	"bbbboooottoooooooottttttttootttttob.....bobbbbbbbbbbbbb..........................                                                                                                            .......bbbbkbbbbbbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb..........................                                                                                                            .......bbbkkbbbkkbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb                                                                                                                                      .......bbbbbbbbbbbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb                                                                                                                                      .......bkkkkkkkkkkbbbbb", 
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb                                                                                                                                      .......bbbbbbbbbbbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb...............................ll                                                                                                     .......bbbbbbbbbbbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb...................lllll.......ll                                                                                                     .......bbkkkkbbbbbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb                                                                                                                                             bkkbbbbbbkkkbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....bobbbbbbbbbbbbb                                                                                                                                           x bbbbkkkkkkkbbbbb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob.....booobbbbbbbbbbb..................                                                                                                                           bkbbbbbbbbbbbbbbb",
"bbbb...........................................................bbbbbbbbbbhhhhhhhhhhhhhhhhhhhhhhhbbbbbbtttttttttttttt        kkkkkk      kkkkkk        kk   bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
"bbbb...........................................................bbbbbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkb                                       bbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbb",
"bbbb...........................................................bbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbbb                                       bbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbb",
"bbbb...........................................................bbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbbb                                       bbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbb",
"bbbb...........................................................bbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbbb                                       bbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbb",
"bbbb...........................................................bbbbbbbbbbbbbbbbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbb                                       bbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbb",
"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbb                                       bbbbbbbbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbb",


]





function preload(){
	walkingImg = loadImage("dansheet.png");
	doorImg = loadImage('doorImg.png');
	backgroundIMAGE = loadImage("purp.jpg");
	lavaImg = loadImage("lavasheet.png");
	enemy3Img = loadImage("enemy3.png");
	backgroundMusic = loadSound("gamemusic2.mp3")
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
    player.debug = true;
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
	grass.w = 99;
	grass.h = 96;
	grass.image = 'dblock.jpg'
	grass.scale = 0.53;
	grass.layer = 9;
	// grass.debug = true;

	black = new Spriteparent.Group();
	black.tile = "b";
	black.w = 240;
	black.h = 220;
	black.image = 'block.jpg'
	black.visible = true;
	black.scale = 0.22;
	// black.debug = true;
	black.layer = 0;

	dirt = new Spriteparent.Group();
	dirt.tile = "o";
	dirt.w = 50;
	dirt.h = 50;
	dirt.image = 'dirt.png'
	dirt.scale = 0.22;
	dirt.layer = 0;
	
	// dirt.debug = true;

	block = new Spriteparent.Group();
	block.tile = "t";
	block.w = 230;
	block.h = 230;
	block.image = 'wooden.png'
	block.scale = 0.23;
	block.layer = 0;
	// block.debug = true;
	

	coin = new Sprite(900, 950, 100, 100, 's');
	coin.image = 'coin.png'
	coin.scale = 0.1
	coin.rotationLock = true;
	coin.w = 20;
	coin.h = 20;
	coin.layer = 9;
	// coin.debug = true;

	lava3 = new Sprite(5200, 2000, 200, 2000, 'k')
	lava3.rotationSpeed = 1;
	
	lava3.h = 70
	lava3.w = 220
	lava3.image = 'lava3.png'
	lava3.layer = 0;
	lava3.image.scale = 1.5;
	lava3.debug = true;

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

	// lava = new Spriteparent.Group();
	// lava.tile = "h";
	// lava.w = 340;
	// lava.h = 340;
	// lava.image = 'lava.png'
	// lava.scale = 0.14;
	// lava.layer = 0;
	// lava.debug = true;
	lavasheet = new Spriteparent.Group();
	lavasheet.tile = "h";
	lavasheet.debug = true;
	lavasheet.w = 334;
	lavasheet.h = 86;
	lavasheet.scale = 0.5;
	lavasheet.spriteSheet = lavaImg; 
	lavasheet.anis.frameDelay = 50;
	lavasheet.addAnis({
	  move: {row: 0, frames: 4},
	});

	lavasheet.w = 50;
	lavasheet.h = 20;
	lavasheet.scale = 2
	lavasheet.debug = true;

	lavablock = new Spriteparent.Group();
	lavablock.tile = "k";
	lavablock.w = 300;
	lavablock.h = 230;
	lavablock.image = 'lavablock.jpg'
	lavablock.scale = 0.21;
	lavablock.layer = 0;
	lavablock.debug = true;

	enemy3 = new Sprite(2000, 2300, 'd');
	// enemy3.tile = "$"
	enemy3.scale = 3;
	enemy3.w = 105;
	enemy3.h = 83;
	enemy3.vel.x = 1;
	enemy3.vel.y = 1;
	enemy3.friction = 0;
	enemy3.rotationLock = true;
	enemy3.debug = true;
	enemy3.spriteSheet = enemy3Img; 
	enemy3.anis.frameDelay = 12;
	enemy3.addAnis({
	  walk: {row: 3, frames: 4},
	});


	enemy4 = new Sprite(1000, 1300, 'd');
	// enemy3.tile = "$"
	enemy4.scale = 3;
	enemy4.w = 105;
	enemy4.h = 83;
	enemy4.vel.x = 1;
	enemy4.vel.y = 1;
	enemy4.friction = 0;
	enemy4.rotationLock = true;
	enemy4.debug = true;
	enemy4.spriteSheet = enemy3Img; 
	enemy4.anis.frameDelay = 12;
	enemy4.addAnis({
	  walk: {row: 3, frames: 4},
	});

	enemy5 = new Sprite(3480, 1900, 'd');
	// enemy3.tile = "$"
	enemy5.scale = 3;
	enemy5.w = 105;
	enemy5.h = 83;
	enemy5.vel.x = 1;
	enemy5.vel.y = 1;
	enemy5.friction = 0;
	enemy5.rotationLock = true;
	enemy5.debug = true;
	enemy5.spriteSheet = enemy3Img; 
	enemy5.anis.frameDelay = 12;
	enemy5.addAnis({
	  walk: {row: 3, frames: 4},
	});
	
	
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
	if(!backgroundMusic.isPlaying()){
		backgroundMusic.play()
	}
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
 
	if(kb.presses('space') && ((player.colliding(block)) || (player.colliding(grass)) || (player.colliding(black)) || (player.colliding(dirt)) || (player.colliding(lavablock)))){
	player.vel.y = -15;

}

// }

if(player.collide(lava3) || player.collide(lavasheet) || player.collide(enemy3) || player.collide(enemy4) || player.collide(enemy5)){
	player.y = 1200;
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

if(player.y  >= 3500){
	player.y = 1100;
	player.x = 190;
	score = 0;
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

function enemy3Move(){
	for(e of enemy3){
		if(e.overlaps(floor1)){
         e.vel.x *= -1
		}
		if(e.vel.x < 0){
         e.mirror.x = false
		}
		else{
			e.mirror.x = true
		}
	}
}

