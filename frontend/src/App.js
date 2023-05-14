import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {path: '/events', element: <EventsRootLayout />, children:[
        { index: true, element: <EventsPage />, loader: async () => {
          const response = await fetch('http://localhost:8080/events');

          if (!response.ok) {
            //field to load
          } else {
              const resData = await response.json();
              return resData.events;
          }
        }},
        { path: '/events/:eventId', element: <EventDetailPage /> },
        { path: '/events/new', element: <NewEventPage /> },
        { path: '/events/:eventId/edit', element: <EditEventPage />}
      ]}
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
