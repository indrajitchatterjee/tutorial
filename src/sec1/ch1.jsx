// Concept of Problem Solving
export default function Chapter1() {
    return (
        <>
            <h1>Concept of Problem Solving</h1>
            <p>The problem solving technique using computer involves the following steps:</p>
            <ul>
                <li>
                    <b>Understanding the problem:</b> To solve any problem, it is very crucial to understand the problem
                    first. What is the desired output of the code and how that output can be generated?
                </li>
                <li>
                    <b>Devising the plan:</b> Once a problem has been understood, a proper action plan has to be devised
                    to
                    solve it. This step usually involves computing the result from the given set of inputs. It uses the
                    relationship drawn between inputs and outputs in the previous step. The complexity of this step
                    depends upon the complexity of the problem at hand.
                </li>
                <li>
                    <b>Executing the plan:</b> Once the plan has been defined, it should follow the trajectory of action
                    while ensuring the plan’s integrity at various checkpoints. If any inconsistency is found in
                    between, the plan needs to be revised.
                </li>
                <li>
                    <b>Evaluation:</b> The final result so obtained must be evaluated and verified to see if the problem
                    has
                    been solved satisfactorily.
                </li>
            </ul>

            <h2>Problem Definition</h2>
            <p>
                Before a program is written for solving a problem, it is important to define the problem clearly.
                Problem definition describes what the program for the problem must do. It should definitely include:
                <ul>
                    <li><b>INPUT:</b> What is the input set of the program?</li>
                    <li><b>OUTPUT:</b> What is the desired output of the program and in what form the output is desired?
                    </li>
                </ul>
            </p>
            <h2>Program Design</h2>
            <p>
                Most good programs require good planning before they are written. This is called Program Design. Program
                design consists of the steps a programmer should take before they start coding a program. These are:
                <ul>
                    <li><b>Define the problem:</b> The problem need to be understood before we can expect to get a
                        correct solution
                        to the problem. What information (inputs), is given to use to solve the problem? What will the
                        solution
                        (outputs) of the problem, look like? What calculations (processes), will be used to change the
                        input
                        information into the desired output?
                    </li>
                    <li>
                        <b>Outline the solution:</b> Break the problem into the steps of what must be done to solve the
                        problem. List
                        what tasks need to be done to solve the problem. An English outline is a good tool for doing the
                        job. If
                        needed, find a mathematical model of the problem.
                    </li>
                    <li><b>Develop the outline into an algorithm:</b> Expand the outline from the previous step into a
                        complete
                        solution. It should list all the steps that need to be done, in the correct order they need to
                        be done
                        in. If there is more than one algorithm, choose the best one.
                    </li>
                    <li><b>Develop flowchart of the algorithm:</b> Once an algorithm is selected, the next step is to
                        develop a
                        flowchart of the algorithm.
                    </li>
                    <li><b>Code the algorithm into a specific programming language:</b> Once the flowchart is complete,
                        translate the
                        algorithm into a computer program. This is only 5 to 10% of the total programming process!
                    </li>
                    <li><b>Run and test the program:</b> Now run the program with some test data. If we get the correct
                        answer to the
                        problem, the program works! Otherwise, look for errors in the program and try again.
                    </li>
                    <li><b>Document and maintain the program:</b> Once the program works correctly, make sure that the
                        documentation
                        is up to date and be ready to maintain the program. Good programs get better during the
                        life-time as
                        people think of better way to do things and additional tasks the program might do. Up to data
                        documentation is very important.
                    </li>
                </ul>
            </p>
            <h2>Types of Errors in Programming</h2>
            <p>
                There are mainly three kinds of errors in computer programming. These are:
                <ul>
                    <li><b>Syntax error or Compile Time error:</b> These are errors where the compiler finds something
                        wrong with the
                        program syntax. Examples of such errors are an omitted semicolon or using a variable that is not
                        defined
                        or passing wrong number of arguments to a function etc. Syntax errors are resolved by thoroughly
                        inspecting the program code. But if we use an advanced editor like vscode, then it will
                        automatically
                        highlight and inform about these errors and thus save our time.
                    </li>
                    <li><b>Logic Errors or Runtime Error:</b> These types of errors occur due to the error in the
                        program logic.
                        These errors are detected at the runtime of the program that is why it is also called Runtime
                        error.
                        This is also called Bug. These errors are resolved by a process called Debugging. Examples of
                        such error
                        include perform division operation where multiplication operation was required.
                    </li>
                    <li><b>Exception:</b> These types of errors are also detected at the runtime, but they are different
                        from the so
                        called runtime errors. Exceptions are some abnormal situation at runtime. If we do not handle
                        the
                        situation properly, then the program may crash. Examples of such error include divide by zero or
                        trying
                        to read from a file that does not exist at all or trying to read from a database table that does
                        not
                        exists etc. Exceptions are handled in the program typically by enclosing the code section, where
                        exception may occur, within try throw catch block.
                    </li>
                </ul>
            </p>
            <h2>Debugging</h2>
            <p>Debugging is the process of finding and resolving bugs within computer programs, software, or
                systems.</p>
            <h3>Why do we need Debugging?</h3>
            <p>
                <ul>
                    <li>It reports an error condition immediately. This allows earlier detection of an error and makes
                        the process of software development stress-free and unproblematic.
                    </li>
                    <li>
                        It also provides maximum useful information of data structures and allows easy interpretation.
                    </li>
                    <li>Debugging assists the developer in reducing useless and distracting information.</li>
                </ul>
            </p>
            <h3>Debugging Strategy</h3>
            <p>
                <ul>
                    <li>
                        Study the system for the larger duration in order to understand the system. It helps debugger to
                        construct different representations of systems to be debugging depends on the need. Study of the
                        system is also done actively to find recent changes made to the software.
                    </li>
                    <li>
                        Backwards analysis of the problem which involves tracing the program backward from the location
                        of failure message in order to identify the region of faulty code. A detailed study of the
                        region is conducting to find the cause of defects.
                    </li>
                    <li>
                        Forward analysis of the program involves tracing the program forwards using breakpoints or print
                        statements at different points in the program and studying the results. The region where the
                        wrong outputs are obtained is the region that needs to be focused to find the defect.
                    </li>
                    <li>
                        Using the past experience of the software debug the software with similar problems in nature.
                        The success of this approach depends on the expertise of the debugger.
                    </li>
                </ul>
            </p>
            <h3>Debugging Techniques</h3>
            <p>
                <ul>
                    <li>
                        <b>Add Breakpoints:</b> Add breakpoints in the source code where the error is suspected to exist.
                    </li>
                    <li>
                        <b>Add Watch:</b> Add watch on important variables to see their values.
                    </li>
                    <li>
                        <b>Add Extra Print Statements (optional):</b> Add extra print statements to get the values of variables.
                    </li>
                </ul>
            </p>
        </>
    );
}