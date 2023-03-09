import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        // path: "/",
        // element: <Home/>,
      },
      {
        path: "contact-us",
        // element: <CommingSoon/>,
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
