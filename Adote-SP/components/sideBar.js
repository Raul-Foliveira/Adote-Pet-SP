// components/Sidebar.js
import styles from '../styles/sidebar.module.css';
import { useRouter } from 'next/router';

const Sidebar = ({ onFilterChange }) => {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/'); // Rota do banner ou página principal
    };

    return (
        <div className={styles.sidebar}>
            <button className={styles.backButton} onClick={handleBackButtonClick}>
                Voltar a página inicial
            </button>
            <div className={styles.filterTitle}>
                <h3>Filtrar por:</h3>
                <button onClick={() => onFilterChange('idade')}>Ordenar por Idade</button>
                <button onClick={() => onFilterChange('especie')}>Ordenar por Espécie</button>
                <button onClick={() => onFilterChange('')}>Limpar Filtro</button>
            </div>
        </div>
    );
};

export default Sidebar;
