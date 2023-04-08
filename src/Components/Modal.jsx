/* eslint-disable indent */
function Modal(props) {
  return (
    <label className="modal-box" htmlFor="">
      <label
        htmlFor="my-modal-4"
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </label>
      <h3 className="text-lg font-bold">{props.pokeData.name}</h3>
      <div className="grid grid-cols-2">
        <div>
          <img
            className="object-contain w-[23rem] aspect-square"
            src={`https://www.coupcritique.fr/images/pokemons/${props.pokeData.name}.png`}
            alt={props.pokeData.name}
          />
          <div className="flex">
            type :{" "}
            <div className="types">
              {props.pokeData.types.map((type, index) => (
                <div key={index} className={`type ${type.type.name}`}>
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          Stats:
          {props.pokeData.stats.map((stat, index) => (
            <div className="flex my-2" key={index}>
              <div className="stat">
                {stat.stat.name} : {stat.base_stat}{" "}
              </div>
              <progress
                className={`progress ${
                  stat.base_stat < 50
                    ? "progress-v-low"
                    : stat.base_stat < 75
                    ? "progress-low"
                    : stat.base_stat < 100
                    ? "progress-medium"
                    : stat.base_stat < 125
                    ? "progress-high"
                    : "progress-v-high"
                } w-56`}
                value={stat.base_stat}
                max="255"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </label>
  );
}
export default Modal;
