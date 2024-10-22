// components/PetDetails.jsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PetDetails.module.css';

const PetDetails = ({ pet }) => {
    const router = useRouter();

    const handleAdoptClick = () => {
        // Redireciona para a página de detalhes do pet
        router.push(`/pet/${pet.id}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{pet.nome}</h2>
            <img src={pet.imagem} alt={pet.nome} className={styles.image} />
            <p className={styles.description}><strong>Espécie:</strong> {pet.especie}</p>
            <p className={styles.description}><strong>Idade:</strong> {pet.idade}</p>
            <p className={styles.description}><strong>Tamanho:</strong> {pet.tamanho}</p>
            <p className={styles.description}><strong>Descrição:</strong> {pet.descricao}</p>
            <button className={styles.adoptButton} onClick={handleAdoptClick}>Adotar</button>
        </div>
    );
};

export default PetDetails;
