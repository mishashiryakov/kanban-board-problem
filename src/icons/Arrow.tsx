import { FC } from 'react';

interface IArrow {
    style: { [key: string]: string };
}

export const Arrow: FC<IArrow> = ({ style = {} }) => {
    return (
        <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowUpwardIcon"
            width="20"
            height="20"
            style={style}
        >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
        </svg>
    );
};
