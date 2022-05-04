import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LvlProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    lvl: number;
    xp: number;
    children?: ReactNode;
}