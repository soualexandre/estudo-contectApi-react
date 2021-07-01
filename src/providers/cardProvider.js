import React, { useState } from "react";

export const CardContext = React.createContext({});
export const CardProvider = (props) => {
    const [card, setCard] = useState({
        numero: "",
    })
  return (
    <CardContext.Provider value={{ card, setCard}}>
      {props.children}
    </CardContext.Provider>
  );
};
