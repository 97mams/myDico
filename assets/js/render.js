export const rendre = (datas) => {
    document.getElementById('total').innerText = `result: ${datas.length}`
    for (const data of datas) {
        main.innerHTML += `
                <tr>
                    <td>${data.English}</td>
                    <td>${data.French}</td>
                </tr>`
    }
}