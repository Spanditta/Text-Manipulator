function setup(){
    c1 = createCanvas(500,500);
    c1.position(800,100);
    v1 = createCapture(VIDEO);
    m = ml5.poseNet(v1, modelLoaded);
    m.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model successfully loaded') 
}

nosex = 0;
nosey = 0;
l_wristx =0;
r_wristx = 0;
difference = 0;
function gotPoses(result){
    if(result.length > 0){
nosex = result[0].pose.nose.x;
nosey = result[0].pose.nose.y;
l_wristx = result[0].pose.leftWrist.x;
r_wristx = result[0].pose.rightWrist.x;
difference = l_wristx - r_wristx;
console.log('difference ='+ difference);

    }
}
function draw(){
    background('aquamarine');
    text('Hi',nosex, nosey);
    textSize(difference);
    document.getElementById('answer').innerHTML = 'Font size: ' + difference.toFixed(2) +' px';

}