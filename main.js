left_wrist_x=0;
right_wrist_x=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas=createCanvas(800,400);
    canvas.position(430,130);

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
  

    background("grey");
    document.getElementById("text_size").innerHTML = "Font size of Text will be ="+difference+"px";
    fill(blue);
    textSize(difference);
    text('Svasti',50,250);

}

function modelLoaded(){

    console.log('poseNet Is Initialized!');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);

        console.log("right_x ="+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("left_x ="+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}