import logo from './logo.svg';
import './App.css';
import AOSwrapper from './Common/AOSwrapper';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Screens/Home/Index';
import Artical from './Screens/Artical/Index';
import BoysABC from './Screens/ByAlphabets/BoysABC';
import GirlsABC from './Screens/ByAlphabets/GirlsABC.jsx';
import Test from './Test';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path: "/trending",
        element: <Home/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      
      {
        path: "/boys/alphabet/:id",
        element: <BoysABC/>,
      },
      {
        path: "/girls/alphabet/:id",
        element: <GirlsABC/>,
      },
      {
        path: "/artical/:id",
        element: <Artical/>,
      },
    ]
  }
]);

function App() {
  
  return (
    <AOSwrapper>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </AOSwrapper>
  );
}

export default App;
