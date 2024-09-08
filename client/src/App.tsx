import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/contact', element: <Contact />},
    {path: '/profile', element: <Profile />},
    {path: '/add-listing', element: <CreateListing />}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
