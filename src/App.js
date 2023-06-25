
import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
 return( <>
  <div className='main'>
  <Header/>
  <div className='contentofpage'>
    <Sidebar/>
  <MainContent/>
  
  
  </div>
  
  
  </div>
  </>)
}

export default App;
