import Navbar from "./navbar";
import Home from "./Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import About from "./About";
import RootLayout from './layouts/RootLayout';
import NewsEvents from "./NewsEvents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="newsevents" element={<NewsEvents/>} />
      //add in new paths here
    </Route>
  )
)


function App() {

  return (
      // <div className="App">
      //   <Navbar />
      //   <div className="content">
      //     <Routes>
      //       <Route exact path="/"> 
      //         <Home />
      //       </Route>
      //       <Route path="/about"> 
      //         <About />
      //       </Route>
      //     </Routes>
      //   </div>
      // </div>

      <RouterProvider router={router} />
  );
}

export default App;
