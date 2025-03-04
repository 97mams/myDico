const url = '../Vocabulary.json'
import { dataFetch, } from "./fetch.js";
import { searchParams } from "./searchParams.js";
const main = document.getElementById('main')
const handleInput = document.getElementById('search')

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

