$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each drink
    var num1= Math.floor(Math.random()*12+1)
    console.log(num1)
    var num2= Math.floor(Math.random()*12+1)
    console.log(num2)
    var num3= Math.floor(Math.random()*12+1)
    console.log(num3)
    var num4= Math.floor(Math.random()*12+1)
    console.log(num4)
    
    // Variables to keep track of who is happy, and who is drunk!
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#happy').text(wins);
  $('#drunk').text(losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 
  // Display wins
  function woohoo(){
  alert("Congrats! This customer is completely satisfied!");
    wins++; 
    $('#happy').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Sorry! This guy is passed out!");
    losses++;
    $('#drunk').text(losses);
    reset()
  }
  // Clicking drinks
    $('.beer').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('.wine').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.whiskey').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.margarita').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   

  }); 