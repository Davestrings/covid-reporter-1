//Credits https://codepen.io/dajo
// scripts here:
	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8')+ answerScore('q9') + answerScore('q10') + answerScore('q11') + answerScore('q12'));
		console.log("CalcScore: " + calcScore); // it works!

		var questionCounter = 20;
		

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// show different statuses"
		if (calcScore <= 2) {
			showScore = showScore + "&nbsp; <strong>You may be stressed, but just keep observing!</strong>"
		}
		else if (calcScore <= 5) {
			showScore = showScore + "&nbsp; <strong>Hydrate properly and keep proper personal hygiene. Observe and re-evaluate after 2 days!</strong>"
		}
		else if (calcScore <= 10) {
			showScore = showScore + "&nbsp; <strong>Seek consultation with a Doctor!</strong>"
		}
		else {
			showScore = showScore + "&nbsp; <strong>Call the NCDC, You might be a carrier!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
		
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});