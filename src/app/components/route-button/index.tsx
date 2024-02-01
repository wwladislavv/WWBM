import Link from 'next/link';

import './style.css';

type Props = {
    to: string;
    text: string;
    className?: string;
};

function RouteButton({ to, text, className = '' }: Props) {
    return (
        <Link className={`${className} button`} href={to}>
            {text}
        </Link>
    );
}

export default RouteButton;
