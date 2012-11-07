var score = 0;
var NORTH = 1;
var SOUTH = 2;
var EAST  = 3;
var WEST  = 4;
var currentLocation = 0;
var hasVisited0  = false;
var hasVisited1  = false;
var hasVisited2  = false;
var hasVisited3  = false;
var hasVisited4  = false;
var hasVisited5  = false;
var hasVisited6  = false; 
var hasVisited7  = false; 
var hasVisited8  = false; 
var hasVisited9  = false; 
var playerHasMap = false;
    
     //location tracking       
       function btn_north_click () {
         switch (currentLocation) {
              case 3 :currentLocation = 0;
                    init ();
                    break;
              
              case 0 :currentLocation = 1;
                    approachCampsite ();
                    break;
           
              case 1: currentLocation = 5;
                     investigateCampsite ();
                     break;                 
         }                     
       }
                    
       function btn_south_click () {
          switch (currentLocation) {
              case 5: currentLocation = 1;
                    approachCampsite ();
                    break;
              
              case 1: currentLocation = 0;
                    init ();
                    break;
              
              case 0:currentLocation = 3;
                    blockedTrail ();
                    break;
          }
       }
     
      function btn_east_click () {
          switch (currentLocation){
              case 4 : currentLocation = 0; 
                    init ();                    
                    break;           
              
              case 0 : currentLocation = 2; 
                    seeCottage ();
                    break;
              
              case 2 : currentLocation = 6;
                    cottagePorch ();                    
                    break;
             
              case 6 : currentLocation = 7;
                    frontDoor (); 
                    break;
                    
              case 7 : currentLocation = 8;
                    livingRoom (); 
                    break;         
              
              case 8 : currentLocation = 9;
                    kitchen (); 
                    break;            
          }
       }                       
                  
      function btn_west_click () {    
         switch (currentLocation) {
              case 9 : currentLocation = 8; 
                    livingRoom ();                    
                    break;           
              
              case 8 : currentLocation = 7; 
                    frontDoor ();
                    break;
              
              case 7 : currentLocation = 6;
                    cottagePorch ();                    
                    break;
             
              case 6 : currentLocation = 2;
                    seeCottage (); 
                    break;
                    
              case 2 : currentLocation = 0;
                    init (); 
                    break;         
              
              case 0 : currentLocation = 4;
                    creek (); 
                    break;    
         }
      }            
  
      function init () {
         var msg = ("You are standing in the middle of a forest surrounded by tall trees and darkness.")
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="visible";
      }

      function approachCampsite () {
         var msg = "Looking North, there is an old campsite that has been abandoned.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility="visible";
         score = score + 5;
         hasVisited1 = true;
      }

      function investigateCampsite () {
         var msg = "Continuing North, you investigate the abandoned campground and find an old tattered map. Take the map and turn around, you can't continue north.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility="visible";
         score = score + 5;
         hasVisited5 = true;
      }

      function blockedTrail () {
         var msg = "Looking South, there is a trail blocked by fallen trees and overgrown brush. You must turn around.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility="visible";
         score = score + 5;
         hasVisited3 = true;
      } 

      function creek () {
         var msg = "Looking West, there is a large creek blocking your path. You must turn around.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="hidden";
         score = score + 5;
         hasVisited4 = true;
      }

      function seeCottage () {
         var msg = "Looking East, there is a cottage in the distance with lights on and footsteps leading to it.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="hidden";
         score = score + 5;
         hasVisited2 = true;
      } 


      function cottagePorch () {
         var msg = "Continuing East, you begin to approach the porch of the cottage.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="hidden";
         score = score + 5;
         hasVisited6 = true;
      } 


      function frontDoor () {
         var msg = "You knock at the front door and hear no response.  The door is slightly ajar and you walk inside."; 
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="hidden";
         score = score + 5;
         hasVisited7 = true;
      } 


      function livingRoom () {
         var msg = "You walk into the living room which is illuminated by candles with night quickly approaching. No one is here"; 
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="hidden";
         score = score + 5;
         hasVisited8 = true;
      } 


      function kitchen () {
         var msg = "You continue in to the kitchen and find a full untouched dinner at the table. Check another room.";
         updateDisplay(msg);
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="hidden";
         score = score + 5;
         hasVisited9 = true;
      }       
            
      function btn_score_click(){
         score = score;
         alert(score);
      }
              
            function btn_go_click() {
              var userInput =document.getElementById("txtInput").value;              
              switch (userInput) {
                  
                  case "N":
                    btn_north_click ();          
                    break;     
            
                  case "n":
                    btn_north_click ();          
                    break;     
            
                  case "E":
                    btn_east_click  ();          
                    break;  
              
                  case "e":
                    btn_east_click  ();          
                    break;  
                     
                  case "S":
                    btn_south_click ();          
                    break;  

                  case "s":
                    btn_south_click ();          
                    break;  
            
                  case "W":
                    btn_west_click  ();          
                    break;  
                 
                  case "w":
                    btn_west_click  ();          
                    break;  
                    
                  case "take":
                    take ();
                    break;
                    
                  case "help":
                    help ();
                    break;
                  
                  case "inventory":
                    inventory ();
                    break;
                  
                  case validCommands (userInput):
                  break;
              
              }
            }
      
      function take () {
          switch (currentLocation) {
             case 5 :  
               if (playerHasMap === false) {
                   updateDisplay ("You now have the map."); 
                   playerHasMap = true;    
               } else if (playerHasMap) {
                  updateDisplay ("You already picked up the map. Nothing else is here.");            
             }
                 break;
          }
      }             
          
            
          function inventory() {
            if (playerHasMap === true){
              updateDisplay("The map is in your inventory");
            }else{ 
              updateDisplay ("There is nothing in your inventory.");
            }
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
           }        