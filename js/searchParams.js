export const searchParams = async (params, find) => {
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