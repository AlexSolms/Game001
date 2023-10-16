
OPPONENTS = [JellyFishGreen, JellyFishYellow, JellyFishPink, JellyFishPurple, PufferFishGreen, PufferFishPink, PufferFishRed];
BACKGROUNDLAYER = {
    bgWater: './images/3. Background/Layers/5. Water/D.png',
    bgLayer2: './images/3. Background/Layers/4.Fondo 2/D.png',
    ngLayer1: './images/3. Background/Layers/3.Fondo 1/D.png',
    bgFloor: './images/3. Background/Layers/2. Floor/D.png'
}


const getRandomOpponent = () => new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)];

const level1 = new Level(Array.from({ length: 5 }, () => getRandomOpponent()), [
    ...Array.from({ length: 3 }, (_, i) => new Background(this.BACKGROUNDLAYER.bgWater, 1919 * i, 0, 400, 0.4)),
    ...Array.from({ length: 3 }, (_, i) => new Background(this.BACKGROUNDLAYER.bgLayer2, 1919 * i, -180, 600, 0.2)),
    ...Array.from({ length: 3 }, (_, i) => new Background(this.BACKGROUNDLAYER.ngLayer1, 1919 * i, -20, 500, 0.1)),
    ...Array.from({ length: 3 }, (_, i) => new Background(this.BACKGROUNDLAYER.bgFloor, 1919 * i, 80, 400, 0))
],
    [
        new Coins(700, 0),
        new Coins(740, 0),
        new Coins(780, 0),
        new Coins(820, 300),
        new Coins(860, 300),
        new Coins(900, 300),
        new Coins(940, 300),
        new Coins(980, 300),
        new Coins(1020, 300)
    ],
    [
        new PoisonBottle(700, 450),
        new PoisonBottle(740, 450),
        new PoisonBottle(780, 450),
        new PoisonBottle(820, 450),
        new PoisonBottle(860, 450),
        new PoisonBottle(900, 450),
        new PoisonBottle(940, 450),
        new PoisonBottle(980, 450),
        new PoisonBottle(1020, 450)
    ]);




/* const level1 = new Level([
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
    new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
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
 */