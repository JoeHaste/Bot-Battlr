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
        onClick={() => console.log("add code to connect event listener")}
      >
        <div>
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div>
          <div>
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div>
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div>
          <span>
            <i  />
            {props.bot.health}
          </span>

          <span>
            <i/>
            {props.bot.damage}
          </span>
          <span>
            <i />
            {props.bot.armor}
          </span>
          <span>
            <div>
              <button
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;