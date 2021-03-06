import React from 'react';
import './App.css';
import GoogleMapsComponent from "./GoogleMapsComponent";
import SearchBarComponent from "./SearchBarComponent";
import RegisterButtonComponent from "./RegisterButtonComponent";
import Footer from "./Footer";

function App() {
  return (
            <div>
                <GoogleMapsComponent />


      <div className="App">
            <p>
                <h1>Finde Drive-In Supermärke in deiner Umgebung!</h1>
                <SearchBarComponent />
                <RegisterButtonComponent textButton="Als Store registrieren" textRegistered="Du bist jetzt als Store registriert."/>
                <RegisterButtonComponent textButton="Als KundIn registrieren" textRegistered="Du bist jetzt als KundIn registriert."/>
                <Footer />

            </p>
        </div>
        </div>
  );
}

export default App;
