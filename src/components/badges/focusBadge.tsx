import BrainIcon from "/assets/icons/brain.svg";

const FocusBadge = () => {
  return (
    <div className="my-auto flex gap-2 rounded border border-lime-500 bg-lime-500/10 px-2 py-1 font-semibold text-lime-500">
      <img src={BrainIcon} />
      Foco
    </div>
  );
};

export default FocusBadge;
