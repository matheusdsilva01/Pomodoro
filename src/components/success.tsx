interface SucessProps {
  btnAction: () => void;
}
const Sucess = ({ btnAction }: SucessProps) => {
  return (
    <div className="flex h-full flex-col ">
      <h3 className="mb-4 text-2xl font-bold text-zinc-700 dark:text-zinc-100">
        Parabéns! 🎉
      </h3>
      <span className="leading-6 text-zinc-500">
        Você chegou no fim de mais um cíclo dessa sessão!
      </span>
      <button
        onClick={btnAction}
        className="mt-auto w-full rounded bg-lime-500 p-3 text-zinc-50"
      >
        Iniciar: Foco
      </button>
    </div>
  );
};

export default Sucess;
