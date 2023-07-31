import React from "react";

const BotSpecs = props => {
  let { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i/>;
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
      <div>
        <div>
          <div>
            <img
              alt="oh no!"
              src={bot.avatar_url}
            />
          </div>
          <div>
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botType}
            </strong>
            <br />
            <div>
              <div>
                <div>
                  <div >
                    <strong> Health: {bot.health}</strong>
                  </div>
                  <div>
                    <strong> Damage: {bot.damage}</strong>
                  </div>
                  <div>
                    <strong> Armor: {bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => props.clearSpec()}
            >
              Go Back
            </button>
            <button
              onClick={() =>props.addBot(bot)}
            >
              {bot.owned ? "Remove From Army" : "Enlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BotSpecs;
