import { Card } from "@/components/Card";
import { MyHeader } from "@/components/MyHeader";
import { MyP } from "@/components/MyP";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-40 md:h-[700px] lg:h-[100vh] overflow-hidden md:w-screen">
        <img
          className="object-cover h-full"
          src={"/contact.jpg"}
          alt="univ"
          width={9999}
          height={9999}
        />
      </div>
      <Card className="md:-mt-48 px-0 md:px-0">
        <div className="mt-10">
          <MyHeader>
            <div className="En1 font-bold">CONTACT</div>
          </MyHeader>
        </div>
        <MyP className="JR md:text-xl text-xs underline">
          <center>
            <div className="mb-5">
              <Link
                target="_blank"
                href={"http://www.se.is.tohoku.ac.jp/~zeng/index.html"}
              >
                教授　曾道智(Prof. Dao-Zhi Zeng)
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href={"https://sites.google.com/site/ryoitohspage/home"}
              >
                准教授　伊藤亮(Associate Prof. Ryo Itoh)
              </Link>
            </div>
          </center>
        </MyP>
        <div className="md:mt-20 mt-10">
          <MyHeader>
            <div className="En1 font-bold">ACCESS</div>
          </MyHeader>
        </div>
        <div className="JR md:text-xl text-xs">
          東北大学大学院情報科学研究科 社会経済情報学講座
        </div>
        <div className="JR md:text-xl text-xs mt-5">
          〒980-8579　宮城県仙台市青葉区荒巻字青葉6-3-09
        </div>
        <Link
          target="_blank"
          href={"https://www.tohoku.ac.jp/map/ja/?f=AY_G01"}
        >
          <div className="md:w-[700px] overflow-hidden mt-12 hover:opacity-50">
            <img src={"/map.png"} alt="univ" width={9999} height={9999} />
          </div>
        </Link>
      </Card>
    </div>
  );
}
