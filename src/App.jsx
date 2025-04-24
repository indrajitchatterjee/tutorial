import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Chapter1 from './sec1/ch1/ch1.jsx';
import Chapter2 from './sec1/ch2/Page.jsx'
import Algo from "./sec1/ch2/algo.jsx";
import Flowchart from "./sec1/ch2/flowchart.jsx";

function App() {
  return (
    <>
        <Router>
            <nav>
                <Link to='/'>Home</Link>|
                <Link to='/chapter1'>First Chapter</Link>|
                <Link to='/chapter2'>Second Chapter</Link>|
            </nav>
            <Routes>
                <Route path={"/"} element={<Chapter1 />} />
                <Route path={"/chapter1"} element={<Chapter1 />} />
                <Route path={"/chapter2"} element={<Chapter2 />} />
                <Route path={"/chapter2/algo"} element={<Algo />} />
                <Route path={"/chapter2/flowchart"} element={<Flowchart />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
