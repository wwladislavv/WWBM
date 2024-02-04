import type { ConfigErrors } from 'game/types';

export default function Errors({ errors }: { errors: ConfigErrors }) {
    return (
        <div>
            <h1>Config errors by question index</h1>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
        </div>
    );
}
