import CupCoffeeIcon from "/assets/icons/cupCoffeeAmber.svg";

const PauseHighBadge = () => {
  return (
    <div className="my-auto flex gap-2 rounded border border-amber-500 bg-amber-500/10 px-2 py-1 font-semibold text-amber-500">
      <img src={CupCoffeeIcon} />
      Pausa Curta
    </div>
  );
};

export default PauseHighBadge;
