"use client";
import { useState } from "react";
import StockUpIcon from "./icons/StockUpIcon";
import StockDownIcon from "./icons/StockDownIcon";

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

const tableData = [
  { index: "KSE100", currentValue: "77,114.49", change: "-76.85 (0.10%)" },
  { index: "KSE100", currentValue: "77,114.49", change: "+87.78 (0.18%)" },
  { index: "KSE30", currentValue: "49,368.91", change: "+87.78 (0.18%)" },
  { index: "KSE100", currentValue: "77,114.49", change: "-76.85 (0.10%)" },
  { index: "KSE30", currentValue: "49,368.91", change: "-87.78 (0.18%)" },
  { index: "KSE30", currentValue: "49,368.91", change: "+87.78 (0.18%)" },
  { index: "KSE100", currentValue: "77,114.49", change: "-76.85 (0.10%)" },
  { index: "KSE30", currentValue: "49,368.91", change: "+87.78 (0.18%)" },
];

const indexData = [
  { name: "KSE100" },
  { name: "KSEALL" },
  { name: "KSE30" },
  { name: "KMIALL" },
  { name: "PSXDIV20" },
  { name: "BKTI" },
  { name: "OGGJ" },
  { name: "UPP9" },
  { name: "NITPGI" },
  { name: "MZNPI" },
  { name: "ACI" },
];

export default function MarketSummary() {
  const [active, setActive] = useState("indices");
  const [activeChart, setActiveChart] = useState(indexData[0].name);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      <div className="w-[70%]">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Markets Summary
        </h2>
        <div className="flex gap-4 mb-5">
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              active == "indices" ? "bg-slate-100" : ""
            }`}
            onClick={() => setActive("indices")}
          >
            Indices
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              active == "stocks" ? "bg-slate-100" : ""
            }`}
            onClick={() => setActive("stocks")}
          >
            Stocks
          </button>
        </div>

        <div className="flex gap-8 mb-10 overflow-x-hidden">
          {indexData.map((index, index2) => {
            return (
              <button
                key={index2}
                className={`text-base text-gray-900 ${
                  activeChart == index.name
                    ? "text-primary border-b-2 border-b-primary"
                    : ""
                }`}
                onClick={() => {
                  setActiveChart(index.name);
                }}
              >
                {index.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-[30%] flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Top Market Indices
        </h2>
        <hr className="bg-amber-500 w-full h-1 rounded-full" />
        <table className="w-full">
          <thead className="text-gray-500 text-base font-medium">
            <tr>
              <td>Indies</td>
              <td className="text-center">Current Value</td>
              <td className="text-center">Change (%)</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              return (
                <tr key={index}>
                  <td className="flex flex-col gap-1 uppercase py-2">
                    <span className="text-primary text-sm">{row.index}</span>
                    <span className="text-xs">{row.index} INDEX</span>
                  </td>
                  <td className="py-2 text-gray-900 text-base font-medium text-center">
                    {row.currentValue}
                  </td>
                  <td
                    className={`py-2 text-center text-base flex flex-row justify-center gap-2 ${
                      row.change.startsWith("-")
                        ? "text-red-500"
                        : "text-emerald-500"
                    }`}
                  >
                    {row.change.split("(")[0]} {updownbox(row.change)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
