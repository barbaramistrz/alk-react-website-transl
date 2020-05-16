import React, {createContext, useContext} from 'react';
import {useStateCustom} from './useStateCustom';
import {LangContext} from './App'




const Home = () => {
   const dictionary = useContext(LangContext);

  // const [text, setText] = useStateCustom({value: 'To jest moj tekst.'}); 

  return <div>{dictionary.homePageText}</div>;
}

export default Home;
