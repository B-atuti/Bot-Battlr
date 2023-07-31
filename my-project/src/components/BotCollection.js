import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotCard from "./BotCard";

function BotCollection({ bots, handleClick, handleDelete }) {
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
    <div className="BotCollection">
      <div className="container">
        <div className="row">
          {displayCards}
        </div>
      </div>
    </div>
  );
}

export default BotCollection;
