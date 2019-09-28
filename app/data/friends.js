let friendArray = [{
    userName: 'Ahmed',
    userPicture: '',
    answers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
},
{
    userName: 'Sally',
    userPicture: '',
    answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}]



$('.surveySubmit').on('click', function (event) {
    event.preventDefault();
    let newUser = {
        userName: $('#name').val().trim(),
        userPicture: $('#picture').val().trim(),
        answers: [$('#surveyQuestion1').val(),
        $('#surveyQuestion2').val(),
        $('#surveyQuestion3').val(),
        $('#surveyQuestion4').val(),
        $('#surveyQuestion5').val(),
        $('#surveyQuestion6').val(),
        $('#surveyQuestion7').val(),
        $('#surveyQuestion8').val(),
        $('#surveyQuestion9').val(),
        $('#surveyQuestion10').val()
        ]
    };

    $.get('/api/friends', function (req, res) {
        res.json(friendArray)
    });

    $.post('/api/friends', function (req, res) {
        let user = req.body;
        user.answers.forEach(element => {
            user.score[i] = parseInt(element);

        })
        let bestMatchIndex;
        let minimumDifference = 40;

        for (var i = 0; i < friendArray.length; i++) {
            let totalDifference = 0;
            for (let l = 0; l < friends[i].scores.length; l++) {
                var difference = Math.abs(user.scores[l] - friends[i].scores[l]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bestMatchIndex = i;
                minimumDifference = totalDifference;
            }
            friendArray.push(newUser);
            res.json(friendArray[bestMatchIndex]);
            $('.selectedName').text(friendArray[bestMatchIndex].userName);
            $('.selectedPicture').prepend(`<img id="userImage" alt = 'userImage' src={friendArray[bestMatchIndex].userPicture}></img>`)
        }
        $('#friendFoundModal').modal('show');

    })
})



