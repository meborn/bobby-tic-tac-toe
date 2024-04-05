$(document).ready(function() {
	$(".square").click(markSquare)
	$(".square input").change(markInput)
})

// check if there's a row winner
// clean up the code

const marker_x = "x"
const marker_o = "o"
var marker = marker_x

var square_values = []

const markSquare = function() {
	$(this).css("background-color", "white")
	const input = $(this).find("input")
	const span = $(this).find("span")
	
	if (input.val() === "") {
		span.text(marker)
		input.val(marker).trigger("change")
		switchMarker()
	}
}

const markInput = function() {
	square_values = []
	const rows = $(".container-row")
	rows.each(function(){
		const squares = $(this).find("input")
		const values = []
		squares.each(function(){
			values.push($(this).val())
		})
		square_values.push(values)
	})
	console.log("Square values",square_values)
}

const switchMarker = function() {
	if (marker === marker_x) {
		marker = marker_o
	}
	else {
		marker = marker_x
	}
}

// function that checks for a win?
// data structure that stores the win conditions. 
// [[1,2,3],[4,5,6]...] search this array
// if these correspondg squares are the same, we have a winner