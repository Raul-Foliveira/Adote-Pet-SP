import { useRouter } from 'next/router';
import styles from '../styles/banner.module.css';

const Banner = () => {

    return (
        <section className={styles.banner}>
            <h1>Encontre seu novo melhor amigo</h1>
            <p>Adote cães e gatos em São Paulo e dê um lar cheio de amor.</p>
            <button>Ver Animais Disponíveis</button>
        </section>
    );
};

export default Banner;
