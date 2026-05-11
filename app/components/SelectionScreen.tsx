import SelectionCard from "./ui/SelectionCard";
import aj1 from "@/public/aj1.png";
import af1 from "@/public/af1.png";

const cardData = [{ image: aj1 }, { image: af1, background: "bg-linear-to-br from-amber-200 to-amber-800" }];

export default function SelectionScreen() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex w-full h-full items-center justify-center gap-28">
        {cardData.map((card, i) => (
          <SelectionCard key={i} image={card.image} background={card.background} />
        ))}
      </div>
      <div className="flex flex-col items-center w-full pb-5">
        <h2 className="font-semibold">CHOOSE YOUR STYLE</h2>
        <h2 className="text-sm font-light">(Just Do It)</h2>
      </div>
    </div>
  );
}