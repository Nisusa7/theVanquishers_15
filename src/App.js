import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Body/Slider';
import DataProvider from './components/context/DataProvider';




function App() {
  return (
    <DataProvider>
      <Header />
      <Slider />
    </DataProvider>
  );
}

export default App;
