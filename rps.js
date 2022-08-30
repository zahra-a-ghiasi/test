
let playerscore = 0;
let computerscore = 0;
let roundwinner = '';


function playRound(playerSelection, computerSelection) {
    if (playerSelection==computerSelection) { roundwinner = 'tie'}

    if (playerSelection==='rock' && computerSelection==='scissors'|| 
    playerSelection==='scissors' && computerSelection==='paper'||
    playerSelection==='paper' && computerSelection==='rock'){ 
        playerscore++;
        roundwinner ='YOU WON BITCH!'}
        if (playerSelection==='scissors' && computerSelection==='rock'|| 
        playerSelection==='paper'&& computerSelection==='scissors' ||
         playerSelection==='rock'&& computerSelection==='paper'){ 
            computerscore++;
            roundwinner ='what a loser'}
            updateScoredisplay(roundWinner, playerSelection, computerSelection)
        
           }
           function getRandomInt() {
            computerrandom= Math.floor(Math.random() * 3);
            switch (computerrandom) {
                case 0:
                    computerSelection='scissors'
                    case 1:
                        computerSelection='rock'
                        case 2:
                            computerSelection='paper'

                        
            }
          }
          function endofgame() { return computerscore===4 || playerscore===4; }

          function handleClick(playerSelection) {
            if (endofgame()) {
              openEndgameModal()
              return
            }
          
            const computerSelection = getRandomChoice()
        
          
            if (endofgame()) {
              openEndgameModal()
              setFinalMessage()
            }
          }

          function scoretext()  {if (roundwinner = 'tie'){
            scorefuntext.textcontent='whatever!'
          } else if (roundwinner = 'YOU WON BITCH!'){ scorefuntext.textContent='wohooo!' } 
          else if (roundwinner = 'what a loser'){ scorefuntext.textcontent='next time maybe'}

        }
         function finishround()  {if (playerscore > computerscore) {endofgame.textContent='lucky you!'} 
         else {endofgames.textContent='haha you will never win'}}
          

        function restart


