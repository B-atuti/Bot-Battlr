import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHeartBeats, GiThunderball, GiShield, GiAmbulance, GiMagicShield, GiAlliedStar, GiMedal } from 'react-icons/gi'; // Importing the required icons from react-icons

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="BotCard card bg-light border rounded shadow-sm mb-4">
      <div className="ui cards" key={bot.id} onClick={() => handleClick(bot.id)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            {botTypeClasses[bot.bot_class] === 'icon military' && <GiMedal className="icon" />}
            {botTypeClasses[bot.bot_class] === 'icon shield' && <GiShield className="icon" />}
            {botTypeClasses[bot.bot_class] === 'icon plus circle' &&  <GiThunderball className="icon" />}
            {botTypeClasses[bot.bot_class] === 'icon ambulance' &&  <GiAmbulance className="icon" />}
            {botTypeClasses[bot.bot_class] === 'icon magic' &&  <GiMagicShield className="icon" />}
            {botTypeClasses[bot.bot_class] === 'icon star' &&  <GiAlliedStar className="icon" />}
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <GiHeartBeats className="icon" />
            {bot.health}
          </span>
          <span>
            <GiThunderball className="icon" />
            {bot.damage}
          </span>
          <span>
            <GiShield className="icon" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(bot.id);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
