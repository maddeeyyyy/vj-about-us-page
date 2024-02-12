import { useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init();
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
