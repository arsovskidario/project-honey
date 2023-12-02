
export function convertTimestampToEUFormat(timestamp) {
    const date = new Date(timestamp);

    // Format the date to EU time format
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Europe/Berlin' // Adjust the timezone as needed
    };

    return new Intl.DateTimeFormat('en-EU', options).format(date);
}