import Footer from './Components/Footer';
import Header from './Components/Header';
import '../src/Styles/App.css';
import DetailCard from './Components/DetailCard';

function App() {
  return (
    <div className="App">
      <div className="side-header">
        <Header />
      </div>
      <div className="side-content">
        <div className="top-header">
          <div className="top-title">
            <p>
              Anais do Simpósio Latino Americano de Ciências de Alimentos
            </p>
            <h5>
            Anais do 13 Simpósio Latino Americano de Ciências de Alimentos
            </h5>
            <p>
              ISSN: 1234-5678
            </p>
          </div>


          <select className="select-header">
            <option>
              🌐 PT, BR
            </option>
            <option>
              🌐 EN, US
            </option>
            <option>
              🌐 EN, UK
            </option>
          </select>

          <div className="user-info-header">
            <div className="message-with-email">
              <p className="message">Bem Vindo!</p>
              <p className="message">alguem12@galoascience.com</p>
            </div>
            <div className="profile">
              <img
                src="https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM="
                alt="Profile Pic"
                className="profile-pic"
              />
            </div>            
          </div>
        </div>

        <p className="video-title">
        Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP 
        </p>

        <button>
          Download
        </button>
        <button>
        ❤️
        </button>
        <button>
        ✨
        </button>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZoAFngyIuZY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <DetailCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
