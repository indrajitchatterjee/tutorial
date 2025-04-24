export default function Chapter2() {
    return (
        <>
            <h1>Techniques of Problem Solving</h1>
            <p>In this tutorial, we will learn about:</p>
            <ul>
                <li>Algorithms</li>
                <li>Flowcharting</li>
                <li>Decision Table</li>
                <li>Programming methodologies viz. top-down and bottom-up programming</li>
                <li>Structured Programming Concepts</li>
            </ul>
            <h2>Algorithm</h2>
            <p>
                <b>Algorithm</b> is a finite sequence of well-defined, computer-implementable instructions, typically to
                solve
                a class of problems or to perform a computation.
            </p>
            <p>
                Algorithms are always unambiguous. Starting from an initial state and initial input (perhaps empty) the
                instructions describe a computation that, when executed, proceeds through a finite number of
                well-defined successive states, eventually producing &apos;output&apos; and terminating at a final
                ending state.
                The Algorithms designed are language-independent, i.e. they are just plain instructions that can be
                implemented in any language, and yet the output will be the same, as expected.
            </p>
            <h3>Characteristics of an Algorithm</h3>
            <p>Algorithm has the following characteristics:<br></br></p>
            <img src="/algo_chars.svg" alt="" height={150}/>
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

            <h4>Relations And Relational Operators</h4>
            <p>
                Relational operators (&lt; ≤, &gt;, ≥, =, ≠) are written the same, way as, and have the same meaning as,
                their mathematical counterparts.
            </p>

            <h4>Logical Operations And Expressions</h4>
            <p>The algorithmic notation also includes the standard logical operators. These are:</p>
            <table>
                <thead>
                <tr>
                    <th>Operator</th>
                    <th>Symbol</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Negation</td>
                    <td>not</td>
                </tr>
                <tr>
                    <td>Logical and</td>
                    <td>and</td>
                </tr>
                <tr>
                    <td>Logical or</td>
                    <td>or</td>
                </tr>
                </tbody>
            </table>

            <h4>Input And Output</h4>
            <p>
                In the algorithmic notation, input is obtained and placed in a variable by the statement
                &quot;Read(variable name)&quot;. Output has the form &quot;Write(literal or variable name)&quot; with
                literals enclosed in
                quotation marks. Alternatively, we can use Input to input data and print or output to output data. For
                example, to input a value into a variable a we can use any of the statements:
            </p>
            <ul>
                <li>Read(a)</li>
                <li>Input(a)</li>
            </ul>
            <p>Similarly, to output the value of the variable a, we can write:</p>
            <ul>
                <li>Write(a)</li>
                <li>Print(a)</li>
                <li>Output(a)</li>
            </ul>

            <h4>Branching and Looping</h4>
            <p>In algorithm, branching is done using the if statement. The statements, that come under the if condition,
                are indented. The elseif type structures are shown using nested if statement. There is also a goto
                statement for unconditional branching. Generally, goto statements are used within if statements.
            </p>
            <p>For looping, there are multiple options.</p>

            <ol>
                <li>
                    <code>
                        Repet for i=1, 2, ....<br/>
                        &nbsp;[Statements inside loop]<br/>
                        [Statements outside loop]
                    </code>
                </li>

                <li>
                    <code>
                        Repeat through step K While Condition<br/>
                        &nbsp;&nbsp;[Statements inside loop]<br/>
                        [Statements outside loop]
                    </code>
                </li>

                <li>
                    Sometimes if and goto statements are used together to form a loop. e.g.
                    <code>
                        .....<br/>
                        Step K: [Statement]<br/>
                        Step K+1: [Statement]<br/>
                        ....<br/>
                        Step M: if condition for loop end not satisfied<br/>
                        &nbsp;&nbsp;goto step K<br/>
                        ....
                    </code>
                </li>
            </ol>
            <p>
                The first statement of an algorithm is Start and the last statement is End or Stop. Every statement in
                an algorithm has a step number.
            </p>
            <h2>Examples</h2>
            <p>Now let us see some examples of algorithm.</p>
            <h3>Add two numbers given as input and show the result</h3>
            <div className={'example'}>
                Step 1: Start <br/>
                Step 2: Input a and b<br/>
                Step 3: c &larr; a + b<br/>
                Step 4: Print c<br/>
                Step 5: Stop<br/>
            </div>

            <h3>Find the maximum of two numbers</h3>
            <div className={'example'}>
                Step 1: Start<br/>
                Step 2: Input a and b<br/>
                Step 3: if a &gt; b then<br/>
                Step 4:   Print a<br/>
                Step 5: else<br/>
                Step 6:   Print b<br/>
                Step 7: Stop<br/>
            </div>

            <h3>Find the factorial of a number</h3>
            <div className={'example'}>
                Step 1: Start<br/>
                Step 2: Input n<br/>
                Step 3: i:=n, f:=1<br/>
                Step 4: if n=0 or n=1 then<br/>
                Step 5:	  Goto Step 11<br/>
                Step 6: else<br/>
                Step 7:   f := f * i<br/>
                Step 8:   i:= i – 1<br/>
                Step 9:   if i &gt; 1 then<br/>
                Step 10:    Goto Step 7<br/>
                Step 11: Print f<br/>
                Step 12: Stop<br/>
            </div>

            <h3>Find the factorial of a number</h3>
            <div className={'example'}>
                Step 1:  Start<br/>
                Step 2:  Input n<br/>
                Step 3:  i:=n, f:=1<br/>
                Step 4:  if n=0 or n=1 then<br/>
                Step 5:	   Goto Step 19<br/>
                Step 6:  else<br/>
                Step 7:    Repeat for i=2 ... n<br/>
                Step8:       f := f * i<br/>
                Step 9:  Print f<br/>
                Step 10: Stop<br/>
            </div>

            <h3>Find the maximum of three numbers</h3>
            <div className={'example'}>
                Step 1:  Start<br/>
                Step 2:  Input a, b and c<br/>
                Step 3:  if a&gt;b then<br/>
                Step 4:    if a&gt;c then<br/>
                Step5:		 Print a<br/>
                Step 6:    else<br/>
                Step 7:	 	 Print c<br/>
                Step 8:  else<br/>
                Step 9:    if b&gt;c then<br/>
                Step 10:	 Print b<br/>
                Step 11:   else<br/>
                Step 12: 	 Print c<br/>
                Step 13: Stop<br/>

            </div>
        </>
    );
}