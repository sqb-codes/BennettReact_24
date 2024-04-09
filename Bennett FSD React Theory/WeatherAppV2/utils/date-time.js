export function format() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes().toString()}`;
}