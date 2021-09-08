import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
