import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';
import { route } from 'next/dist/server/router';




export const Menu = (): JSX.Element => {
    /* const { menu, setMenu, firstCategory } = useContext(AppContext); */
    const router = useRouter();
    const headerMenu: string[] = ['Главная', 'Квесты', 'Магазин', 'Рефералы', 'Поддержка', 'Настройки'];

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05
            }
        },
        hidden: {
            marginBottom: 0
        }
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            maxHeight: 48
        },
        hidden: {
            opacity: 0,
            maxHeight: 0
        }
    };





    const buildFirstLevel = (menu: any) => {
        return (
            menu.map(m => (
                <a className={styles.firstLevel}>{m}</a>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel(headerMenu)}
        </div>
    );
};
