import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PlayerInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}