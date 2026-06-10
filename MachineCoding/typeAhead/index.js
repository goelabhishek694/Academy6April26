import getCountries from "./fetchData.js";

const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestion-box");


const handleSearch = async(keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map(country => country.name.common);
    return countryNameArr;
}

const handleSuggestion = async(e) => {
    // get input value
    console.log(e.target.value);
    const keyword = e.target.value;
    const countryNameArr = await handleSearch(keyword);
    //display the suggestions in the suggestion box
    console.log(countryNameArr);
    populateSuggestionBox(countryNameArr);
}

inputBox.addEventListener("input", handleSuggestion);

const populateSuggestionBox = (countryNameArr) => {
    if(countryNameArr.length > 0){
        suggestionBox.classList.add("visible");
    }else{
        suggestionBox.classList.remove("visible");
    }

    //before showing any result -> reset out suggestion box 
    suggestionBox.innerHTML = "";

    const fragment = document.createDocumentFragment();
    countryNameArr.forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        fragment.appendChild(li);
    });
    suggestionBox.appendChild(fragment);

}



