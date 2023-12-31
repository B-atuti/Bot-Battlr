import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
function BotsPage() {
  const [bots,setBots]=useState([])
//API data fetch
useEffect(()=>{
  fetch("https://bot-data-5gxj.onrender.com/bots")
		.then((res) => res.json())
		.then((data) => setBots(data));
},[])
const updateBot=(id)=>{
  {
    setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:true} : bot))
  }
}
const removeBot= (id)=>{
  {
    setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:false} : bot))
  }
}
const deleteBot=(id) => {
  fetch(`https://bot-data-5gxj.onrender.com/bots/${id}`, {
		method: "DELETE",
	}).then(() =>
		setBots((previousData) => previousData.filter((bot) => bot.id !== id))
	);
}
return (
	<div>
		<h1> Bot Battlr </h1>
		<YourBotArmy
			bots={bots.filter((bot) => bot.isAdded)}
			handleClick={removeBot}
			handleDelete={deleteBot}
		/>
		<BotCollection
			bots={bots}
			handleClick={updateBot}
			handleDelete={deleteBot}
		/>
	</div>
);
}
export default BotsPage;