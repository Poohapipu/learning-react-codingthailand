
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <div className='logo'>
      <Logo />
      <Header />
      <Footer title='Goolgle' website='www.google.com' postcode={41000} />
    </div>
  );
}

export default App;
