import logo from './logo.svg';
import './App.css';
import AOSwrapper from './Common/AOSwrapper';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Screens/Home/Index';
import ByAlphabets from './Screens/ByAlphabets/Index';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "alphabet",
        element: <ByAlphabets/>,
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
