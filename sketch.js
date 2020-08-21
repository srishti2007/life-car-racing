var background_img;
var car, car_img;
var incom_car1_img;
var life1, life2, life3, life4, life5;
var life1_img, life2_img, life3_img, life4_img, life5_img;
var incom_car1;
var x, y;
function preload() {
    background_img = loadImage('images/road.jpg');
    car_img = loadImage('images/car1.png');
    life1_img = loadImage('images/life1.png');
    life2_img = loadImage('images/life2.png');
    life3_img = loadImage('images/life3.png');
    life4_img = loadImage('images/life4.png');
    life5_img = loadImage('images/life5.png');
    incom_car1_img = loadImage('images/incoming_car.png');
}
function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    car = createSprite(displayWidth / 2, displayHeight / 0.5);
    car.velocityY = -10;
    car.addImage(car_img);
    life1 = createSprite(displayHeight / 7, car.y - 400);
    life1.addImage(life1_img);
    life1.velocityY = -10;
    life2 = createSprite(displayHeight / 5, car.y - 400);
    life2.addImage(life2_img);
    life2.velocityY = -10;
    life3 = createSprite(displayHeight / 3.9, car.y - 400);
    life3.addImage(life3_img);
    life3.velocityY = -10;
    life4 = createSprite(displayHeight / 3.2, car.y - 400);
    life4.addImage(life4_img);
    life4.velocityY = -10;
    life5 = createSprite(displayHeight / 2.7, car.y - 400);
    life5.addImage(life5_img);
    life5.velocityY = -10;
}
function draw() {
    background(rgb(198, 135, 103));
    image(background_img, 0, -displayHeight * 4, displayWidth, displayHeight * 6);
    drawSprites();
    camera.position.x = displayWidth / 2;
    camera.position.y = car.y - 200;
    imcom_cars();
    if (keyIsDown(LEFT_ARROW)) {
        car.x = car.x - 20;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        car.x = car.x + 20;
    }
    dash();
}
function imcom_cars() {
    if (frameCount % 10 === 0) {
        incom_car1 = create
        x = random(0, 2000);
        y = random(-1800, -3000);
        incom_car1 = createSprite(x, y);
        incom_car1.addImage(incom_car1_img);
        incom_car1.velocityY = 9;
    }
}

function dash(){
    var d = dist(car.x, car,y, incom_car1.x, incom_car1.y); 
    if(d < car.width + incom_car1.width){
        console.log("a")
    }
}