import Footer from './Components/Footer';
import '../src/Styles/App.css';


import SideMenu from './Components/SideMenu';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        <SideMenu />
        <Header />

        <main className="main">
        </main>
        <Footer />
    </div>
  );
}

export default App;
