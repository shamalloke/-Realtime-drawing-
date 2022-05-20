Left_wrist_x=0;
Right_wrist_x=0;
Nose_x=0;
Nose_y=0;
difference=0; 


function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
  video=createCapture(VIDEO);
    video.size(400,400);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
console.log("PoseNet is Initialised");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    Nose_x=results[0].pose.nose.x;
    Nose_y=results[0].pose.nose.y;
     Left_wrist_x=results[0].pose.leftWrist.x;
     Right_wrist_x=results[0].pose.rightWrist.x;

    difference=floor(Left_wrist_x - Right_wrist_x);


}
}


function draw(){
document.getElementById("Width_Height").innerHTML="Width and Height of square" + difference + "px";
    background("grey");
    fill("red");
    stroke("red");
    square(Nose_x,Nose_y,difference);
}



