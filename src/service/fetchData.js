export async function fetchData(id) {
    return await fetch(`http://0.0.0.0:3333/history/${id}`).then(response => response.json())
}