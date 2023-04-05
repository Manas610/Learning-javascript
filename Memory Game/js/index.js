let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];

const parentDiv = document.querySelector('#card-section');

const gameCard = cardsArray.concat(cardsArray);

for(let i=0 ; i<gameCard.length ; i++ ){

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = gameCard[i].name;
    childDiv.style.backgroundImage = `url(${gameCard[i].img})`

    parentDiv.appendChild(childDiv);

}