import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import { Menu } from '../../components/Menu/Menu';


export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.header} {...props}>
            <Menu />
        </div>
    );
};
