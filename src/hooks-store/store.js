import { useState, useEffect } from "react";

let globalState = {};
let listeners = []; //will run when an component updates, that imports this
let actions = {}; //hook and its data is shared with imported components

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];
  const dispatch = (actionIdentifier, payload) => {
    //action identifier is here used as a key
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    //will run when said component mounts not all the time
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      //cleanup function for the listener
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]); //one dependancy that never changes

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    //if initial state is not null
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
  //similar to useReducer(not suitable for managing state globally)
  //this custom is suitable for managing state across multiple components.
};
//each component uses its own data
//where this component is imported
