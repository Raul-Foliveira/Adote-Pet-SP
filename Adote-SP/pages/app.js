import '@/styles/globals.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeaturedAnimals from './components/FeaturedAnimals';
import PetDetails from './components/PetDetails';


const App = () => {
    const animals = [
        {
            id: 1,
            nome: 'Rex',
            especie: 'Cão',
            idade: '2 anos',
            tamanho: 'Médio',
            imagem: 'images/jimmy.jpg',
            descricao: 'Rex é um cão muito amigável e brincalhão.',
        },
        {
            id: 2,
            nome: 'Mia',
            especie: 'Gato',
            idade: '1 ano',
            tamanho: 'Pequeno', 
            imagem: 'images/jimmy.jpg',
            descricao: 'Mia é uma gata muito carinhosa.',
        },
        {
            id: 3,
            nome: 'Jimmy',
            especie: 'Gato',
            idade: '3 anos',
            tamanho: 'Médio', 
            imagem: 'images/jimmy.jpg',
            descricao: 'Jimmy é um gato curioso e brincalhão.',
        },
    ];

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={FeaturedAnimals} />
                <Route path="/pet/:id" render={({ match }) => {
                    const pet = animals.find(animal => animal.id === parseInt(match.params.id));
                    return pet ? <PetDetails pet={pet} /> : <div>Pet não encontrado</div>;
                }} />
            </Switch>
        </Router>
    );
};

export default App;

