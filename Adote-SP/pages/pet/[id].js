// pages/pet/[id].js
import { useRouter } from 'next/router';
import PetDetails from '../../components/PetDetails';

const PetPage = () => {
    const router = useRouter();
    const { id } = router.query;

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

    const pet = animals.find(animal => animal.id === parseInt(id));

    if (!pet) return <div>Pet não encontrado</div>;

    return <PetDetails pet={pet} />;
};

export default PetPage;
