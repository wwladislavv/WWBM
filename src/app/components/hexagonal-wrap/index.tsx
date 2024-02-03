import { ReactNode } from 'react';

import './hexagonal-wrap.css';

type Props = {
    className?: string;
    status: 'selected' | 'success' | 'error' | 'disabled' | undefined;
    children: ReactNode;
    small?: boolean;
    disabled?: boolean;
};

export default function HexagonalWrap({
    className = '',
    status,
    children,
    small = false,
    disabled = false,
}: Props) {
    return (
        <div
            className={`hexagonContainer ${className} ${status || ''} ${small ? 'small' : ''} ${
                disabled ? 'disabled' : ''
            }`}
        >
            <div className="hexagonInner">
                <div className="hexagon">{children}</div>
            </div>
        </div>
    );
}
