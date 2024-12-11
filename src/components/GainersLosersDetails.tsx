import StockDownIcon from "./icons/StockDownIcon";
import StockUpIcon from "./icons/StockUpIcon";

const updownbox = (change: string) => {
  const isNegative = change.startsWith("-");
  const value = change.split("(")[1].replace(")", "");
  const textColor = isNegative ? "text-red-500" : "text-emerald-500";
  const bgColor = isNegative ? "bg-red-500/10" : "bg-emerald-500/10";

  return (
    <div
      className={`${textColor} ${bgColor} flex items-center gap-1 px-4 py-1 rounded-full text-xs font-semibold`}
    >
      {value}
      {isNegative ? <StockDownIcon /> : <StockUpIcon />}
    </div>
  );
};

export interface GainersLosersChartTypes {
  data: Array<{
    index: string;
    volume: string;
    change: string;
    currentValue: string;
  }>;
  title: string;
}

export default function GainersLosersDetails({
  data,
  title,
}: GainersLosersChartTypes) {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">{title}</h2>
      <hr className="bg-amber-500 w-full h-1 rounded-full mb-10" />
      <table className="w-full">
        <thead className="text-gray-500 text-base font-medium text-center">
          <tr>
            <td>Stocks</td>
            <td>Volume</td>
            <td>Change (%)</td>
            <td>Current Value</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index} className="text-center">
                <td className="flex flex-col gap-1 uppercase py-2">
                  <span className="text-gray-900 text-sm font-medium">
                    {row.index}
                  </span>
                </td>
                <td className="py-2 text-gray-900 text-base font-medium">
                  {row.volume}
                </td>
                <td
                  className={`py-2 text-base flex flex-row justify-center gap-2 ${
                    row.change.startsWith("-")
                      ? "text-red-500"
                      : "text-emerald-500"
                  }`}
                >
                  {row.change.split("(")[0]} {updownbox(row.change)}
                </td>
                <td className="text-gray-900 text-sm font-medium">
                  {row.currentValue}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
