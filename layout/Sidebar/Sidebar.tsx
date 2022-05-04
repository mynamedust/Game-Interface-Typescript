import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../../components/Menu/Menu';
import Logo from '../logo.svg'
import { Search } from '../../components';


export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <Search />
            <Menu />
        </div>
    );
};
