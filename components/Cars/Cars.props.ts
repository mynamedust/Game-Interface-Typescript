import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CarsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}