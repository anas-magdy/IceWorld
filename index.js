var main = document.getElementsByTagName("main")[0].children
console.log(main)
window.onload = function () {
    var mainLeft = main[0].children
    var mainRight = main[1].children
    for (var i = 0; i < mainLeft.length; i++) {
        mainLeft[i].style.animation = `comeFromButtom 1s ease-in-out ${i * .5}s 1 forwards`
    }
    mainRight[0].style.animation = `comeFromRight 1s ease-in-out 0s 1 forwards`
    window.onscroll = function () {
        console.log(scrollY)
        if (scrollY > 200) {
            var popular = document.getElementsByClassName("popular")[0].children
            for (var i = 0; i < popular.length; i++) {
                popular[i].style.animation = `comeFromButtom 1s ease-in-out ${i * .5}s 1 forwards`
            }
        }

        var cardContainer = document.getElementsByClassName("cardContainer")

        if (scrollY > 1100) {
            cardContainer[0].getElementsByClassName("image")[0].style.animation = "comeFromLeft 1s ease-in-out 0s 1 forwards"
            var textsection = cardContainer[0].getElementsByClassName("text")[0].children
            for (var i = 0; i < textsection.length; i++) {
                textsection[i].style.animation = `comeFromButtom 1s ease-in-out ${i * .5}s 1 forwards`
            }

        }
        if (scrollY > 1500) {
            cardContainer[1].getElementsByClassName("image")[0].style.animation = "comeFromRight 1s ease-in-out 0s 1 forwards"
            var textsection = cardContainer[1].getElementsByClassName("text")[0].children
            for (var i = 0; i < textsection.length; i++) {
                textsection[i].style.animation = `comeFromButtom 1s ease-in-out ${i * .5}s 1 forwards`
            }

        }
        if (scrollY > 1900) {
            cardContainer[2].getElementsByClassName("image")[0].style.animation = "comeFromLeft 1s ease-in-out 0s 1 forwards"
            var textsection = cardContainer[2].getElementsByClassName("text")[0].children
            for (var i = 0; i < textsection.length; i++) {
                textsection[i].style.animation = `comeFromButtom 1s ease-in-out ${i * .5}s 1 forwards`
            }

        }
    }
}
