import { useState } from "react";

import RocketIcon from "/assets/icons/rocket.svg";
var id = 0;
const initalTodos = [
  {
    id: id++,
    text: "Escrever e-mail importante.",
    completed: false
  },
  {
    id: id++,
    text: "Ler um capítulo de um livro.",
    completed: false
  },
  {
    id: id++,
    text: "Fazer uma caminhada.",
    completed: false
  },
  {
    id: id++,
    text: "Montar um quebra-cabeça.",
    completed: false
  }
];

const SessionTodos = () => {
  const [todos, setTodos] = useState(initalTodos);

  function createTodo(todo: string) {
    setTodos(oldState => [
      ...oldState,
      { id: id++, text: todo, completed: false }
    ]);
  }
  function completeTodo(id: number) {
    setTodos(oldState =>
      oldState.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div className="flex h-full min-h-[594px] w-full flex-col justify-between rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <div>
        <div className="mb-6 flex justify-between">
          <div>
            <h2 className="mb-1 text-2xl font-bold leading-7 text-zinc-600 dark:text-zinc-400">
              Lista de tarefas
            </h2>
            <span className="leading-5 text-zinc-500">
              Seus objetivos para essa sessão
            </span>
          </div>
          <img
            className="my-auto block flex-none"
            src={RocketIcon}
            alt="timer icon"
          />
        </div>
        <hr className="border-zinc-200 dark:border-zinc-800" />
        {/* 421px */}
        <ul className="flex h-[421px] flex-col gap-4 overflow-auto py-6">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`text-zinc-500 ${
                todo.completed ? "line-through" : ""
              }`}
            >
              <input
                className="h-5 w-5 rounded-md border border-zinc-200 bg-zinc-100 text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-700"
                type="checkbox"
                id={todo.id.toString()}
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}
              />
              <label className="ml-2" htmlFor={todo.id.toString()}>
                {todo.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Input createTodo={createTodo} />
    </div>
  );
};
interface InputProps {
  createTodo: (todo: string) => void;
}
const Input = ({ createTodo }: InputProps) => {
  const [text, setText] = useState("");
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(text);
  }

  return (
    <form onSubmit={submitForm} className="flex">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        type="text"
        placeholder="Nova tarefa"
        className="w-full rounded bg-zinc-100 text-zinc-600 placeholder:text-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-600"
      />
      <button
        className="ml-3 rounded bg-lime-500 px-3 py-2 text-sm leading-6 text-zinc-50 disabled:bg-lime-700 disabled:text-zinc-300"
        disabled={!text}
        type="submit"
      >
        Adicionar
      </button>
    </form>
  );
};
export default SessionTodos;
