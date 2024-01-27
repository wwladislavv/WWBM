'use client';

import Button from 'components/button';

export default function Home() {
    return (
        <Button
            text="Click me"
            onClick={() => {
                console.log('clicked');
            }}
        />
    );
}
