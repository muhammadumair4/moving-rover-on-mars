canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_img = ["nasa img1.jfif", "nasa img 2.jpg", "nasa img.jpg", "mars.jpg"];
random_number = Math.floor(Math.random() * 4);
backround_image = nasa_img[random_number];
rover_image = "rover.png";
rover_height = 90;
rover_width = 100;
rover_x = 10;
rover_y = 10;
function add() {
    backround_imageTag = new Image();
    backround_imageTag.onload = uploadbackground();
    backround_imageTag.src = backround_image;
    rover_imageTag = new Image();
    rover_imageTag.onload = uploadrover();
    rover_imageTag.src = rover_image;

}
function uploadbackground() {
    ctx.drawImage(backround_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (keyPressed == '37') {
        left();
        console.log("left");

    }
    if (keyPressed == '38') {
        up();
        console.log("up");

    }
    if (keyPressed == '39') {
        right();
        console.log("right");

    }
    if (keyPressed == '40') {
        down();
        console.log("down");

    }



}
//start making function
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed, x= " + rover_x + " y= " + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed, x= " + rover_x + " y=" + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed, x=" + rover_x + " y=" + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed, x=" + rover_x + " y=" + rover_y);
        uploadbackground();
        uploadrover();

    }


}


