import { dataFetch, } from "./fetch.js";
const main = document.getElementById('main')
const handleInput = document.getElementById('search')

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
    main.innerHTML = ''
    const find = handleInput.value
    const datas = await searchParams(v, find);

    document.getElementById('total').innerText = `resultat: ${datas.length}`
    for (const data of datas) {
        main.innerHTML += `
                <tr>
                    <td>${data.English}</td>
                    <td>${data.French}</td>
                </tr>`
    }
})

