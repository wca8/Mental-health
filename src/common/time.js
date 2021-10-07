export function GetTime() {
    let date = new Date()
    let y = date.getFullYear()
    let m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    let d = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
    return y + '-' + m + '-' + d
}

export function GetTimeNext() {
    let date = new Date()
    let y = date.getFullYear()
    let m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    let d = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
    return y + '-' + m + '-' + (d+1)
}