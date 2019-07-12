function userInput() {

    const brand = document.getElementById("search-value").value;
    const carBrands = ["Audi", "BMW", "Lamborghini", "McLaren", "Mercedes-AMG", "Porsche"];

    for(let i = 0; i < carBrands.length; i++) {
        const currentCar = carBrands[i];
        if(brand != currentCar) {
            console.log("Hide this: " + currentCar);
            var classes = '';
            const cards = document.getElementsByClassName(currentCar);
            if(cards.length > 0) {
                for(let y = 0; y < cards.length; y++) {
                    classes = cards[y];
                    classes.className += ' hide';
                }
            }
        }
        else {
            console.log("Show this: " + currentCar);
            var classes = '';
            const cards = document.getElementsByClassName(currentCar);
            if(cards.length > 0) {
                for(let x = 0; x < cards.length; x++) {
                    classes = cards[x];
                    console.log(classes);
                    
                    classes.classList.remove('hide');
                }
            }
            else {
                console.log("Something is clearly not working...")
            }
        }
    }
}