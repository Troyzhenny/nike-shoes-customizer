import Header from "./components/Header";
import SelectionScreen from "./components/SelectionScreen";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen theme:light">
        <Header />
        <SelectionScreen />
      </main>
    </>
  );
}
