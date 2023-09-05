class GameObject {
  constructor (config) {
    this.x = config.x
    this.y = config.y
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./images/characters/people/hero.png"
    })
  
  }
}