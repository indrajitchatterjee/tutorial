import Ch2Header from "../../components/ch2header.jsx";
import Chapter2Nav from "../../components/Ch2Nav.jsx";

export default function DecisionTable() {
    return (
        <>
            <Ch2Header/>
            <Chapter2Nav/>
            <h2>Decision Table</h2>
            <p>
                Decision table is a brief visual representation for specifying which actions to perform depending on
                given conditions. The information represented in decision tables can also be represented as decision
                trees or in a programming language using if-then-else and switch-case statements.
            </p>
            <p>
                A decision table is a good way to settle with different combination inputs with their corresponding
                outputs and also called cause-effect table. Reason to call cause-effect table is a related logical
                diagramming technique called cause-effect graphing that is basically used to obtain the decision table.
            </p>

            <h3>Importance of Decision Table</h3>
            <ul>
                <li>
                    Decision tables are very much helpful in test design technique.
                </li>
                <li>
                    It helps testers to search the effects of combinations of different inputs and other software states
                    that must correctly implement business rules.
                </li>
                <li>
                    It provides a regular way of stating complex business rules, that is helpful for developers as well
                    as for testers.
                </li>
                <li>
                    It assists in development process with developer to do a better job. Testing with all combination
                    might be impractical.
                </li>
                <li>
                    A decision table is basically an outstanding technique used in both testing and requirements
                    management.
                </li>
                <li>
                    It is a structured exercise to prepare requirements when dealing with complex business rules.
                </li>
                <li>
                    It is also used in model complicated logic.
                </li>
            </ul>

            <h3>Advantage of Decision Table</h3>
            <ul>
                <li>
                    Any complex business flow can be easily converted into the test scenarios & test cases using
                    this technique.
                </li>
                <li>
                    Decision tables work iteratively that means the table created at the first iteration is used as
                    input table for next tables. The iteration is done only if the initial table is not
                    satisfactory.
                </li>
                <li>
                    Simple to understand and everyone can use this method design the test scenarios & test cases.
                </li>
                <li>
                    It provides complete coverage of test cases which help to reduce the rework on writing test
                    scenarios & test cases.
                </li>
                <li>
                    These tables guarantee that we consider every possible combination of condition values. This is
                    known as its completeness property.
                </li>
            </ul>

            <h3>Example</h3>
            <h4>Example 1</h4>
            <p>
                A simple example containing a range of possible input values and a function pointer to the section of
                code to process that input.
            </p>
            <table>
                <thead>
                <tr>
                    <th>Input</th>
                    <th>Function Pointer</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Function 1 (initialize)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Function 2 (process 2)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Function 9 (terminate)</td>
                </tr>
                </tbody>
            </table>

            <h4>Example 2</h4>
            <p>Let’s take an example and see how to create a decision table for a login screen:</p>
            <img src={'/decision_table/img.png'} width={500}/>
            <p>
                The condition states that if the user provides the correct username and password the user will be
                redirected to the homepage. If any of the input is wrong, an error message will be displayed.
            </p>
        </>
    );
}