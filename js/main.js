import { MovableObject } from '../classes/movableObjects.class.js';
import { Background } from '../classes/background.class.js';
import { Boss } from '../classes/boss.class.js';
import { Hero } from '../classes/hero.class.js';
import { JellyFish } from '../classes/JellyFish.class.js';
import { JellyFishGreen } from '../classes/JellyFishGreen.class.js';
import { JellyFishPink } from '../classes/JellyFishPink.class.js';
import { JellyFishPurple } from '../classes/JellyFishPurple.class.js';
import { JellyFishYellow } from '../classes/JellyFishYellow.class.js';

import { Obstacels } from '../classes/obstacles.class.js';
import { Opponents } from '../classes/opponent.class.js';
import { World } from '../classes/world.class.js';

const classCollection = {
  
  boss: new Boss(),
  hero: new Hero(),
  jellyFish: new JellyFish(),
  jellyFishGreen: new JellyFishGreen(),
  jellyFishPink: new JellyFishPink(),
  jellyFishPurple: new JellyFishPurple(),
  jellyFishYellow: new JellyFishYellow(),
  movableObject: new MovableObject(),
  obstacels: new Obstacels(),
  opponents: new Opponents(),
  world: new World(),
  background: new Background(),


};
