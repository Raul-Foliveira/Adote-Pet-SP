// components/AvailableAnimals.js
import styles from '../styles/animals.module.css';

const AvailableAnimals = ({ animals }) => {
    return (
        <section className={styles.featured}>
            <h2>Animais Disponíveis para Adoção</h2>
            <div className={styles.animalGrid}>
                {animals.map(animal => (
                    <div key={animal.id} className={styles.animalCard}>
                        <img src={animal.imagem} alt={animal.nome} />
                        <h3>{animal.nome}</h3>
                        <p>{animal.especie} - {animal.idade}</p>
                        <button>Adotar</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AvailableAnimals;
