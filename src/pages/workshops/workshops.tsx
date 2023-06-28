import { Card } from "@/components/Card";
import { MyHeader } from "@/components/MyHeader";
import { MyP } from "@/components/MyP";
import { useEffect, useState } from "react";

interface Workshop {
  heading: string;
  date: string;
  place: string;
  reporter: string;
  title: string;
  abstract: string;
}
export default function Home() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  useEffect(() => {
    fetch("/workshops.csv")
      .then((res) => res.text())
      .then((resTxt) => resTxt.split("\n"))
      .then((rows) =>
        setWorkshops(
          rows.map((row) => {
            const parts = row.split(",");
            const items: string[] = [];
            var isReading = false;
            for (let i = 0; i < parts.length; i++) {
              if (isReading) {
                items[items.length - 1] =
                  items[items.length - 1] + parts[i].replace('"', "");
                if (parts[i].includes('"')) {
                  isReading = false;
                } else {
                  items[items.length - 1] = items[items.length - 1] + ",";
                }
              } else {
                items.push(parts[i].replace('"', ""));
                if (parts[i].includes('"')) {
                  isReading = true;
                  items[items.length - 1] = items[items.length - 1] + ",";
                }
              }
            }
            return {
              heading: items[0],
              date: items[1],
              place: items[2],
              reporter: items[3],
              title: items[4],
              abstract: items[5],
            };
          })
        )
      );
  }, []);
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden md:w-screen">
        <img src={"/workshops.jpg"} alt="univ" width={9999} height={9999} />
      </div>
      <Card className="md:-mt-72 px-0 pr-10 pl-10">
        <div className="flex flex-col md:pr-5 pr-2 md:pl-5 pl-2 py-5 border-black border-2 md:mb-24 mb-5 items-center md:text-base text-xs">
          <div className="JR">
            ⚠️コロナ感染症拡大防止期間中に、地域科学WS発表はオンラインで行います。
          </div>
          <div className="JR w-fit">
            応用地域学会会員もしくはWS運営メンバーの紹介で参加可能です。
          </div>
          <div className="JR">
            参加希望の方は，WS運営メンバー曽、河野、伊藤、藤原にご連絡ください。
          </div>
        </div>

        {workshops.map((w, i) => {
          console.log(w);
          return (
            <div key={i} className="w-full my-10 md:pl-10 md:pr-10">
              <div className="md:text-3xl text-xl mb-5 JR font-black">
                {w.heading}
              </div>
              <div className="mb-1 flex">
                <div className="font-bold"> DATE:　</div>
                <div className="JR">{w.date}</div>
              </div>
              <div className="mb-1 flex">
                <div className=" font-bold "> PLACE:　</div>
                <div className="JR">{w.place}</div>
              </div>
              <div className="mb-1 flex">
                <div className=" font-bold "> TITLE:　</div>
                <div className="JR">{w.title}</div>
              </div>
              <div className="mb-1 flex">
                <div className=" font-bold "> REPORTER:　</div>
                <div className="JR">{w.reporter}</div>
              </div>
              <div className="mb-1 md:flex">
                <div className="font-bold inline"> ABSTRACT:　</div>
                <div className="JR inline md:block">{w.abstract}</div>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
