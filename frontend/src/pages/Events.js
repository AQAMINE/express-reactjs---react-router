import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Aid Fitar',
    },
    {
        id: 'e2',
        title: 'Aid AlAdha',
    },
]

export default function EventsPage() {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map(event => <li key={event.id}>
                    <Link to={`/events/${event.id}`}>{event.title }</Link>
                </li>)}
            </ul>
        </>
    );
}