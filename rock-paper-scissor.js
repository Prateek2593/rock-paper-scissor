// to get the stored data we use localStorage.getItem('score')
      // since it is a string it can be converted back into object using JSON.parse
      let score= JSON.parse(localStorage.getItem('score')) || {
        wins:0,             
        losses:0,
        ties:0
      };
      updateScore();
      // if there exist no value score will be reset to 0
      /*
      if(!score){
        score={
          wins:0,
          losses:0,
          tie:0
        }
      }*/
        
        
      function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = "";
      if (playerMove === "scissors") {
        if (computerMove === "rock") {
          result = 'You lose.';
        } else if (computerMove === "paper") {
          result = 'You win.';
        } else if (computerMove === "scissors") {
          result = 'Tie.';
        }
      } else if (playerMove === "paper") {
        if (computerMove === "rock") {
          result = 'You win.';
        } else if (computerMove === "paper") {
          result = 'Tie.';
        } else if (computerMove === "scissors") {
          result = 'You lose.';
        }
      } else if(playerMove==='rock'){
              if(computerMove==='rock'){
              result='Tie.';
            }else if(computerMove==='paper'){
                result='You lose.';
            } else if(computerMove==='scissors'){
                result='You win.';
            }
        }

        // Displaying the score
        if(result==='You win.'){
          score.wins+=1;
        } else if(result==='You lose.'){
          score.losses++;
        } else if(result==='Tie.'){
          score.ties+=1;
        }

        // local storage used to store data more permanently even after refreshing the page
        // local storage only supports strings as parameter
        // using JSON.stringify to convert score object into string
        localStorage.setItem('score',JSON.stringify(score));

        updateScore();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You 
        <img src="/rock-paper-scissor/${playerMove}-emoji.png" class="move-icon">
        <img src="/rock-paper-scissor/${computerMove}-emoji.png" class="move-icon">
        Computer`;
      }

      function updateScore(){
        document.querySelector('.js-score').innerHTML= `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
      }
      function pickComputerMove() {
        let computerMove = "";
        const random = Math.random();
        if (random >= 0 && random < 1 / 3) {
          computerMove = "rock";
        } else if (random >= 1 / 3 && random < 2 / 3) {
          computerMove = "paper";
        } else if (random >= 2 / 3 && random < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }