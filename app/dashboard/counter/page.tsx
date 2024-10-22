import { Counter } from "@/app/shoping-car/counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Counter",
  description: "Counter description",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full qw">
      <span>Productos en el carrito</span>
      <Counter></Counter>
    </div>
  );
}
