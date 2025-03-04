import { dataFetch, } from "./fetch.js";
const main = document.getElementById('main')
const handleInput = document.getElementById('search')



main.innerHTML = '<ul id="items"></ul>'
const listItems = document.getElementById('items')


const searchParams = async (params, find) => {
    const result = []
    for (const element of params) {
        const newElement = element.English.toLowerCase()
        if (newElement.includes(find)) {
            result.push(element)
        }
    }
    return result

}
const url = '../Vocabulary.json'
const v = await dataFetch(url)

document.getElementById('button').addEventListener('click', async () => {
    listItems.innerHTML = ''
    const find = handleInput.value
    const datas = await searchParams(v, find);
    console.log(find);

    console.log(datas);


    for (const data of datas) {
        listItems.innerHTML += `<li>${data.English} / ${data.French}</li>`
    }
})

