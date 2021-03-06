
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Home />
      </div>
   </div>     
  );
}

export default App;
