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
let firstCard = "";
let secondCard = "";

const gameCard = cardsArray.concat(cardsArray);

const shuffleFunction = (array) =>  {
    for(let i = array.length - 1 ; i > 0 ; i-- ){
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
} 

const shuffleCard = shuffleFunction(gameCard)



const card_matches = () =>{
    let card_selected = document.querySelectorAll('.card_selected')

    card_selected.forEach((curEl) => {
        curEl.classList.add('card_match')
    })
}

const resetGame = () => {
    firstCard = ""
    secondCard = ""
    clickCount = 0 
    let card_selected = document.querySelectorAll('.card_selected')

    card_selected.forEach((curEl) => {
        curEl.classList.remove('card_selected')
    })
}


let clickCount = 0

parentDiv.addEventListener ('click' ,(event) => {
    let currCard = event.target
    if(currCard.id === "card-section"){return false}

    clickCount++;
    if(clickCount < 3){
        if( clickCount === 1){
            firstCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected')
        } else {
            secondCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected')
        }

        if(firstCard !== ""  && secondCard !== ""){
            if(firstCard === secondCard){
                //currCard.classList.add('card_match')
                setTimeout( () => {
                    card_matches()
                    resetGame()
                }, 1000)
            } else {
                setTimeout( () => {
                    resetGame()
                }, 1000)
            }
        }
    } 

})

for(let i=0 ; i<shuffleCard.length ; i++ ){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffleCard[i].name
    //childDiv.style.backgroundImage = `url(${shuffleCard[i].img})`

    const front_div = document.createElement('div')
    front_div.classList.add('front-card')

    const back_div = document.createElement('div')
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffleCard[i].img})`

    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)

}
