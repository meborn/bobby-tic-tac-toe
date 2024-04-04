const Row = '.container-row'
const Square = '.square'
const CurrentPlayerLabel = '#currentPlayerLabel'
const CurrentPlayerInput ='#currentPlayerInput'

const Players = ['Player 1', 'Player 2']
const PlayerValues = ['X', 'O']

$(document).ready(function() {

  // let game = initGame()
  // console.log('game', game)

  initSquares()
  
})

const initGame = function() {
  let game = []
  $(Row).each(function(row, i0) {
    let rowData = []
    $(this).find('input').each(function(input) {
      if($(this).val()) {
        rowData.push($(this).val())
      } else {
        rowData.push(false)
      }
    })
    game.push(rowData)
  })
  return game
}

const initSquares = function() {
  $(Square).on('click', function() {
    console.log('click square')
    $(this).find('input').val(PlayerValues[currentPlayer()]).change()
    
  })
  $(Square + ' input').on('change', function() {
    console.log('input change')
    $(this).parent().text(PlayerValues[currentPlayer()])
    toggleCurrentPlayer()
    checkForWin()
  })
}

const checkForWin = function() {
  return checkRowWin() || checkColWin() || checkDiagonalWin()
}

const checkRowWin = function() {
  // $(Row).each(function() {
  //   const values = $(this).find('input').map(function() {$(this).val()})
  //   return values.every(function(d) {d === values[0]})
  // })
  //TODO
  return false
}

const checkColWin = function() {
  //TODO
  return false
}

const checkDiagonalWin = function() {
  //TODO
  return false
}

const currentPlayer = function() {
  return parseInt($(CurrentPlayerInput).val())
}

const toggleCurrentPlayer = function() {
  const value = currentPlayer() == 0 ? 1 : 0
  $(CurrentPlayerInput).val(value)
  $(CurrentPlayerLabel).text(Players[value])
}