window.addEventListener("load", function () {
    var divDog = document.querySelector("#div-Img")
    var divCat = document.querySelector("#div-ImgCats")
    var divFox = document.querySelector("#div-ImgFox")
    var btndog = document.querySelector("#btn-RandomDog")
    var btnCat = document.querySelector("#btn-RandomCats")
    var btnFox = document.querySelector("#btn-RandomFox")
    let apiDog = () => { return fetch('https://dog.ceo/api/breeds/image/random') }
    let apiCats = () => { return fetch('https://aws.random.cat/meow') }
    let apiFox = () => { return fetch('https://randomfox.ca/floof/') }
    function getDogs() {
        apiDog()
            .then(data => data.json())
            .then(imgDog => {
                let img = document.querySelector('#img-Dogs')
                img.src = imgDog.message;
                img.width = "200"
                img.height = "200"
                divDog.appendChild(img);
            })
    }
    function getCats() {
        apiCats()
            .then(data => data.json())
            .then(catsRandom => {
                let img = document.querySelector('#img-Cats')
                img.src = catsRandom.file;
                img.width = "200"
                img.height = "200"
                divCat.appendChild(img);
            })
    }
    function getFox() {
        apiFox()
            .then(data => data.json())
            .then(foxRandom => {
                let img = document.querySelector('#img-Fox')
                img.src = foxRandom.image;
                img.width = "200"
                img.height = "200"
                divFox.appendChild(img);
            })
    }
    btndog.addEventListener("click", function () { getDogs() })
    btnCat.addEventListener("click", function () { getCats() })
    btnFox.addEventListener("click", function () { getFox() })
});
