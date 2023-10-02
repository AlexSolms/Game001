class Opponents extends MovableObject{

    //hier muss eine Funktion rein, die y und x Koordinaten sämtlicher normalen Gegner in dem Bereich von x=500 bis x= 2500 und y=0 bis y=379 zeichnet.

 x=Math.floor(Math.random() * (2301 - 500)) + 500;
 y=Math.floor(Math.random() * (390 - 11)) + 10;

 constructor(){
    super();
 }
 
 }

 