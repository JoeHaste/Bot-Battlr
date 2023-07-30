import React from "react";
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};
const BotCard = props => {
  return (
    <div>
      <div
        key={props.bot.id}
        id={props.bot.id}
        onClick={(e) => props.addOrRemoveBot(e)}
      >
        <div className="image">
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div >
        <div >
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
        </div>
        <div>
            {props.bot.catchphrase}
          </div>
        </div>
        <div>
          <li>
           Health: {props.bot.health}
          </li>
          <li>
           Damage: {props.bot.damage}
          </li>
          <li>
           Armor: {props.bot.armor}
          </li>
            <div>
              <button
                id={props.bot.id}
                onClick={(e) => props.removeBotFromAll(e)}
              >
                x
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default BotCard;