var NORTH = 0;
var SOUTH = 1;
var EAST  = 2;
var WEST  = 3;

var moveCount = 0;

var score = 0;

var currentLocation = 0;

var locationArray = new Array();

var inventoryArray = new Array();

var nav = [      //     NO  S1  E2  W3    
               /*0*/   [ 1,  3,  2,  4],
               /*1*/   [ 5,  0, -1, -1],
               /*2*/   [-1, -1,  6,  0],
               /*3*/   [ 0, -1, -1, -1],
               /*4*/   [-1, -1,  0, -1],
               /*5*/   [-1,  1, -1, -1],
               /*6*/   [-1, -1,  7,  2],
               /*7*/   [-1, -1,  8,  6],
               /*8*/   [-1, -1,  9,  7],
               /*9*/   [-1, -1, -1,  8]
           ];  

function Locations (_id, _name, _description, _item) {
   this.id                 = _id;
   this.name               = _name;
   this.description        = _description;
   this.item               = _item;
   
   this.toString = function() {
      var retVal = "";
     
      retVal = "[Location]"                        + "\n" + 
               "Id:"           + this.id           + "\n" +
               "Name:"         + this.name         + "\n" +
               "Description:"  + this.description  + "\n" +
               "Item:"         + this.item         + "\n";
      return retVal;
   }  
} 

function Item (_id, _name, _description) {
   this.id                 = _id;
   this.name               = _name;
   this.description        = _description;
   
   this.toString = function() {
      var retVal = "";
     
      retVal = "[Item]"                               + "\n" + 
               "id:"          + this.id               + "\n" +
               "name:"        + this.name             + "\n" +
               "description:" + this.description      + "\n";
      return retVal;
   }  
}   

function createLocations () {
  location0 =   new Locations("0",   "init",    "You are standing in the middle of a forest surrounded by tall trees and darkness.", "No item here.");
  location1 =   new Locations("1",   "Approach Campsite",    "Looking North, there is an old campsite that has been abandoned.",  "No item here.");
  location2 =   new Locations("2",   "See Cottage",    "Looking East, there is a cottage in the distance with lights on and footsteps leading to it.",  "No item here.");
  location3 =   new Locations("3",   "Creek",    "Looking West, there is a large creek blocking your path. You must turn around.", "No item here.");
  location4 =   new Locations("4",   "Blocked Trail",    "Looking West, there is a large creek blocking your path. You must turn around.", "No items here");
  location5 =   new Locations("5",   "Investigate Campsite",    "Continuing North, you investigate the abandoned campground and find an old tattered map. Take the map and turn around, you can't continue north.",  "Map");
  location6 =   new Locations("6",   "Cottage Porch",    "Continuing East, you begin to approach the porch of the cottage.",  "No item here.");
  location7 =   new Locations("7",   "Front Door",    "You knock at the front door and hear no response.  The door is slightly ajar and you walk inside.  The door locks behind you.",  "Flashlight");
  location8 =   new Locations("8",   "Living Room",    "You walk into the living room which is illuminated by candles with night quickly approaching. No one is here.",  "Gun");
  location9 =   new Locations("9",   "Kitchen",    "You continue in to the kitchen and find a full untouched dinner at the table.",  "Key");

  locationArray[0] = location0;
  locationArray[1] = location1;
  locationArray[2] = location2;
  locationArray[3] = location3;
  locationArray[4] = location4;
  locationArray[5] = location5;
  locationArray[6] = location6;
  locationArray[7] = location7;
  locationArray[8] = location8;
  locationArray[9] = location9;

}

function move(direction) {
     moveCount = moveCount + 1
     var newLocation = nav[currentLocation][direction];
     if (newLocation !== -1) {
       currentLocation = newLocation;
       visibility(newLocation)
       createLocations();
       updateDisplay(locationArray[currentLocation]);
     } else {
         updateDisplay("You cannot go that way.")
       }
}   

function visibility(newLocation) {
        var newLocation = newLocation
        switch (newLocation) {
            case 0:
               document.getElementById("idNorth").style.visibility="visible";
               document.getElementById("idEast").style.visibility="visible";
               document.getElementById("idWest").style.visibility="visible";
               document.getElementById("idSouth").style.visibility="visible";
               break;      
                 
            case 1:
               document.getElementById("idNorth").style.visibility="visible";
               document.getElementById("idEast").style.visibility="hidden";
               document.getElementById("idWest").style.visibility="hidden";
               document.getElementById("idSouth").style.visibility="visible";
               score = score + 5;
               hasVisited1 = true;
               break;         
                  
            case 2:
               document.getElementById("idNorth").style.visibility="hidden";
               document.getElementById("idEast").style.visibility="visible";
               document.getElementById("idWest").style.visibility="visible";
               document.getElementById("idSouth").style.visibility="hidden";
               score = score + 5;
               hasVisited2 = true;
               break;
            
            case 3:
               document.getElementById("idNorth").style.visibility="visible";
               document.getElementById("idEast").style.visibility="hidden";
               document.getElementById("idWest").style.visibility="hidden";
               document.getElementById("idSouth").style.visibility="visible";
               score = score + 5;
               hasVisited3 = true;
               break;
            
            case 4:
                document.getElementById("idNorth").style.visibility="hidden";
                document.getElementById("idEast").style.visibility="visible";
                document.getElementById("idWest").style.visibility="visible";
                document.getElementById("idSouth").style.visibility="hidden";
                score = score + 5;
                hasVisited4 = true;
            break;
            
            case 5:
                document.getElementById("idNorth").style.visibility="visible";
                document.getElementById("idEast").style.visibility="hidden";
                document.getElementById("idWest").style.visibility="hidden";
                document.getElementById("idSouth").style.visibility="visible";
                score = score + 5;
                hasVisited5 = true;
                break;
            
            case 6:
                document.getElementById("idNorth").style.visibility="hidden";
                document.getElementById("idEast").style.visibility="visible";
                document.getElementById("idWest").style.visibility="visible";
                document.getElementById("idSouth").style.visibility="hidden";
                score = score + 5;
                hasVisited6 = true;
                break;
                
            case 7:
                document.getElementById("idNorth").style.visibility="hidden";
                document.getElementById("idEast").style.visibility="visible";
                document.getElementById("idWest").style.visibility="visible";
                document.getElementById("idSouth").style.visibility="hidden";
                score = score + 5;
                hasVisited7 = true;
                break;
                
            case 8:
                document.getElementById("idNorth").style.visibility="hidden";
                document.getElementById("idEast").style.visibility="visible";
                document.getElementById("idWest").style.visibility="visible";
                document.getElementById("idSouth").style.visibility="hidden";
                score = score + 5;
                hasVisited8 = true;
                break;
            
            case 9:
                document.getElementById("idNorth").style.visibility="hidden";
                document.getElementById("idEast").style.visibility="visible";
                document.getElementById("idWest").style.visibility="visible";
                document.getElementById("idSouth").style.visibility="hidden";
                score = score + 5;
                hasVisited9 = true;
                break;
        }      
}                       
          
function btn_score_click(){
   score = score;
   alert(score);
}
        
    function btn_go_click() {
      var userInput =document.getElementById("txtInput").value;              
      switch (userInput) {
                  
          case "N":
            move(NORTH);          
            break;     
    
          case "n":
            move(NORTH);          
            break;     
    
          case "E":
            move(EAST);          
            break;  
      
          case "e":
            move(EAST);          
            break;  
             
          case "S":
            move(SOUTH);          
            break;  

          case "s":
            move(SOUTH);          
            break;  
    
          case "W":
            move(WEST);          
            break;  
         
          case "w":
            move(WEST);          
            break;  
            
          case "take":
            take();
            break;
            
          case "help":
            help();
            break;
          
          case "inventory":
            checkInventory();
            break;
          
          case validCommands (userInput):
          break;
      
      }
    }
      
function take() {
        Map        = new Item(1, "Map", "Wrinkled and tattered map.");
        Key        = new Item(2, "Key", "Shiny golden key.");
        Flashlight = new Item(3, "Flashlight", "Large blue flashlight.");
        Gun        = new Item(4, "Gun", "Small black pistol.");
        
    switch (currentLocation) {
       
       case 5 :  
            inventoryArray[1] = Map
            updateDisplay("You now have the map in your inventory.")    
       break;
       
       case 7 :  
            inventoryArray[3] = Flashlight
            updateDisplay("You now have the flashlight in your inventory.")     
       break;

       case 8 :  
            inventoryArray[4] = Gun
            updateDisplay("You now have the gun in your inventory.")     
       break;                         
      
       case 9 :  
            inventoryArray[2] = Key
            updateDisplay("You now have the key in your inventory.")     
       break;              
    } 
}
    
function checkInventory() {
    updateDisplay(inventoryArray);
}


function help() {
  updateDisplay("Valid commands are \"N\", \"S\", \"E\", \"W\" or \"n\", \"s\", \"e\", \"w\". To pick up an item, enter 'take'. To check your inventory, enter 'inventory'.");
}
  
         
function validCommands() {
  updateDisplay ("Invalid command. Type 'help' for valid commands."); 
}
  
 function updateDisplay(msg) {   
   msg = msg + "[" + currentLocation + "]";
   var ta = document.getElementById("taGame");
   ta.value = msg + "\n" + ta.value;   
   ta.scrollBottom = ta.scrollHeight;           
 } 