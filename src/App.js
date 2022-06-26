import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Body/Slider';
import DataProvider from './components/context/DataProvider';
import ProductDisplay from './components/Body/ProductsDisplay';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Slider />
      </DataProvider>
      <ProductDisplay />
      <Footer/>
    </>
  );
}

export default App;
