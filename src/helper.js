export const fecthApi = async (path) => {
    const response = await fetch(path)
    let json = await response.json();

    return json
}