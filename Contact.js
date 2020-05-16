import React, {useContext} from 'react';
import {useStateCustom} from './useStateCustom';
import {LangContext} from './App'


const Contact = () => {
     const dictionary = useContext(LangContext);

  // const [test, setTest] = useStateCustom({value: 'value'}); 
  
  return <div>{dictionary.contactText}</div>
}

export default Contact;