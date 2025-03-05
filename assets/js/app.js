const url = '../Vocabulary.json'
import { dataFetch, } from "./fetch.js";
import { rendre } from "./render.js";
import { searchParams } from "./searchParams.js";
const main = document.getElementById('main')
const handleInput = document.getElementById('search')

const v = await dataFetch(url)

document.getElementById('title')
    .addEventListener('mouseover', () => {
        document.querySelector('span').style.opacity = 0.1
    })

document.getElementById('title')
    .addEventListener('mouseleave', () => {
        document.querySelector('span').style.opacity = 0
    })

document.getElementById('button').addEventListener('click', async () => {
    main.innerHTML = ''
    const find = handleInput.value
    const datas = await searchParams(v, find);
    rendre(datas)
})
