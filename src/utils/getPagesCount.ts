export default function (totalPages: number, limit: number) {
    return Math.ceil(Number(totalPages) / Number(limit))
}