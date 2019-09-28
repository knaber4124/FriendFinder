let friendArray = [{
    userName: 'Ahmed',
    userPicture: 'data:image/jpeg;base64,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',
    answers:[3,3,3,3,3,3,3,3,3,3] 
},
{
    userName: 'Sally',
    userPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElVEn1iYSBOZsKHCP6e9uGndDUQfhLln9chWnKN6tKpLz6znh',
    answers:[1,1,1,1,1,1,1,1,1,1]
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




// module.exports = friendArray;