$(document).ready(function() {
	$(".square").click(markSquare)
})

const p1_marker = ["p1", "🙅🏻‍♂️"]
const p2_marker = ["p2", "🙆🏼‍♀️"]
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
		
		switchMarker()
		updateGameboard()
		checkWinner()
	}
}

const switchMarker = function() {
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
			// console.log("Winner:", line[0])
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

// display winner
// css animations for winner

