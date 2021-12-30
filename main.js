noseX = 0;
noseY = 0;
function preload()
{
    ClownNose = loadImage('https://i.postimg.cc/W4x2QQmG/Red-Nose-Cutout.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseX = noseX - 15;
        noseY = results[0].pose.nose.y;
        noseY = noseY - 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw()
{
    image(video ,0,0,300,300);
    image(ClownNose ,noseX ,noseY ,40 ,40);
}
function take_snapshot()
{
save('MyFilterImg.png');
}