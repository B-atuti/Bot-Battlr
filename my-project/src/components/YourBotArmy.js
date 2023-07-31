import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotCard from "./BotCard";

function YourBotArmy({ bots, handleClick, handleDelete }) {
  const displayCards = bots.map(bot => (
    <div key={bot.id} className="col-md-3 mb-4">
      <BotCard
        bot={bot}
        handleClick={handleClick}
        handleDelete={() => handleDelete(bot.id)}
      />
    </div>
  ));

  return (
    <div className="YourBotArmy bg-brown"> 
      <div className="container"> 
        <h2>YourBotArmy</h2>
        <div className="d-flex flex-wrap">
          {displayCards}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
