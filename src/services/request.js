async function getMethod(url) {
    const response = await fetch(url, {
        method: 'GET'
    });
    var result = await response.json();
    return result
}



export {getMethod}