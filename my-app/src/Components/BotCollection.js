import React from "react";
import BotCard from "./BotCard";

class BotCollection extends React.Component {
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
		})
	}

  render(){
  	return (
  	  <div>
    		<div>
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;