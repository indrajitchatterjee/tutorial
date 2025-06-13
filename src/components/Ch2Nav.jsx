import {
    Link,
} from "react-router-dom";

export default function Chapter2Nav(){
    return(
        <>
            <nav>
                <Link to='/chapter2/algo'>Algorithm</Link> |
                <Link to={'/chapter2/flowchart'}>Flow Chart</Link> |
                <Link to={'/chapter2/decisiontable'}>Decision Table</Link> |
                <Link to={'/chapter2/structuredprogramming'}>Structured Programming</Link>
            </nav>
        </>
    );
}