export default function Chapter2() {
    return (
        <>
            <h1>Techniques of Problem Solving</h1>
            <p>
                In this tutorial, we will learn about:
                <ul>
                    <li>Algorithms</li>
                    <li>Flowcharting</li>
                    <li>Decision Table</li>
                    <li>Programming methodologies viz. top-down and bottom-up programming</li>
                    <li>Structured Programming Concepts</li>
                </ul>
            </p>
            <h2>Algorithm</h2>
            <p>
                <b>Algorithm</b> is a finite sequence of well-defined, computer-implementable instructions, typically to
                solve
                a class of problems or to perform a computation.
            </p>
            <p>
                Algorithms are always unambiguous. Starting from an initial state and initial input (perhaps empty) the
                in-structions describe a computation that, when executed, proceeds through a finite number of
                well-defined successive states, eventually producing &apos;output&apos; and terminating at a final ending state.
                The Algorithms designed are language-independent, i.e. they are just plain instructions that can be
                implemented in any language, and yet the output will be the same, as expected.
            </p>
            <h3>Characteristics of an Algorithm</h3>
            <p>
                Algorithm has the following characteristics:<br></br>
                <img src="/img.png" alt="" height={150}/>
                <ul>
                    <li><b>Clear and Unambiguous:</b> Algorithm should be clear and unambiguous. Each of its steps
                        should be clear in all aspects and must lead to only one meaning.
                    </li>
                    <li><b>Well-Defined Inputs:</b> If an algorithm says to take inputs, it should be well-defined
                        inputs.
                    </li>
                    <li><b>Well-Defined Outputs:</b> The algorithm must clearly define what output will be yielded and
                        it should be well-defined as well.
                    </li>
                    <li><b>Finiteness:</b> The algorithm must be finite, i.e. it should not end up in an infinite loops
                        or similar.
                    </li>
                    <li><b>Feasible:</b> The algorithm must be simple, generic and practical; such that it can be
                        executed upon will the available resources. It must not contain some future technology, or
                        anything.
                    </li>
                    <li><b>Language Independent:</b> The Algorithm designed must be language-independent, i.e. it must
                        be just plain instructions that can be implemented in any language, and yet the output will be
                        same, as expected.
                    </li>
                </ul>
            </p>
            <h3>Algorithm Writing Notations</h3>
            <p>Now let us see how various operations are written in an algorithm.</p>
            <h4>ARITHMETIC OPERATIONS AND EXPRESSIONS</h4>
            <p>
                The algorithmic notation includes the standard binary and unary operators, and, of course, these are
                given the standard mathematical order of precedence. Table 1 should make this clear.
            </p>
            <p>
                Arithmetic expressions may contain variables which have been assigned numeric values and are evaluated
                the same way as in mathematics.
            </p>
            <table>
                <thead>
                <tr>
                    <td><b>Operation</b></td>
                    <td><b>Symbol</b></td>
                    <td><b>Order of Evaluation</b></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Parentheses</td>
                    <td>()</td>
                    <td>Inner to outer</td>
                </tr>
                <tr>
                    <td>Exponentiation</td>
                    <td>^</td>
                    <td>Right to left</td>
                </tr>
                <tr>
                    <td>Unary plus minus</td>
                    <td>+, -</td>
                    <td>Left to right</td>
                </tr>
                <tr>
                    <td>Multiplication</td>
                    <td>*</td>
                    <td rowSpan={5}>Left to right</td>
                </tr>
                <tr>
                    <td>Division</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td>Division</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td>Addition</td>
                    <td>+</td>
                </tr>
                <tr>
                    <td>Subtraction</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <h4>Assignment Operators</h4>
            <p>
                In writing algorithms, we often use the symbol or := to perform assignment operation. Thus to assign a
                value 3 to a variable “a”, we can use either a3 or a:=3. It is a good practice to stick to a particular
                notation of assignment operation and not to mix the two in an algorithm.
            </p>
        </>
    );
}