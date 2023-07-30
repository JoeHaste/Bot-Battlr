import React, { Component } from "react";
import BotCard from './BotCard';

class YourBotArmy extends Component {
  renderBotArmy = botArmyCollection => {

    return(
      botArmyCollection.map((bot, index) => <BotCard key={index} bot={bot} addOrRemoveBot={this.props.removeBotFromArmy} removeBotFromAll={this.props.removeBotFromAll} />)
    )
  }

  render() {
    return (
      <div>
        <div >
          <div >
            Your Bot Army
            <br />
            {this.renderBotArmy(this.props.botArmyCollection)}
          </div>
        </div>
      </div>
    );
  }
}
export default YourBotArmy;