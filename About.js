import React, {useContext} from 'react';
import {LangContext} from './App'
 
const About = () => {
  const dictionary = useContext(LangContext)
  return <div>{dictionary.aboutText}</div>
}

export default About;