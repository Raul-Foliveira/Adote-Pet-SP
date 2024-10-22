// components/FeaturedAnimals.js
import { useRouter } from 'next/router';
import styles from '../styles/animals.module.css';

const FeaturedAnimals = () => {
    const router = useRouter();

    const animals = [
        {
            id: 1,
            nome: 'Rex',
            especie: 'Cão',
            idade: '2 anos',
            tamanho: 'Médio',
            imagem: '/images/jimmy.jpg',
            descricao: 'Rex é um cão muito amigável e brincalhão.',
        },
        {
            id: 2,
            nome: 'Mia',
            especie: 'Gato',
            idade: '1 ano',
            tamanho: 'Pequeno', 
            imagem: '/images/jimmy.jpg',
            descricao: 'Mia é uma gata muito carinhosa.',
        },
        {
            id: 3,
            nome: 'Jimmy',
            especie: 'Gato',
            idade: '3 anos',
            tamanho: 'Médio', 
            imagem: '/images/jimmy.jpg',
            descricao: 'Jimmy é um gato curioso e brincalhão.',
        },
    ];

    const handleAdoptClick = (id) => {
        router.push(`/pet/${id}`); // Verifique se a rota está correta
    };

    return (
        <section className={styles.featured}>
            <h2>Animais em Destaque</h2>
            <div className={styles.animalGrid}>
                {animals.map(animal => (
                    <div key={animal.id} className={styles.animalCard}>
                        <img src={animal.imagem} alt={animal.nome} />
                        <h3>{animal.nome}</h3>
                        <p>{animal.especie} - {animal.idade}</p>
                        <p>Tamanho: {animal.tamanho}</p>
                        <button onClick={() => handleAdoptClick(animal.id)}>Adotar</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedAnimals;
