import { Button, Card, Cars, Houses, Htag, Input, Lvl, PlayerInfo, PlayerProgress, Rating, Tag, Textarea } from '../components';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react';
import styles from './Home.module.css';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';



function Home({ children, className, ...props }: HomeProps): JSX.Element {


  const [rating, setRating] = useState<number>(4);

  return (
    <div className={styles.wrapper}>
      <PlayerProgress />
      <PlayerInfo />
      <div className={styles.property}>
        <Cars />
        <Houses />
      </div>
    </div>

  );
}

export default withLayout(Home);




interface HomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}