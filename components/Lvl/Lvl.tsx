import { LvlProps } from './Lvl.props';
import styles from './Lvl.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { P } from '../P/P';
import PointIcon from './point.svg';


export const Lvl = ({ children, className, ...props }: LvlProps): JSX.Element => {
    return (
        <div className={styles.lvlBlock}>
            <div className={styles.lvlCount}>
                <P className={styles.lvl}>lvl</P>
                <P className={styles.lvlNumber}>{props.lvl}</P>
            </div>
            <div className={styles.xp}>
                <span className={styles.xpNumberMin}>{props.xp}</span>
                <div className={styles.xpProgress}>
                    <div className={styles.xpProgressPink}>
                        <PointIcon className={styles.point} />
                    </div>

                </div>
                <span className={styles.xpNumberMax}>12</span>
            </div>
        </div>
    );
};
