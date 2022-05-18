export function toDate(dates){
    const newDate = new Date(dates);
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }

    return newDate.toLocaleDateString("en-EN", options)
}