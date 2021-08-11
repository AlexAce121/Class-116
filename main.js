Nose_X=0;
Nose_Y=0;

function preload(){
  Moustache = loadImage ('https://i.postimg.cc/3x3QzSGq/m.png');
}

function draw(){
    image(video , 0 , 100 , 420 , 300) ;
    image(Moustache , Nose_X, Nose_Y , 30 , 30);
}

function setup(){
    canvas = createCanvas(420, 300);
    canvas.center();
    video= createCapture(VIDEO) ;
    video.size(420 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotposes);
}

function TakePicture(){
  save("lol.png") ; 
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotposes(results){
    if(results.length > 0) {
        console.log(results);
        console.log('nose x = ' + results[0].pose.nose.x);
        console.log('nose y = ' + results[0].pose.nose.y);
        Nose_X = results[0].pose.nose.x -10;
        Nose_Y = results[0].pose.nose.y -10;
    }
}