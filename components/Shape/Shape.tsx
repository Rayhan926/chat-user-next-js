import { ComponentProps } from 'react';

// import PropTypes from "prop-types";
function Shape(ownerState: ShapeProps) {
    // Owner State
    const {
        varient = 'circle',
        size = 30,
        rounded = Math.floor(size / 6),
        className = '',
        children,
        style,
        ...rest
    } = ownerState;

    return (
        <div>
            <div
                {...rest}
                style={{
                    width: size,
                    borderRadius: varient === 'circle' ? '50%' : rounded,
                    ...style,
                }}
                className={`flex items-center justify-center overflow-hidden text-slate-600 aspect-square ${className}`}
            >
                {children}
            </div>
        </div>
    );
}

type ShapeProps = {
    varient?: 'circle' | 'square';
    rounded?: number;
    size?: number;
    children?: any;
    className?: string;
    style?: React.CSSProperties;
} & ComponentProps<'div'>;

export default Shape;
