import type { ButtonHTMLAttributes } from 'react';

import './style.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => void;
    text: string;
};

function Button({ onClick, text }: Props) {
    return (
        <button className="button" type="button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
