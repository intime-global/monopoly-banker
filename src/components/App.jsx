import { GiBank, GiBanknote } from 'react-icons/gi';

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <GiBank className="size-128" />
      <GiBanknote className="size-32" />
    </div>
  );
}
