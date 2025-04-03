let backgroundMusic;

function preload(){
    backgroundMusic = loadSound("menumusic.mp3")
}

function setup(){
    
}

function draw(){
    createCanvas(2000, 5000)
    canvas.setAttribute('style', 'right: 10px; position: absolute;')
    if(!backgroundMusic.isPlaying()){
		backgroundMusic.play()
	}
}