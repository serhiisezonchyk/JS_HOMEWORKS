import './App.css';
import Collapse from './components/Collapse';

function App() {
  const text = 'collapse me';

  return (
    <div className='vh-100'>
      <div className='container'>
        <Collapse text={text} opened={false} btnText='Click me' />
      </div>
    </div>
  );
}

export default App;
