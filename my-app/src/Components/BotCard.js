import React from "react";

const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i />;
      break;
    case "Defender":
      botType = <i/>;
      break;
    case "Support":
      botType = <i/>;
      break;
    default:
      botType = <div />;
  }

  return (
    <div>
      <div
        key={bot.id}
        onClick={() => props.addBot(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="Content">
          <div >
            name: {bot.name} {botType}
          </div>

          <div >
           catchphrase:  <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extracontent">
          <li>
            health:  {bot.health}
          </li>

          <li>
           damage: {bot.damage}
          </li>
          <li>
          armor:  {bot.armor}
          </li>
        </div>
      </div>
    </div>
  );

};

export default BotCard;