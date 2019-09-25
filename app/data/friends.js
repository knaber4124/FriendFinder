


$('.surveySubmit').on('click', function (event) {
    event.preventDefault();
    let newUser = {
        userName: $('#name').val().trim(),
        userPicture: $('#picture').val().trim(),
        question1: $('#surveyQuestion1').val().trim(),
        question2: $('#surveyQuestion2').val().trim(),
        question3: $('#surveyQuestion3').val().trim(),
        question4: $('#surveyQuestion4').val().trim(),
        question5: $('#surveyQuestion5').val().trim(),
        question6: $('#surveyQuestion6').val().trim(),
        question7: $('#surveyQuestion7').val().trim(),
        question8: $('#surveyQuestion8').val().trim(),
        question9: $('#surveyQuestion9').val().trim(),
        question10: $('#surveyQuestion10').val().trim()
    }
    
})