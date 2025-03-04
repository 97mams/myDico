import { dataFetch, } from "./fetch.js";
const main = document.getElementById('main')
const handleInput = document.getElementById('search')

const searchParams = async (params, find) => {
    const result = []
    for (const element of params) {
        const englishElement = element.English.toLowerCase()
        const frenchElement = element.French.toLowerCase()
        if (englishElement.includes(find)) {
            result.push(element)
        } else if (frenchElement.includes(find)) {
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

