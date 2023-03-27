import { Card } from "@/components/Card";
import { FC, ReactNode } from "react";

const header = ["Date", "AM", "AM", "AM"];
const info = [
  ["01/01", "09:30"],
  ["01/02", "10:30"],
  ["01/02", "10:30"],
];

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden w-screen">
        <img src={"/semi.webp"} alt="univ" width={9999} height={9999} />
      </div>
      <Card className="pt-10 md:pb-0 md:pr-0 md:-mt-72 -mt-10 w-full">
        <div className="text-xl pb-5">令和５年度　前期火曜日（曽研のみ）</div>
        <div className=" w-3/5 border-2 border-black">
          <div className="flex w-full justify-between">
            {header.map((text, index) => (
              <div
                className="border border-black bg-black text-white h-full w-full text-center"
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-between">
            {info.map((row, index) => {
              console.log(row);
              return (
                <div className="flex w-full justify-between" key={index}>
                  <MyTableCell>{row[0]}</MyTableCell>
                  <MyTableCell>{row[1]}</MyTableCell>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

interface MyTabCellProps {
  children: ReactNode;
}
const MyTableCell: FC<MyTabCellProps> = ({ children }) => {
  return (
    <div className="border border-black w-full h-full text-center">
      {children}
    </div>
  );
};
