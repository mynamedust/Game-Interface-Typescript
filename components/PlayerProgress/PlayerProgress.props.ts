import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PlayerProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}