import React, { Component } from "react";
import BotCard from './BotCard';

class BotCollection extends Component {

  renderBotCards = (botsCollection) => {
    return (
      botsCollection.map((bot, index) => <BotCard key={index} addOrRemoveBot={this.props.addBotToArmy} bot={bot} removeBotFromAll={this.props.removeBotFromAll} />)
    )
  }

  render() {
    return (
      <div>
        <div>
          Bots
          <br />
          {this.renderBotCards(this.props.botsCollection)}  
        </div>
      </div>
    );
  }
}
export default BotCollection;