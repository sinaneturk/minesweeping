import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import PreviousGames from './pages/previous-games';


export const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      children:[
        {
            path:'home',
            element:<Home />
        },
        {
            path:"profile",
            element:<Profile />
        },
        {
            path:"previous-games",
            element:<PreviousGames />
        }
      ]
    },
  
  ])