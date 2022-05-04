import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';


export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className)}
            {...props}
        >
            {children}
        </button>
    );
};