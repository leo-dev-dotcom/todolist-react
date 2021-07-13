import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './components/Heading';
import Playing from './components/Playing';
import Coding from './components/Coding';
import Movies from './components/Movies';
import Cooking from './components/Cooking';
import Bill from './components/Bill';

function App() {
  return (
    <div className='container my-5'>
      <div className="row">
        <Heading />
      </div>
      <div className="row text-center">
        <div className="col">
          <Playing />
          <Coding />
          <Movies />
        </div>
        <div className="col">
          <Cooking />
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default App;
