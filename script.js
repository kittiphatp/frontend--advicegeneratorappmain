let topicId = document.getElementsByClassName('topic-id')[0];
let adviceText = document.getElementsByClassName('advice-text')[0];
let btnAdvice = document.querySelector('.btn-advice');

btnAdvice.addEventListener('click', () => {
    fetchData()
});


function fetchData() {
    // URL
    url = 'https://api.adviceslip.com/advice';

    // use the Headers Interface
    let h = new Headers();
    h.append("Accept", "application/json");

    // use the Request Interface
    let req = new Request(url, {
        method: "GET",
        headers: h
    });
    // FETCH
    fetch(req)
        .then(res => res.json())
        .then(data => data.slip)
        .then((slip) => {
            let id = slip.id;
            let advice = slip.advice
            topicId.textContent = id;
            adviceText.textContent = `" ${advice} "`;
        })
}

fetchData();