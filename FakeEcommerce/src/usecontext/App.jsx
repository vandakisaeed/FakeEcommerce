import { Parent } from './Parent';
import { DemoContext, useDemoContext } from './DemoContext';
import DemoState from './DemoState';
// function App() {
//     const data = [1, 2, 3, 4, 5];
//     return (
//         <>
//             <CardContainer data={data} />
//         </>
//     );
// }

// export default App;

// function CardContainer({ data }) {
//     return (
//         <div>
//             {data.map((num) => (
//                 <Card num={num} />
//             ))}
//         </div>
//     );
// }

// function Card({ num }) {
//     return <div>{num}</div>;
// }

export default function App() {
    const age = 30;
    return (
        <div>
            <h1>Context Api</h1>
            <DemoState>
                <Parent />
            </DemoState>
            {/* <NotAChild /> */}
            {/* <Frame />
            <Frame2 /> */}
            <Frame>
                <Counter count={0} />
            </Frame>
            <Frame>
                <Card age={age} />
            </Frame>
            <NotAChild/>
        </div>
    );
}

function NotAChild() {
    // const name = useDemoContext();
    // const name = use(DemoContext);
    return (
        <>
            <h4>Not a Child</h4>
            <p>{name}</p>
        </>
    );
}

function Frame({ children }) {
    return (
        <>
            <div>-------</div>
            {children}
            <div>-------</div>
        </>
    );
}
function Frame2() {
    return (
        <>
            <div>-------</div>
            <Card />
            <div>-------</div>
        </>
    );
}

function Counter({count}) {
    return <p>counter {count}</p>;
}

function Card({age}) {
    
    return (
        <div>
            <p>Card {age}</p>
        </div>
    );
}
