import { Card } from "@/components/Card";
import { FC, ReactNode } from "react";

const header1 = ["日時", "午前", "午後", "備考"];
const info1 = [
  ["4月11日", "Shripriya", "　", "　"],
  ["4月18日", "陳(一)", "李(楽)", "中間発表の練習"],
  ["4月25日", "王", "　", "　"],
  ["5月02日", "劉", "　", "　"],
  ["5月09日", "郭", "　", "　"],
  ["5月16日", "　", "　", "　"],
  ["5月23日", "李(楽)", "　", "　"],
  ["5月30日", "陳(一)", "　", "　"],
  ["6月06日", "　", "　", "　"],
  ["6月13日", "潘", "　", "　"],
  ["6月20日", "劉", "　", "　"],
  ["6月27日", "Shripriya", "　", "　"],
  ["7月04日", "洪", "　", "　"],
  ["7月11日", "郭", "　", "　"],
  ["7月18日", "董 ", "　", "研究生の発表"],
];
const header2 = ["日時", "午前", "午後", "備考"];
const info2 = [
  ["4月13日", "鄭", "　", "　"],
  ["4月20日", "　", "　", "藤原先生 "],
  ["4月27日", "劉（雨）、陳、李", "毛", "午前  中間発表"],
  ["5月11日", "劉（宜）", "唐", "　"],
  ["5月18日", "坪井", "杜", "　"],
  ["5月25日", "呉", "丁", "　"],
  ["6月01日", "劉（雨）", "　", "河野先生"],
  ["6月08日", "Shripriya", "李", "　"],
  ["6月22日", "王", "陳", "　"],
  ["6月29日", "飯島", "宮川", "　"],
  ["7月06日", "白川 ", "潘", "　"],
  ["7月13日", "高村", "　", "藤原先生"],
  ["7月20日", "林", "Ikpe", "伊藤先生"],
  ["7月28日（金）", "　", "郭", "伊藤先生"],
  ["8月02日（水）", "鄭", "　", "伊藤先生"],
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
