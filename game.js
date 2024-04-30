$(document).ready(function() {
	$(".square").click(markSquare)
})

const p1_marker = ["p1", "🙅🏻‍♂️"]
const p2_marker = ["p2", "🙆🏼‍♀️"]
const winner = "none"
var current_marker = p1_marker

var gameboard = []

// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]

const wins = [[0, 1, 2],
			  [3, 4, 5],
			  [6, 7, 8],
			  [0, 3, 6],
			  [1, 4, 7],
			  [2, 5, 8],
			  [0, 4, 8],
			  [2, 4, 6]]

const markSquare = function() {
	$(this).css("background-color", "white")
	const player = $(this).find("input")
	const marker = $(this).find("span")
	
	if (player.val() === "") {
		marker.text(current_marker[1])
		player.val(current_marker[0])
		
		updateGameboard()
		switchPlayer()
		updateMessage("turn", current_marker)
		checkWinner()
	}
}

const switchPlayer = function() {
	if (current_marker === p1_marker) {
		current_marker = p2_marker
	}
	else {
		current_marker = p1_marker
	}
}

const updateGameboard = function() {
	gameboard = []
	const squares = $(".square input")
	squares.each(function(){
		gameboard.push($(this).val())
	})
}

const checkWinner = function() {
	for (const win of wins) { // iterate through all win conditions
		line = win.map((i) => gameboard[i]).filter((square) => square !== "") // remove blank squares
		if (line.length === 3 && [...new Set(line)].length === 1) {
			animateWin(win)
			if (line[0] === "p1") {
				updateMessage("win", "Player 1 wins!")
			}
			else {
				updateMessage("win", "Player 2 wins!")
			}
		}
	}
}

const animateWin = function(winning_squares) {
	const remove_indices = [...Array(9).keys()].filter(n => !winning_squares.includes(n))
	const remove_squares = $(remove_indices.map((i) => $(".square")[i]))
	remove_squares.each(function(){
		$(this).animate({
			opacity: 0
		}, 800)
	})
}

const updateMessage = function(type, content) {
	if (type === "win"){
		$("#message").text(content)
	}
	else if (type === "turn"){
		if (content[0] === "p1") {
			$("#message").text("Player 1's turn")
		}
		else {
			$("#message").text("Player 2's turn")
		}
	}
}

// display tie
//
// css animations for winner

