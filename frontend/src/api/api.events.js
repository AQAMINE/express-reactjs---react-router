export async function getEvents() {
    const response = await fetch('http://localhost:8080/events');

        if (!response.ok) {
            //field to load
        } else {
            const resData = await response.json();
            return resData.events;
        }
}