window.addEventListener("load", function () {
    var divImgRandom = document.querySelector("#div-Img")
    var btnRandom = document.querySelector("#btn-Random");

    function getAnimals() {
        fechCats()
        .then(data => data.json())
        .then(catsRandom => { imgGeneratorCats(catsRandom) })
    }

    let imgGeneratorCats = catsGenerator => {
        let img = document.querySelector("#img-Cats")
        img.src = catsGenerator.file
        img.width = "500"
        img.height = "500"
        divImgRandom.appendChild(img);
    }

    let fechCats = () => {
        return fetch('https://aws.random.cat/meow')
    }

    btnRandom.addEventListener("click", function () { getAnimals() })
});