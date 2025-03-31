import Subheading from "./Subheading";
interface balanceInt {
  value: string;
}
function Balance({ value }: balanceInt) {
  return (
    <div className="flex gap-4">
      <Subheading className="font-semibold">Balance:</Subheading>
      <Subheading>{value}</Subheading>
    </div>
  );
}

export default Balance;
