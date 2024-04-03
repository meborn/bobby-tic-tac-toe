$(document).ready(function() {
	$(".square").click(markSquare)
})

let marker_x = "🙅🏻‍♂️"
let marker_o = "🙆🏼‍♀️"
var marker = marker_x

const markSquare = function() {
	$(this).css("background-color", "white")
	const input = $(this).find("input")
	
	if (input.val() == "") {
		$(this).text(marker)
		switchMarker()
	}
}

const switchMarker = function() {
	if (marker == marker_x) {
		marker = marker_o
	}
	else {
		marker = marker_x
	}
}