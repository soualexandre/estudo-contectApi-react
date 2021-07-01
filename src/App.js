import React from "react";
import {useAuth } from "./providers/auth";
import Profile from "./components/profile";
import { CardContext } from "./providers/cardProvider";

function App() {
  const { user, setUser } = useAuth();
  const {card, setCard } = React.useContext(CardContext);
  console.log(card.vencimento)
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{card.numero}</h1>
      <h1>{card.vencimento}</h1>
      <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
      <input type="text" onChange={(e) => setCard({ numero: e.target.value })} />
      <Profile />
    </div>
  );
}

export default App;
