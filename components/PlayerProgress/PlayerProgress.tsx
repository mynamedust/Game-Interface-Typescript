import { PlayerProgressProps } from './PlayerProgress.props';
import styles from './PlayerProgress.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { Lvl } from '../Lvl/Lvl';


export const PlayerProgress = ({ children, className, ...props }: PlayerProgressProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                <span>IVAN DUBROVSKY</span>
            </div>
            <Lvl lvl={3} xp={4} />
            <div className={styles.idAccount}>
                <div>
                    <span className={styles.id}>ID</span>
                    <span className={styles.playerId}>34</span>
                </div>
                <div>
                    <span className={styles.account}>ACCOUNT</span>
                    <span className={styles.playerAccount}>5754</span>
                </div>
            </div>
        </div>
    );
};
