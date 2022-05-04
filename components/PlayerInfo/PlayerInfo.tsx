import { PlayerInfoProps } from './PlayerInfo.props';
import styles from './PlayerInfo.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { Lvl } from '../Lvl/Lvl';
import { Card } from '../Card/Card';
import FistIcon from './fist.svg';
import BriefcaseIcon from './briefcase.svg';
import MedalIcon from './medal.svg';
import SuitcaseIcon from './suitcase.svg';
import TrophyIcon from './trophy.svg';
import WalletIcon from './wallet.svg';
import { P } from '../P/P';
import { Button } from '../Button/Button';


export const PlayerInfo = ({ children, className, ...props }: PlayerInfoProps): JSX.Element => {
    return (
        <Card className={styles.wrapper} >
            <div className={styles.infoBlock}>
                <FistIcon className={styles.icon} />
                <P size='m' className={styles.hidden}>Семья</P>
                <P size='l' className={styles.white}>Барбарики</P>
                <P size='m' className={styles.yellow}>3 чел.</P>
                <Button className={styles.open}> Открыть</Button>
            </div>
            <div className={styles.infoBlock}>
                <SuitcaseIcon className={styles.icon} />
                <P size='m' className={styles.hidden}>Организация</P>
                <P size='l' className={styles.white}>LSPD</P>
                <P size='m' className={styles.yellow}>Major</P>
                <Button className={styles.open}> Открыть</Button>
            </div>
            <div className={styles.infoBlock}>
                <BriefcaseIcon className={styles.icon} />
                <P size='m' className={styles.hidden}>Работ</P>
                <P size='l' className={styles.white}>Cluckin Bell</P>
                <P size='m' className={styles.yellow}>Обвальщик курицы</P>
                <Button className={styles.open}> Открыть</Button>
            </div>
            <div className={styles.infoBlock}>
                <WalletIcon className={styles.icon} />
                <P size='m' className={styles.hidden}>Бизнес</P>
                <P size='l' className={styles.white}>Магазин 24/7</P>
                <Button className={styles.open}> Открыть</Button>
            </div>
            <div className={styles.infoBlock}>
                <TrophyIcon className={styles.icon} />
                <P size='m' className={styles.hidden}>Достижения</P>
                <P size='l' className={styles.white}>Открыто 20/45</P>
                <Button className={styles.open}> Открыть</Button>
            </div>
            <div className={styles.infoBlock}>
                <MedalIcon className={styles.icon} />
                <P size='m' className={styles.hidden}>Квести и еж.задания</P>
                <P size='l' className={styles.white}>Встреча у дома</P>
                <P size='m' className={styles.yellow}>2 / 5</P>
                <Button className={styles.open}> Открыть</Button>
            </div>
        </Card>
    );
};
