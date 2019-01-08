    // Whenever a key is pressed, alert "pressed a button".
    // add event listener to buttons
    const cpuChoices = ['rock', 'paper', 'scissor']
    let userScore = 0;
    let cpuScore = 0;
    let ties = 0; 

    let buttons = document.getElementsByTagName('button')
    console.log(buttons, buttons.length)

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', clickAction, false);
    }

    function clickAction(e) {
      let userAnswer = e.target.textContent // logs user answers
      const cpuIndex = Math.floor(Math.random() * Math.floor(3));
       let cpuAnswer = cpuChoices[cpuIndex]
      startGame(userAnswer, cpuAnswer)
    }

    function startGame(userChoice, cpuChoice) {
        updateScores()
document.getElementById('cpu-choice').innerHTML = `The CPU's Choice: ${cpuChoice}`

      if (userChoice === cpuChoice) {
        document.getElementById('game-msg').innerHTML = 'Ladies and Gentlemen: We got ourselves a tie!';
        ties++;
      } 
      
      else {

        if (userChoice === 'rock' && cpuChoice === 'paper') {
            document.getElementById('game-msg').innerHTML = "Rock loses to paper, you lose!!"
          cpuScore++
        }
        if (userChoice === 'rock' && cpuChoice === 'scissor') {
            document.getElementById('game-msg').innerHTML = "Rock beats scissors, you win!!"
          userScore++
        }

        if (userChoice === 'paper' && cpuChoice === 'rock') {
            document.getElementById('game-msg').innerHTML = "Paper beats the rock, you win!!"
          userScore++
        }
        if (userChoice === 'paper' && cpuChoice === 'scissor') {
            document.getElementById('game-msg').innerHTML = "Paper gets cut by the scissors, you lose!!"
          cpuScore++
        }

        if (userChoice === 'scissor' && cpuChoice === 'paper') {
            document.getElementById('game-msg').innerHTML = "Scissors cut paper all day, you win!"
          userScore++
        }
        if (userChoice === 'scissor' && cpuChoice === 'rock') {
            document.getElementById('game-msg').innerHTML = "Rock's gonna mess you up scissors, you lose!"
          cpuScore++
        }
       
      }
      updateScores()
    }
    function updateScores(){

document.getElementById('my-score').innerHTML = userScore
document.getElementById('cpu-score').innerHTML = cpuScore
document.getElementById('ties-score').innerHTML = ties

    }
    updateScores(); 