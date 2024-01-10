
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('poseNet is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].leftWrist.x;
        rightWristX = results[0].rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("left wrist X " + leftWristX + "right wrist X " + rightWristX + "difference " + difference)
    }
}

function draw()
{
    background('#969A97')
    fill('#F90093');
    storke('F90093');
    square(noseX, noseY, difference);
}