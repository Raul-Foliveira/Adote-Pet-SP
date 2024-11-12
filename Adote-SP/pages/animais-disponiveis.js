// pages/animals.js
import { useState } from 'react';
import AvailableAnimals from '../components/availableAnimals';
import Sidebar from '../components/sideBar';
import styles from '../styles/animais-disponiveis.module.css';

const animalsData = [
    { id: 4, nome: 'Bolt', especie: 'Cão', idade: '3 anos', imagem: '/images/jimmy.jpg' },
    { id: 5, nome: 'Luna', especie: 'Gato', idade: '2 anos', imagem: '/images/jimmy.jpg' },
    { id: 6, nome: 'Bella', especie: 'Cão', idade: '5 anos', imagem: '/images/jimmy.jpg'},
    { id: 7, nome: 'Jimmy', especie: 'Gato', idade: '11 anos', imagem: '/images/jimmy.jpg' },
    { id: 8, nome: 'Rex', especie: 'Cão', idade: '9 anos', imagem: '/images/jimmy.jpg' },
    
];

const AnimalsPage = () => {
    const [filteredAnimals, setFilteredAnimals] = useState(animalsData);

    const handleFilterChange = (criteria) => {
        let sortedAnimals = [...animalsData];  // Usar sempre o array original para evitar duplicações
        if (criteria === 'idade') {
            sortedAnimals.sort((a, b) => parseInt(a.idade) - parseInt(b.idade));
        } else if (criteria === 'especie') {
            sortedAnimals.sort((a, b) => a.especie.localeCompare(b.especie));
        }
        setFilteredAnimals(sortedAnimals); // Atualiza o estado com o array ordenado
    };

    return (
        <div className={styles.animalsPage}>
            <Sidebar onFilterChange={handleFilterChange} />
            <AvailableAnimals animals={filteredAnimals} />
        </div>
    );
};

export default AnimalsPage;
