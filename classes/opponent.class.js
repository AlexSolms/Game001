class Opponents extends MovableObject{

    //hier muss eine Funktion rein, die y und x Koordinaten sämtlicher normalen Gegner in dem Bereich von x=500 bis x= 2500 und y=0 bis y=379 zeichnet.
 world3;
 x=Math.floor(Math.random() * 2500) + 500;
 y=Math.floor(Math.random() * 379) + 10;

 constructor(){
    super();
 }
 movePufferFish(){
   if (this.world3.hero.x) {
       console.log('blubb: ',this.world3.hero.x);
   }

}
 }

 