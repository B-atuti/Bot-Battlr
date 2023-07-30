import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, handleDelete}) {
  const displayCards=bots.map(bot=>{
    return<BotCard key={bot.id} 
    bot={bot}
    handleClick={handleClick}
    handleDelete={handleDelete}
    />})

  return (
    <div className="">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        
          {displayCards}

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;