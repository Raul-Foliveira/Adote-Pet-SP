import Head from 'next/head';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import SearchBar from '../components/searchBar';
import FeaturedAnimals from '../components/featuredAnimals';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import WhyAdoption from '../components/WhyAdoption';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Patas Unidas - Encontre seu novo melhor amigo</title>
        <meta name="description" content="Conectando abrigos de animais com pessoas interessadas em adotar cães e gatos em São Paulo." />
      </Head>

      <Navbar/>
      <Banner/>
      <SearchBar/>
      <FeaturedAnimals/>
      <Testimonials/>
      <WhyAdoption/>
      <Footer/>
      
    </div>
  );
}
