import { CarsProps } from './Cars.props';
import styles from './Cars.module.css';
import { Card } from '../Card/Card';
import CarIcon from './car.svg';
import LocationIcon from './location.svg';
import { Divider } from '../Divider/Divider';

export interface ICar {
    model: string,
    regnumber: string,
    status: string
}


export const Cars = ({ children, className, ...props }: CarsProps): JSX.Element => {
    const cars: ICar[] = [
        { model: 'Ferrari La Ferrari', regnumber: 'NY555NY', status: 'Уничтожен' },
        { model: 'Lamborgini Diablo', regnumber: 'ES666SE', status: 'В гараже' },
        { model: 'Dodge Challenger', regnumber: 'GG414GG', status: 'В гараже' },
        { model: 'BMW X5', regnumber: 'MW777MW', status: 'Уничтожен' },
        { model: 'Dodge Challenger', regnumber: 'GG414GG', status: 'В гараже' },
        { model: 'Dodge Challenger', regnumber: 'GG414GG', status: 'В гараже' },
        { model: 'Dodge Challenger', regnumber: 'GG414GG', status: 'В гараже' },
        { model: 'Dodge Challenger', regnumber: 'GG414GG', status: 'В гараже' },];

    return (
        <Card className={styles.wrapper} >
            <div className={styles.title}>
                <CarIcon className={styles.icon} />
                <span>Автомобили</span>
            </div>
            <div className={styles.cars}>
                {cars && cars.map((c) => (
                    <div key={c.regnumber} className={styles.car}>
                        <LocationIcon className={styles.locIcon} />
                        <span className={styles.model}>{c.model}</span>
                        <Divider className={styles.divider} />
                        <span className={styles.regnumber}>{c.regnumber}</span>
                        <span className={styles.status}>{c.status}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};
