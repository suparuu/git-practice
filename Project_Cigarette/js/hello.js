let data = {
    "test": {
        "thin": {
            "yes": {
                "more": ["ciga", "1"],
                "less": "결과(담배고유번호)"
            },

            "no": {
                "more": "결과(담배고유번호)",
                "less": "결과(담배고유번호)"
            }
        },
        "thick": {
            "yes": {
                "more": "결과(담배고유번호)",
                "less": "결과(담배고유번호)"
            },
            "no": {
                "more": "결과(담배고유번호)",
                "less": "결과(담배고유번호)"
            }
        }
    }
}
console.log(data.test.thin)
let arr = ['thin', 'yes', 'more']
let result = data.test[arr[0]][arr[1]][arr[2]];
console.log(data.test[arr[0]])

let product = {
    "ciga": [
        {
            "id": "0",
            "url": "./img/01_esse_change_himalaya.jpg",
            "title": "에쎄체인지 히말라야",
            "detail": "니코틴0.5mg 타르 5mg"
        },
        {
            "id": "1",
            "url": "./img/02_sevenstars.jpg",
            "title": "세븐스타",
            "detail": "니코틴0.6mg 타르7mg"
        }
    ]
}
console.log(product.ciga[1].url)
/* let a = product[result[0]][result[1]];
console.log(
    a.url,
    a.title,
    a.detail
) */

const elMain = document.querySelector('main'),
    elSec = document.querySelectorAll('.scroll-event'),
    elUl = document.querySelectorAll('ul'),
    elDiv00 = document.querySelector('.btn'),
    elDiv01 = document.querySelectorAll('.box01 div'),
    elDiv02 = document.querySelectorAll('.box02 div'),
    elDiv03 = document.querySelectorAll('.box03 div');

let offset = [];
elSec.forEach(function (section, key) {
    offset.push(section.offsetTop)
})
let A = 0;

let result01 = [];
console.log(window.innerHeight*2)

elDiv00.addEventListener('click',function(){
    elMain.style = `transform:translateY(-${window.innerHeight}px)`
    
})
elDiv01.forEach(function (div, key) {
    div.addEventListener('click', function () {
        if (key == 0) {
            result01.push('thick')
            elMain.style = `transform:translateY(-${window.innerHeight * 2}px)`
            console.log(result01)
        }
        else {
            result01.push('thin')
            elMain.style = `transform:translateY(-${window.innerHeight * 2}px)`
            console.log(result01)
        }
    })
})
let result02 = [];
elDiv02.forEach(function (div, key) {
    div.addEventListener('click', function () {
        if (key == 0) {
            elMain.style = `transform:translateY(-${window.innerHeight * 3}px)`
            result01.push('yes')
            console.log(result01)

        }
        else {
            elMain.style = `transform:translateY(-${window.innerHeight * 3}px)`
            result01.push('no')
            console.log(result01)

        }
    })
})
elDiv03.forEach(function (div, key) {
    div.addEventListener('click', function () {
        if (key == 0) {
            result01.push('more')
            console.log(result01)
        }
        else {
            result01.push('less')
            console.log(result01)
        }
    })
})