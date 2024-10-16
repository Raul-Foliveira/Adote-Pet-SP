// components/FeaturedAnimals.js
import styles from '../styles/animals.module.css';

const FeaturedAnimals = () => {
  const animals = [
    {
      id: 1,
      nome: 'Rex',
      especie: 'Cão',
      idade: '2 anos',
      tamanho: 'Médio',
      imagem: 'images/jimmy.jpg',
    },
    {
      id: 2,
      nome: 'Mia',
      especie: 'Gato',
      idade: '1 ano',
      tamanho: 'Pequeno', 
      imagem: 'images/jimmy.jpg',
    },
    {
      id: 3,
      nome: 'Mia',
      especie: 'Gato',
      idade: '1 ano',
      tamanho: 'Pequeno', 
      imagem: 'images/jimmy.jpg',
    },
    
  ];

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
            <button>Adotar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAnimals;
