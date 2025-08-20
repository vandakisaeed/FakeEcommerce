import { useDemoContext } from './DemoContext';
export function GrandChild() {
    const { firstName } = useDemoContext();
    return (
        <>
            <h4>GrandChild Component</h4>
            <p>{firstName}</p>
        </>
    );
}
