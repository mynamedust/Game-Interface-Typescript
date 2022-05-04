import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import { Menu } from '../../components/Menu/Menu';
import { P } from '../../components/P/P';
import ArrowIcon from './arrow.svg';
import MoneyIcon from './money.svg';
import GoldIcon from './gold.svg';



export const Header = ({ children, className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.header} {...props}>
            <Menu />
            <div className={styles.balance}>
                <P size='m'>Ваш баланс: </P>
                <P size='m' className={styles.count}>0 <GoldIcon className={styles.icon} /></P>
                <P className={styles.topup}>Пополнить баланс <ArrowIcon className={styles.arrow} /></P>
                <P className={styles.count}>10 427 930 <MoneyIcon className={styles.icon} /></P>
            </div>
        </div>
    );
};
