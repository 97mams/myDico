const url = './Vocabulary.json'

const afetch = async (url) => {
    const data = await fetch(url)
    const json = await data.json()

    return json
}

const datas = await afetch(url)

for (let data in datas) {
    console.log(typeof data);
}