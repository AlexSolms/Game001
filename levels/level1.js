OPPONENTS = [JellyFishGreen, JellyFishYellow, JellyFishPink, JellyFishPurple, PufferFishGreen, PufferFishPink, PufferFishRed];
BACKGROUNDLAYER = {
    bgWater: './images/3. Background/Layers/5. Water/D.png',
    bgLayer2: './images/3. Background/Layers/4.Fondo 2/D.png',
    ngLayer1: './images/3. Background/Layers/3.Fondo 1/D.png',
    bgFloor: './images/3. Background/Layers/2. Floor/D.png'
}


const level1 = new Level([
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)]()
    
],
    [
        new Background(this.BACKGROUNDLAYER.bgWater, 0, 0, 400),
        new Background(this.BACKGROUNDLAYER.bgLayer2, 0, -180, 600),
        new Background(this.BACKGROUNDLAYER.ngLayer1, 0, -20, 500),
        new Background(this.BACKGROUNDLAYER.bgFloor, 0, 80, 400),

        new Background(this.BACKGROUNDLAYER.bgWater, 1919, 0, 400),
        new Background(this.BACKGROUNDLAYER.bgLayer2, 1919, -180, 600),
        new Background(this.BACKGROUNDLAYER.ngLayer1, 1919, -20, 500),
        new Background(this.BACKGROUNDLAYER.bgFloor, 1919, 80, 400)
    ]);