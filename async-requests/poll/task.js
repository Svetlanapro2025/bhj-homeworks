let xhr = new XMLHttpRequest();
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

xhr.open('GET', 'http://localhost:3333/poll');
xhr.send();

xhr.addEventListener('load', function() {
    let response = JSON.parse(xhr.response);

    pollTitle.insertAdjacentText(
        'afterbegin',
        response['data'].title
    );

    response.data.answers.forEach((answer, index) => {
        pollAnswers.insertAdjacentHTML(
            'afterbegin',
            `<button class="poll__answer">${answer}</button>`
        );

        pollAnswers.firstElementChild.onclick = function() {
            alert('Спасибо, ваш голос засчитан!');

            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3333/poll');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(`vote=${response.id}&answer=${index}`);

            xhr.addEventListener('load', function() {
                let voteResponse = JSON.parse(xhr.response);
                let votesSum = voteResponse.stat.reduce((acc, current) => {
                    return acc + current.votes;
                }, 0);

                pollAnswers.innerHTML = '';

                voteResponse.stat.forEach((result) => {
                    pollAnswers.insertAdjacentHTML(
                        'afterbegin',
                        `<div>${result.answer}: <b>${(result.votes * 100 / votesSum).toFixed(2)}%</b></div>`
                    )
                })
            })
        };
    })    
})