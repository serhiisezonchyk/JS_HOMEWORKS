import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className='vh-100'>
      <section className='container'>
        <Carousel images={['/images/first.png','/images/second.png','/images/third.png']} />
      </section>
    </div>
  );
}

export default App;
