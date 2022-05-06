import Footer from './Components/Footer';
import Header from './Components/Header';
import '../src/Styles/App.css';

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
              <p>Bem Vindo!</p>
              <p>alguem12@galoascience.com</p>
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
