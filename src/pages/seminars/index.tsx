import { Card } from "@/components/Card";
import { FC, ReactNode } from "react";

const header1 = ["日時", "午前", "午後", "備考"];
const info1 = [
  ["4月23日", "劉", "　", "　"],
  ["5月07日", "郭", "　", "　"],
  ["5月14日", "　", "　", "　"],
  ["5月21日", "董", "　", "　"],
  ["5月28日", "曾先生", "　", "　"],
  ["6月04日", "　", "　", "　"],
  ["6月11日", "　", "　", "　"],
  ["6月18日", "陳先生", "　", "　"],
  ["6月25日", "郭", "　", "　"],
  ["7月02日", "董", "　", "　"],
];
const header2 = ["日時", "午前", "午後", "備考"];
const info2 = [
  ["4月11日", "劉（宜）", "　", "　"],
  ["4月18日", "劉（雨）", "　", "　"],
  ["4月25日", "唐", "　", "　"],
  ["5月09日", "鄭、王", "　", "中間発表"],
  ["5月16日", "郭", "Ikep", "　"],
  ["5月23日", "董", "林", "　"],
  ["5月30日", "範", "小平", "　"],
  ["6月06日", "菖蒲", "宇藤", "　"],
  ["6月13日", "河俣", "宮川", "　"],
  ["6月20日", "　", "王", "　"],
  ["6月27日", "蒋", "飯島", "　"],
  ["7月4日", "鄭", "　", "　"],
];

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden w-screen">
        <img src={"/semi.png"} alt="univ" width={9999} height={9999} />
      </div>
      <Card className="md:pt-24 pt-7 md:pb-0 md:pr-0 md:-mt-56 -mt-10 w-full">
        <div className="md:text-xl  md:pb-5 pb-2">
          令和6年度　前期火曜日（曽研のみ）
        </div>
        <div className="md:w-3/5 w-full border-2 border-black">
          <div className="flex w-full justify-between">
            {header1.map((text, index) => (
              <div
                className="border border-black bg-black text-white md:text-lg text-xs h-full w-full text-center"
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-between">
            {info1.map((row, index) => {
              console.log(row);
              return (
                <div className="flex w-full justify-between" key={index}>
                  <MyTableCell>{row[0]}</MyTableCell>
                  <MyTableCell>{row[1]}</MyTableCell>
                  <MyTableCell>{row[2]}</MyTableCell>
                  <MyTableCell>{row[3]}</MyTableCell>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:text-xl md:pt-24 pt-10 md:pb-5 pb-2">
          令和6年度　前期木曜日
        </div>
        <div className="md:w-3/5 w-full border-2 border-black">
          <div className="flex w-full justify-between">
            {header2.map((text, index) => (
              <div
                className="border border-black bg-black text-white md:text-lg text-xs h-full w-full text-center"
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-between">
            {info2.map((row, index) => {
              console.log(row);
              return (
                <div className="flex w-full justify-between" key={index}>
                  <MyTableCell>{row[0]}</MyTableCell>
                  <MyTableCell>{row[1]}</MyTableCell>
                  <MyTableCell>{row[2]}</MyTableCell>
                  <MyTableCell>{row[3]}</MyTableCell>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:text-base text-xs pt-5 md:pb-24 ">
          午前、午後の開始時刻はそれぞれ10:30 と13:15 となる{" "}
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
    <div className="border border-black w-1/4 h-full text-center md:text-lg text-xs">
      {children}
    </div>
  );
};
