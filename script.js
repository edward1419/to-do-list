// function filter(){
//     var searchingvalue = document.getElementById("searchvalue").value.
//     toLowerCase();
//     var searchinglist = document.getElementsByTagName('li');
//     // console.log(searchinglist)

//     for(var i of searchinglist){
//         if(i.innerHTML.search(searchingvalue) == -1 ){
//             i.style.display = "none";
//         } else{
//             i.style.display = 'block';
//         } 
//     }
// }
// var baby = 'mine'
// console.log(baby)

var lodash = require('lodash');


var num1 = [2];
var num2 = [2,3]

console.log(lodash.union(num1,num2))


var search = document.getElementById('search');

var searchButton = document.getElementById('search-button');
var drinkName = search.value;
    // div.appendChild(searchButton);
    // serach.value = ''




var section = document.getElementById('drinks');


async function loadData() {
    // var response = await fetch "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;
    var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;

    var response = await fetch(drinkUrl);


        var data = await response.json();    
        var drinkList = data.drinks;
    
    for (let i=0; i<drinkList.length; i++) {

        var list = drinkList[i];


        var div = document.createElement('div')
        div.className="card"



        var img = document.createElement('img');
        img.setAttribute('src', list.strDrinkThumb)
        img.setAttribute('alt', 'cocktail');
        img.className="image"
        console.log(drinkList[i])

        
        var title = document.createElement('p')
        title.innrHTML = list.strDrink

        
        var details = document.createElement('p')
        details.classList.add('ins');
        details.innerHTML = list.strInstructions;



        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(details);
        section.appendChild(div);


    }
   
        // console.log(drinkList)
}

searchButton.addEventListener('click', loadData)


