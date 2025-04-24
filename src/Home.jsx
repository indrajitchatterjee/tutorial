import {
    BrowserRouter as Router,
    Routes, Route,
    Link
} from 'react-router-dom';
import Chapter1 from "./sec1/ch1/ch1.jsx";
import Chapter2 from "./sec1/ch2/algo.jsx";
export default function Home(){
    return(
        <>
            <Router>
                <nav>
                    <Link to={"/ch1"}>Introduction</Link>|
                    <Link to={"/ch2"}>Techniques of Problem Solving: Part1</Link>
                </nav>
                <Routes>
                    <Route path="/ch1" element={<Chapter1 />} />
                    <Route path="/ch2" element={<Chapter2 />} />
                </Routes>
            </Router>
            This is home page
        </>
        
    );
}