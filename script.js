function Country(){
    fetch`https://restcountries.com/v3.1/all`
    .then( res => res.json())
    .then( data => countryInfo(data))
}

Country();

function countryInfo(data){
    let container = document.getElementById('container');
    for(let singleUser of data){
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        
        let cardImg = document.createElement ('div');

        let img = document.createElement('img');
            img.setAttribute = ('src');

            img.src = `${singleUser.flags.svg}`;
            img.style.maxWidth = "100%";

        let textContainer = document.createElement('div');
        let countryName = document.createElement('h1');
            countryName.innerHTML = singleUser.name.common;
        
        let population = document.createElement('h2');
            population.innerHTML = singleUser.population;

        container.appendChild(cardContainer);
        cardContainer.appendChild(cardImg);
        cardImg.appendChild(img);
        cardContainer.appendChild(textContainer);
        textContainer.appendChild(countryName);
        textContainer.appendChild(population);

    }
}
