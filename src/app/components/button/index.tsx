import type { ButtonHTMLAttributes } from 'react';

import './style.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    className?: string;
};

function Button({ text, className }: Props) {
    return (
        <button className={`${className} button`} type="button">
            {text}
        </button>
    );
}

Button.defaultProps = {
    className: '',
};

export default Button;
