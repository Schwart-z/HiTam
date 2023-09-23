class GameObject {
  constructor (config) {
    this.isPlayer = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.frameWidth = config.frameWidth || 32;
    this.frameHeight = config.frameHeight || 32;

    this.currentAnimation = "idle";
    this.animations = config.animations || false; 
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./images/characters/people/hero.png"
    });
  }

  update () {
  }
} 
