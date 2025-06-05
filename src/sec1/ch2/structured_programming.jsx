import Ch2Header from "../../components/ch2header.jsx";
import Chapter2Nav from "../../components/Ch2Nav.jsx";

export default function StructuredProgramming() {
    return (
        <>
            <Ch2Header/>
            <Chapter2Nav/>

            <h2>Structured Programming</h2>
            <p>
                <b>Structured Programming</b> is a programming paradigm aimed at improving the clarity, quality, and
                development time of a computer program by making extensive use of the structured control flow
                constructs of selection (if/then/else) and repetition (while and for), block structures, and
                subroutines.
            </p>
            <p>
                It means that the code will execute the instruction by instruction one after the other. It doesn’t
                support the possibility of jumping from one instruction to some other with the help of any statement
                like GOTO, etc. Therefore, the instructions in this approach will be executed in a serial and structured
                manner. The languages that support Structured programming approach are:
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>C#</li>
                </ul>
                etc.
            </p>
            <p>
                The structured program consists of well structured and separated modules. But the entry and exit in a
                structured program is a single-time event. It means that the program uses single-entry and single-exit
                elements. Therefore a structured program is well maintained, neat and clean program. This is the reason
                why the Structured Programming Approach is well accepted in the programming world.
            </p>
            <h3>Advantages of Structured Programming Approach</h3>
            <p>
                <ul>
                    <li>Easier to read and understand</li>
                    <li>User Friendly</li>
                    <li>Easier to Maintain</li>
                    <li>Mainly problem based instead of being machine based</li>
                    <li>Development is easier as it requires less effort and time</li>
                    <li>Easier to Debug</li>
                    <li>Machine-Independent, mostly.</li>
                </ul>
            </p>
            <h3>Disadvantages of Structured Programming Approach</h3>
            <ul>
                <li>Since it is Machine-Independent, So it takes time to convert into machine code.</li>
                <li>The converted machine code is not the same as for assembly language.</li>
                <li>The program depends upon changeable factors like data-types. Therefore it needs to be updated with
                    the need on the go.
                </li>
                <li>Usually the development in this approach takes longer time as it is language-dependent. Whereas in
                    the case of assembly language, the development takes lesser time as it is fixed for the machine.
                </li>
            </ul>
            <h3>Control Structures</h3>
            <p>
                Following the structured program theorem, all programs are seen as composed of control structures:
                <ul>
                    <li><b>Sequence:</b> ordered statements or subroutines executed in sequence.</li>
                    <li><b>Selection:</b> one or a number of statements is executed depending on the state of the program. This
                        is usually expressed with keywords such as if..then..else..endif.
                    </li>
                    <li><b>Iteration:</b> a statement or block is executed until the program reaches a certain state, or
                        operations have been applied to every element of a collection. This is usually expressed with
                        keywords such as while, repeat, for or do..until. Often it is recommended that each loop should
                        only have one entry point (and in the original structural programming, also only one exit point,
                        and a few languages enforce this).
                    </li>
                    <li><b>Recursion:</b> a statement is executed by repeatedly calling itself until termination conditions
                        are met. While similar in practice to iterative loops, recursive loops may be more
                        computationally efficient, and are implemented differently as a cascading stack.
                    </li>

                </ul>
            </p>
        </>
    );
}