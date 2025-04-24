import {
    Link,
} from "react-router-dom";
import Ch2Header from "../../components/ch2header.jsx";
import Chapter2Nav from "../../components/Ch2Nav.jsx";

export default function Flowchart() {
    return (
        <>
            <Ch2Header />
            <Chapter2Nav />

            <h2>Flowchart</h2>
            <p>
                A flowchart is a diagrammatic representation of an algorithm. A flowchart is a blueprint that
                pictorially represents the algorithm and its steps. The steps of a flowchart do not have a specific size
                and shape rather it is designed in different shapes and sizes.
            </p>

            <h3>Benefits of Flowchart</h3>
            <p>Let us now discuss the benefits of a flowchart.</p>
            <ul>
                <li>
                    <b>Simplify the Logic: </b>
                    As it provides the pictorial representation of the steps; therefore, it simplifies the logic and
                    subsequent steps.
                </li>
                <li>
                    <b>Makes Communication Better: </b>Because of having easily understandable pictorial logic and
                    steps, it
                    is a better and simple way of representation.
                </li>
                <li>
                    <b>Effective Analysis: </b>Once the flowchart is prepared, it becomes very simple to analyze the
                    problem
                    in an effective way.
                </li>
                <li>
                    <b>Useful in Coding: </b>The flowchart also helps in coding process efficiently, as it gives
                    directions
                    on what to do, when to do, and where to do. It makes the work easier.
                </li>
                <li>
                    <b>Proper Testing: </b>Further, flowchart also helps in finding the error (if any) in program.
                </li>
                <li>
                    <b>Applicable Documentation: </b>Last but not the least, a flowchart also helps in preparing the
                    proper
                    document (once the codes are written).
                </li>
            </ul>

            <h3>Disadvantages of Using Flowchart</h3>
            <ul>
                <li>
                    <b>Complex logic: </b>Sometimes, the program logic is quite complicated. In that case, flowchart
                    becomes
                    complex and clumsy. This will become a pain for the user, resulting in a waste of time and money
                    trying
                    to correct the problem.
                </li>
                <li>
                    <b>Alterations and Modifications: </b>If alterations are required the flowchart may require
                    re-drawing
                    completely. This will usually waste valuable time.
                </li>
                <li>
                    <b>Reproduction: </b>As the flowchart symbols cannot be typed, reproduction of flowchart becomes a
                    problem.
                </li>
            </ul>

            <h3>Flowchart Symbols</h3>
            <p>
                Flowcharts use simple geometric shapes to depict processes and arrows to show relationships and
                pro-cess/data flow. Here is a chart for some of the common symbols used in drawing flowcharts.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Symbol Name</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={'/chart_symbols/start.png'} alt={'Start Symbol'} width={'50px'} /></td>
                        <td>Start/Stop</td>
                        <td>Used at the beginning and end of the algorithm to show start and end of the program.</td>
                    </tr>
                    <tr>
                        <td><img src="/chart_symbols/process.png" width='50px' /></td>
                        <td>Process</td>
                        <td>Indicates processes like mathematical operations.</td>
                    </tr>
                    <tr>
                        <td><img src="/chart_symbols/input.png" width={'50px'} /></td>
                        <td>Input/ Output</td>
                        <td>Used for denoting program inputs and outputs.</td>
                    </tr>
                    <tr>
                        <td><img src="/chart_symbols/decission.png" width={'50px'}/></td>
                        <td>Decision</td>
                        <td>Stands for decision statements in a program, where answer is usually Yes or No.</td>
                    </tr>
                    <tr>
                        <td><img src="/chart_symbols/arrow.png" alt="Arrow" width="50px" srcset="" /></td>
                        <td>Arrow</td>
                        <td>Shows relationships between different shapes.</td>
                    </tr>
                    <tr>
                        <td><img src='/chart_symbols/on_page_connect.png' width={'50px'} /></td>
                        <td>On-page Connector</td>
                        <td>Connects two or more parts of a flowchart, which are on the same page.</td>
                    </tr>
                    <tr>
                        <td><img src="/chart_symbols/off_page_connect.png" alt="Off-Page Connector" width="50px" srcset="" /></td>
                        <td>Off-page Connector</td>
                        <td>Connects two parts of a flowchart which are spread over different pages.</td>
                    </tr>
                </tbody>
            </table>
            <h3>Some Examples</h3>
            <p>Let's now see some examples of some popular problems.</p>
            <div className="example-flex-container">
                <div>
                    <h4>Find the sum of two input numbers</h4>
                    <img src='/flow_charts/ex1.png' height='500px' />
                </div>
                <div>
                    <h4>Find the factorial of a number</h4>
                    <img src='/flow_charts/ex2.png' height='700px' />
                </div>
                <div>
                    <h4>Find the largest among three different numbers entered by the user</h4>
                    <img src='/flow_charts/ex3.png' />
                </div>
            </div>
        </>
    );
}