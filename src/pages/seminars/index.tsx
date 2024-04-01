import { Card } from "@/components/Card";
import { FC, ReactNode } from "react";

const header1 = ["日時", "午前", "午後", "備考"];
const info1 = [
  ["10月17日", "Shripriya", "　", "中間発表の練習"],
  ["10月24日", "董", "　", "　"],
  ["10月31日", "郭", "　", "　"],
  ["11月7日", "劉", "　", "　"],
  ["11月14日", "曾先生", "　", "　"],
  ["11月21日", "潘", "　", "　"],
  ["11月28日", "　", "　", "　"],
  ["12月5日", "Shripriya", "　", "　"],
  ["12月12日", "郭", "　", "　"],
  ["12月19日", "董", "　", "　"],
  ["12月26日", "　", "　", "　"],
  ["1月9日", "陳先生", "　", "　"],
];
const header2 = ["日時", "午前", "午後", "備考"];
const info2 = [
  ["10月12日", "　", "　", "藤原先生"],
  ["10月19日", "坪井", "劉（宜）", "　"],
  ["10月26日", "　", "　", "曾先生"],
  ["11月2日", "呉、Shipriya", "毛 ", "中間発表"],
  ["11月9日", "唐", "Ikpe", "　"],
  ["11月16日", "劉（雨）", "王", "　"],
  ["11月23日", "　", "　", "祝日"],
  ["11月30日", "呉", "飯島", "　"],
  ["12月7日", "白川", "毛", "　"],
  ["12月14日", "Shipriya", "杜", "　"],
  ["12月19日", "郭", "高村", "　"],
  ["12月28日", "　", "　", "河野先生"],
  ["1月4日", "　", "　", "河野先生"],
  ["1月11日", "林", "董", "　"],
  ["1月18日", "鄭", "宮川", "　"],
];

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden w-screen">
        <img src={"/semi.png"} alt="univ" width={9999} height={9999} />
      </div>
      <Card className="md:pt-24 pt-7 md:pb-0 md:pr-0 md:-mt-56 -mt-10 w-full">
        <div className="md:text-xl  md:pb-5 pb-2">
          令和５年度　前期火曜日（曽研のみ）
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
          令和５年度　後期木曜日
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
