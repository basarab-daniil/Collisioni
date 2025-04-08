var crateObject = {
    width: 100,
    height: 100,
    x: 200,
    y: 270 - 100,
  
    loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "https://i.ibb.co/GMgf32L/Crate.png";
    }
  };