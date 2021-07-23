export const isEmpty = obj => {
    if (!obj) {
        return true
    }
    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            return obj.length === 0
        }
        return Object.keys(obj).length === 0
    }
    return false
}