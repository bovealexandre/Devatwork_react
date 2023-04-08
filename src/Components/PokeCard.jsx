function PokeCard(props) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 my-2">
      <figure>
        <img
          className="object-contain w-[23rem] aspect-square"
          src={`https://www.coupcritique.fr/images/pokemons/${props.poke.name}.png`}
          alt={props.poke.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.poke.name}</h2>
        <div className="card-actions justify-end">
          <label
            htmlFor="my-modal-4"
            className="btn btn-primary"
            onClick={() => {
              props.setPokeUrl(
                `https://pokeapi.co/api/v2/pokemon/${props.poke.name}`
              );
            }}
          >
            More Info
          </label>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
