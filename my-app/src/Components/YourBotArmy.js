import React from "react";
import BotCard from "./BotCard";

class YourBotArmy extends React.Component {
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
		})
  }
  
  render(){
    return (
      <div  id="mybotarmy">
        <div>
          <div>
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
