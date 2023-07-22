import React, { ReactNode, CSSProperties, useCallback, useState } from 'react';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';

import './index.scss';

export interface affixProps extends React.HTMLAttributes<HTMLDivElement> {
    offsetTop?: number;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

const Affix = (props: affixProps) => {
    const { className, children, style, offsetTop, ...others } = props;
    const [wraperStyle, setWrapperStyle] = useState(null);
    const [affixed, setAffixed] = useState(false);

    const wraperRefCB = useCallback(node => {
        if (!node) return;
        function updatePosition() {
            const { top, width, height } = node.getBoundingClientRect();
            if (top <= offsetTop && !affixed ||
                (affixed &&
                    (width !== wraperStyle.width || height !== wraperStyle.height))) {
                setWrapperStyle({
                    width,
                    height
                });
                setAffixed(true);
            } else if (top > offsetTop) {
                setAffixed(false);
            }
        }
        window.addEventListener('scroll', updatePosition, false);

        const ob = new ResizeObserver(updatePosition);
        ob.observe(node);

    }, []);
    const cls = classNames({
        'ant-affix': true,
        [className as string]: !!className
    });
    return <div ref={wraperRefCB}>
        {affixed ? <div style={wraperStyle} /> : null}
        <div style={affixed ? {
            position: 'fixed',
            top: offsetTop,
            ...wraperStyle
        } : null}>
            {children}
        </div>
    </div>;
};

export default Affix;