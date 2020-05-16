import React, {useContext, createContext, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

import Nav from './Nav';

export const dictionaries = {
  pl: {
    navText: ['Strona Główna', 'O mnie', 'Kontakt'],
    homePageText: "Tekst na stronie głównej",
    aboutText: "Tekst o mnie",
    contactText: "Tekst o kontakcie"

  },
  en: {
    navText: ['Home', 'About', 'Contact'],
    homePageText: "Homepage Text",
    aboutText: "Text about me",
    contactText: "Contact text"
  },
};

export const LangContext = createContext();

const App = () => {
    const [lang, setLang] = useState('en');

    return (
      <div>
        <BrowserRouter>
        <LangContext.Provider value={dictionaries[lang]}>
        <Nav />
            <div>
        <span onClick={() => setLang('en')}>en</span> |{' '}
        <span onClick={() => setLang('pl')}>pl</span>
      </div>
          <section>
  
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </section>
                </LangContext.Provider>

        </BrowserRouter>
      </div>
    );
}

export default App;