function startGame() {
    myGameArea.start();
    console.log(animatedObject);
    animatedObject.loadImages();
    bushObject.loadImages();
    crateObject.loadImages(); // Aggiungiamo questa riga
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    },

    drawGameObject: function(gameObject) {
        this.context.drawImage(
            gameObject.image,
            gameObject.x,
            gameObject.y,
            gameObject.width,
            gameObject.height
        );
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function updateGameArea() {
    myGameArea.clear();
    myGameArea.drawGameObject(bushObject);
    myGameArea.drawGameObject(crateObject); // Aggiungiamo questa riga
    animatedObject.update();
    myGameArea.drawGameObject(animatedObject);
}

function moveup() {
    animatedObject.speedY -= 2;
}

function movedown() {
    animatedObject.speedY = 2;
}

function moveleft() {
    animatedObject.speedX -= 2;
}

function moveright() {
    animatedObject.speedX = 2;
}

function clearmove() {
    animatedObject.speedX = 0;
    animatedObject.speedY = 0;
}