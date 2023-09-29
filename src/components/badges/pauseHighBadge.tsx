import CupCoffeeIcon from "/assets/icons/cupCoffee.svg";

const PauseHighBadge = () => {
  return (
    <div className="my-auto flex gap-2 rounded border border-cyan-500 bg-cyan-500/10 px-2 py-1 font-semibold text-cyan-500">
      <img src={CupCoffeeIcon} />
      Pausa Longa
    </div>
  );
};

export default PauseHighBadge;
