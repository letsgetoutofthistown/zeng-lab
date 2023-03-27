import { Card } from "@/components/Card";
import { MyHeader } from "@/components/MyHeader";
import { MyP } from "@/components/MyP";
import Link from "next/link";
import { FC } from "react";

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden md:w-screen">
        <img src={"/intro.webp"} alt="univ" width={9999} height={9999} />
      </div>
      <LabCard className="pt-0 md:pb-0 md:pr-0 md:-mt-72 -mt-10">
        <div className="md:flex h-full">
          <div className="md:w-2/3 md:mr-10 pt-16">
            <MyHeader>
              <div className="JR font-bold"> 研究キーワード</div>
            </MyHeader>
            <MyP className="mb-20 Japanese">
              空間経済学、産業集積、グローバル化、均衡、国際貿易、都市経済学、ゲーム理論、政策分析{" "}
            </MyP>
            <MyHeader>
              <div className="JR font-bold">都市形成と集積の経済メカニズム</div>
            </MyHeader>
            <MyP className="mb-20 Japanese">
              <div>
                交通、通信ネットワークによって結ばれた個々の都市は、人、財、サービス、知識の移動を通じて、全体として有機的な「都市システム」を形成している。また、グローバル化、ボーダーレス化の急速な進展のもとで、都市、地域、国際経済は複雑に絡み合い、現代の都市システムは国を越えたグローバルな社会経済システムを形成しつつある。{" "}
              </div>
              <div>
                本研究室は都市や産業の集積形成の理論を中心として、都市、地域、国際貿易などを対象とした空間経済の構造とダイナミックな変遷過程を解明し、都市・地域の経済発展の政策分析を行う。これらの問題に対し、都市経済学、地域経済学、国際経済学、ゲーム理論、ORなどの関連する分野を複合的に動員した、「地域科学」と呼ばれる学際的なアプローチにより研究を進める。現在の主なテーマは以下の通りである。{" "}
              </div>
            </MyP>
          </div>
          <div className="flex md:w-1/3 w-full">
            <Link href={"#zeng_lab"} className="md:w-1/2 relative group/image">
              <img
                className="object-cover md:h-full h-0 group-hover/image:opacity-50"
                src="1.jpeg"
                alt="zeng"
                width={9999}
                height={9999}
              />
              <div className="absolute md:h-full h-0 z-10 w-full top-0 flex items-center justify-center">
                <div className="md:text-6xl underline md:no-underline text-teal-50 md:opacity-100 opacity-0">
                  <div>曽</div> <div>　</div>
                  <div>研</div> <div>究</div> <div>室</div>
                </div>
              </div>

              <div className="md:text-neutral-50 underline ml-10">曽研究室</div>
            </Link>
            <Link href={"#itoh_lab"} className="md:w-1/2 relative group/image">
              <img
                className="object-cover md:h-full h-0 group-hover/image:opacity-50"
                src="1.jpg"
                alt="zeng"
                width={9999}
                height={9999}
              />
              <div className="absolute md:h-full h-0 z-10 w-full top-0 flex items-center justify-center">
                <div className="md:text-6xl underline md:no-underline text-neutral-50 md:opacity-100 opacity-0">
                  <div>伊</div>
                  <div>藤</div> <div>研</div> <div>究</div> <div>室</div>
                </div>
              </div>

              <div className="md:text-neutral-50 underline ml-10">
                伊藤研究室
              </div>
            </Link>
          </div>
        </div>
      </LabCard>

      <LabCard>
        <div
          id="zeng_lab"
          className="flex items-center gap-x-7 justify-between md:w-full"
        >
          <div className="w-full">
            <div className="J2 md:text-6xl text-3xl font-bold md:mb-36 mb-5 text-indigo-900 ">
              曽研究室
            </div>
            <div className="flex w-fit justify-between">
              <StaffCard headerText="教員">
                <div className="flex w-full justify-between">
                  <div>
                    <div className="md:text-2xl md:mb-5">教授　曾道智</div>
                    <div className="md:text-2xl md:mb-7 mb-3">
                      (Prof. Dao-Zhi Zeng)
                    </div>
                    <ul className="list-disc flex flex-col gap-y-2 md:text-base text-xs">
                      <div>1996.4:　香川大学経済学部講師</div>
                      <div>1997.6:　 香川大学経済学部助教授 </div>
                      <div>
                        2004.4:　香川大学大学院地域マネジメント研究科 助教授{" "}
                      </div>
                      <div>
                        2006.3:　香川大学大学院地域マネジメント研究科 教授
                      </div>
                      <div>2008.4:　東北大学大学院情報科学研究科 教授</div>
                    </ul>
                  </div>
                </div>
              </StaffCard>
              <div className="md:w-1/3 w-0">
                <img src={"/zeng.webp"} alt="zeng" />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <StaffCard headerText="学生">
                <div className="md:flex w-full justify-between">
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div>
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                </div>
                <div className="md:flex w-full justify-between pt-5">
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div>
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                </div>
              </StaffCard>
            </div>
          </div>
        </div>
        <div
          id="itoh_lab"
          className="flex items-center gap-x-7 justify-between md:w-full"
        >
          <div className="w-full">
            <div className="J2 md:text-6xl text-3xl font-bold md:mb-36 mb-5 text-indigo-900 ">
              伊藤研究室
            </div>
            <div className="flex w-fit justify-between">
              <StaffCard headerText="教員">
                <div className="flex w-full justify-between">
                  <div>
                    <div className="md:text-2xl md:mb-5">准教授　伊藤亮</div>
                    <div className="md:text-2xl md:mb-7 mb-3">
                      (Associate Prof. Ryo Itoh)
                    </div>
                    <ul className="list-disc flex flex-col gap-y-2 md:text-base text-xs">
                      <div>2008.4　運輸政策研究機構運輸政策研究所　研究員</div>
                      <div>2010.10　名古屋市立大学経済学研究科　講師</div>
                      <div>2014.7　名古屋市立大学経済学研究科　准教授</div>
                      <div>2015.4:　東北大学大学院情報科学研究科 准教授</div>
                    </ul>
                  </div>
                </div>
              </StaffCard>
              <div className="md:w-1/3 w-0">
                <img src={"/itoh.webp"} alt="zeng" />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <StaffCard headerText="学生">
                <div className="md:flex w-full justify-between">
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div>
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                </div>
                <div className="md:flex w-full justify-between pt-5">
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div className="pb-5">
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                  <div>
                    <img
                      src={"/zeng.webp"}
                      alt="zeng"
                      className="md:w-1/2 w-0 md:pb-5"
                    />
                    潘鋭:(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール: pan[at]se.is.tohoku.ac.jp</div>
                  </div>
                </div>
              </StaffCard>
            </div>
          </div>
        </div>
      </LabCard>
    </div>
  );
}
interface StaffCardProps {
  headerText: string;
  children: React.ReactNode;
}
export const StaffCard: FC<StaffCardProps> = ({
  headerText,
  children,
}: StaffCardProps) => {
  return (
    <div className="md:pb-36 pb-12 w-full">
      <MyHeader>{headerText}</MyHeader>
      <div className="md:text-xl text-xs">{children}</div>
    </div>
  );
};

interface LabCardProps {
  children: React.ReactNode;
  className?: string;
}
const LabCard: FC<LabCardProps> = ({ children, className }) => {
  return (
    <Card className={`min-h-fit  px-10 md:px-20 ${className}`}>{children}</Card>
  );
};
