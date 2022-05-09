import Footer from './Components/Footer';
import '../src/Styles/App.css';


import SideMenu from './Components/SideMenu';
import Header from './Components/Header';
import DetailCard from './Components/DetailCard';
import Overview from './Components/Overview';

function App() {
  return (
    <div className="App">
        <SideMenu />
        <Header />

        <main className="main">
          <section className="first-sec">
            <div className="title-and-video">
              <p className="p-title">
              Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP 
              </p>
              <iframe
                className='video'
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/OoKhpnDuc4k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
              </iframe>

            </div>

            <div className="btns-and-details">
              <div>
                <button className="first-sec-btn">Download</button>
                <button className="first-sec-btn">Star</button>
                <button className="first-sec-btn">Icon</button>

                <p className="how-to-quote">COMO CITAR ESSE TRABALHO?</p>
              </div>

              <DetailCard />
            </div>
          </section>

          <section>
            <Overview />
          </section>

        <Footer />
        </main>
    </div>
  );
}

export default App;
