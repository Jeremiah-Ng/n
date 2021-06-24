function same(){
    document.getElementById("heading1").style.backgroundColor="#5bc0de"
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550, 500);
    canvas.position(560,350);
video.position(0,350)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses);
}
function gotPoses(results,error){
    if(results.length>=0){
        console.log(results)
         
    }
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
    background("lightgrey")
}
take="take "
the="the "
wheel="wheel "
from="from "
my="my "
hands="hands "
var jesus=take+the+wheel+from+my+hands