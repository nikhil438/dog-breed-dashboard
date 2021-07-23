export const getObject = (key) => {
    const str = localStorage.getItem(key)
    return str ? JSON.parse(str) : {}
}

export const setObject = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj))
}

export const remove = (key) => {
    localStorage.removeItem(key)
}