import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotStats = props => {
  return (
    <div >
      <div >
        <div>
          <div >
            <img
              alt="oh no!"
              src={props.bot.avatar_url}
            />
          </div>
          <div >
            <h2>Name: {props.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.bot.catchphrase}
            </p>
            <strong>
              Class: {props.bot.bot_class}
              <i className={botTypeClasses[props.bot.bot_class]} />
            </strong>
            <br />
            <div >
              <div>
                <div >
                  <div>
                    <i />
                    <strong>{props.bot.health}</strong>
                  </div>
                  <div>
                    <i />
                    <strong>{props.bot.damage}</strong>
                  </div>
                  <div>
                    <i />
                    <strong>{props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button

              onClick={() =>
                console.log("connect this to a function that shows all bots")
              }
            >
              Go Back
            </button>
            <button
              onClick={() =>
                console.log(
                  "connect this to a function that adds this bot to your bot army list"
                )
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotStats;