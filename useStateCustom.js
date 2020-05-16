import { useState } from 'react';

// moj customowy hook setState sklejajacy stan
export const useStateCustom = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateState = (value) => {
    // {name: 'Jane Doe'}
    setState({ ...state, ...value });
  };

  return [state, updateState];
};