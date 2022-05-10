import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HousesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}