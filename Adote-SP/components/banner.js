import { useRouter } from 'next/router';
import styles from '../styles/banner.module.css';

const Banner = () => {

    return (
        <section className={styles.banner}>  
            <div className={styles.bannerText}>
                <h1>Encontre seu novo <strong>melhor amigo</strong></h1>
                <h2>Adote cães e gatos em São Paulo e dê um lar cheio de amor.</h2>
                <p>Faça a diferença Adotar é transformar vidas — tanto a sua quanto a deles!</p>
                <p >Quando você adota, não está apenas salvando um animal,</p> 
                <p>mas está enriquecendo sua vida com lealdade e amor incondicional.</p>
                <p >Eles são companheiros, guardiões e trazem alegria para o seu lar.</p> 
                <p>Ao adotar, você dá ao seu novo amigo a oportunidade de ter um lar cheio de carinho e cuidado.</p>
            </div>
            <button>Ver Animais Disponíveis</button>
        </section>
    );
};

export default Banner;
