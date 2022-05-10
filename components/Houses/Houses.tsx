import { HousesProps } from './Houses.props';
import styles from './Houses.module.css';
import { Card } from '../Card/Card';
import HomeIcon from './home.svg';
import LocationIcon from './location.svg';
import { Divider } from '../Divider/Divider';

export interface IHouse {
    home: string,
    regnumber: string
}


export const Houses = ({ children, className, ...props }: HousesProps): JSX.Element => {
    const houses: IHouse[] = [
        { home: 'Семейный дом', regnumber: '777' },
        { home: 'Дом С класса', regnumber: '382' },
        { home: 'Дом А класса', regnumber: '453' },
        { home: 'Дом B класса', regnumber: '635' },
        { home: 'Дом F класса', regnumber: '756' },
        { home: 'Дом E класса', regnumber: '435' }
    ];

    return (
        <Card className={styles.wrapper} >
            <div className={styles.title}>
                <HomeIcon className={styles.icon} />
                <span>Дома</span>
            </div>
            <div className={styles.cars}>
                {houses && houses.map((h) => (
                    <div key={h.regnumber} className={styles.car}>
                        <LocationIcon className={styles.locIcon} />
                        <span className={styles.home}>{h.home}</span>
                        <Divider className={styles.divider} />
                        <span className={styles.regnumber}>#{h.regnumber}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};
