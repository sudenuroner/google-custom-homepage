

let url = "https://www.google.com/search?q=";
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    if (searchInput.value.trim() !== "") { // .trim() ile boşlukları kaldırıyoruz
        let fullUrl = url + encodeURIComponent(searchInput.value); // encodeURIComponent ile güvenli hale getiriyoruz
        window.open(fullUrl, "_blank");
        searchInput.value = ""; 
    }
});
