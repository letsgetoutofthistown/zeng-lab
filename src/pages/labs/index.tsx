import { Card } from "@/components/Card";
import { MyHeader } from "@/components/MyHeader";
import { MyP } from "@/components/MyP";
import Link from "next/link";
import { FC, ReactNode } from "react";

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden md:w-screen">
        <img src={"/lab.jpg"} alt="univ" />
      </div>
      <LabCard className="pt-0 md:pb-0 md:pr-0 md:-mt-60 -mt-10">
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
              <div className="pb-5">
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
                src="/1.jpeg"
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
                src="/1.jpg"
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
                <div className="flex w-full justify-center">
                  <div className="md:mt-16">
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
                      <div className="mt-5 underline text-blue-700">
                        <Link
                          target="_blank"
                          href={
                            "http://www.se.is.tohoku.ac.jp/~zeng/index.html"
                          }
                        >
                          詳しくはこちらへ
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </StaffCard>
              <div className="md:w-1/3 w-0 md:mt-20">
                <img src={"/zeng.webp"} alt="zeng" />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <StaffCard headerText="学生">
                <div className="md:mt-24 md:flex w-full">
                  <StudentCard>
                    <img
                      src={"/PanR.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    潘鋭(D)
                    <div>出身地：中国安徽省</div>
                    <div>趣味：将棋、音楽鑑賞</div>
                    <div>メール:pan[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/liuyh.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    劉宜昊(D1)
                    <div>出身地：中国新疆ウイグル自治区</div>
                    <div>趣味：バスケットボール、水泳</div>
                    <div>メール:liu[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>

                  <StudentCard>
                    <img
                      src={"/hxd.JPG"}
                      alt="zeng"
                      className="pb-5"
                      width={200}
                      height={240}
                    />
                    洪旭東(特別研究生)
                    <div>出身地： 中国山東省</div>
                    <div>趣味：水泳、旅行</div>
                    <div>メール:sufehxd[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                </div>

                <div className="md:flex w-full md:pt-24">
                  <StudentCard>
                    <img
                      src={"/xiao.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={150}
                      height={200}
                    />
                    肖哲銘(M)
                    <div>出身地：中国江蘇省</div>
                    <div>趣味：卓球</div>
                    <div>メール:xiao[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/leqin.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    李樂勤(M2)
                    <div>出身地: 中国北京市</div>
                    <div>趣味: 旅行、ハイキング</div>
                    <div>メール:leqin[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>

                  <StudentCard>
                    <img
                      src={"/yining.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    陳一寧(M2)
                    <div>出身地: 中国江蘇省</div>
                    <div>趣味: 水泳、映画鑑賞</div>
                    <div>メール:yining[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                </div>
                <div className="md:flex w-full md:pt-24">
                  <StudentCard>
                    <img
                      src={"/maheshwari.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    Shripriya Maheshwari:(M1)
                    <div>出身地: hurja, Uttar Pradesh, India</div>
                    <div>趣味: Writing and performing Poetry,</div>
                    <div>Reading, Badminton</div>
                    <div>メール:maheshwari[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/sookie.jpg"}
                      alt="郭筱琦"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    郭筱琦(M1)
                    <div>出身地: 中国湖北省</div>
                    <div>趣味: 料理、ヨガ</div>
                    <div>メール:sookie[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>{" "}
                  <StudentCard>
                    <img
                      src={"/dong.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    董振武(R)
                    <div>出身地: 中国湖北省</div>
                    <div>趣味: 旅行、音楽</div>
                    <div>メール:dongzhenwu[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                </div>
              </StaffCard>
            </div>
            <StaffCard headerText="卒業生">
              <div className="md:mt-24 md:flex w-full">
                <StudentCard>
                  <img
                    src={"/lxmm.jpg"}
                    alt="zeng"
                    className="pb-5"
                    width={180}
                    height={240}
                  />
                  李馨萌:2021年9月 博士後期課程卒業
                  <div>進路: 総合地球環境学研究所</div>
                  <div>出身地: 中国天津市</div>
                  <div>趣味: 絵画、アニメ</div>
                  <div>メール:lixinmeng[at]se.is.tohoku.ac.jp</div>
                </StudentCard>
                <StudentCard>
                  <img
                    src={"/lkf.jpg"}
                    alt="zeng"
                    className="pb-5"
                    width={175}
                    height={210}
                  />
                  林柯夫:2023年3月 博士後期課程卒業
                  <div>進路: 東海大学政治経済学部経済学科</div>
                  <div>出身地: 中国浙江省</div>
                  <div>趣味: 囲碁、麻雀</div>
                  <div>メール:lin[at]se.is.tohoku.ac.jp</div>
                </StudentCard>
              </div>
            </StaffCard>
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
                <div className="flex w-full justify-center">
                  <div className="md:mt-16">
                    <div className="md:text-2xl md:mb-5">准教授　伊藤亮</div>
                    <div className="md:text-2xl md:mb-7 mb-3">
                      (Associate Prof. Ryo Itoh)
                    </div>
                    <ul className="list-disc flex flex-col gap-y-2 md:text-base text-xs">
                      <div>2008.4　運輸政策研究機構運輸政策研究所　研究員</div>
                      <div>2010.10　名古屋市立大学経済学研究科　講師</div>
                      <div>2014.7　名古屋市立大学経済学研究科　准教授</div>
                      <div>2015.4:　東北大学大学院情報科学研究科 准教授</div>
                      <div className="md:mt-5 underline text-blue-700">
                        <Link
                          target="_blank"
                          href={
                            "https://sites.google.com/site/ryoitohspage/home"
                          }
                        >
                          詳しくはこちらへ
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </StaffCard>
              <div className="md:w-1/3 w-0">
                <img
                  src={"/itoh.webp"}
                  alt="zeng"
                  className="mt-24"
                  width={700}
                  height={900}
                />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <StaffCard headerText="学生">
                <div className="md:mt-24 md:flex w-full">
                  <StudentCard>
                    <img
                      src={"/lzh.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={190}
                      height={240}
                    />
                    李宗輝(D)
                    <div>出身地: 中国河南省</div>
                    <div>趣味: 車を鑑賞</div>
                    <div>メール: plizonghui[at]se.is.tohoku.ac.jp </div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/ding.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    丁康哲(D)
                    <div>出身地：中国陝西省</div>
                    <div>趣味：運動、絵画</div>
                    <div>メール: ding[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/tsuboi.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    <div className="flex gap-x-2">
                      坪井和史(D3)
                      <Link
                        target="_blank"
                        href={"https://researchmap.jp/kazufumi_tsuboi"}
                      >
                        <div className="underline text-blue-700">
                          research map
                        </div>
                      </Link>
                    </div>
                    <div>[2023.4-] 日本学術振興会 特別研究員 DC2</div>
                    <div>出身地: 神奈川県</div>
                    <div>趣味: 陸上競技、星や森を眺めること</div>
                    <div>メール: tsuboi[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                </div>
                <div className="md:flex w-full md:pt-24">
                  <StudentCard>
                    <img
                      src={"/tang.jpeg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    唐晨雪(D1)
                    <div>出身地: 中国湖南省</div>
                    <div>趣味: 読書、散歩</div>
                    <div>メール: tang[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/wang.j.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    王郡南(M1)
                    <div>出身地: 中国湖北省</div>
                    <div>趣味: ピアノ、バレーボール</div>
                    <div>メール: wang.j[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <div />
                </div>
              </StaffCard>
            </div>
          </div>
        </div>
      </LabCard>
    </div>
  );
}

interface StudentCardProps {
  children: ReactNode;
}

const StudentCard: FC<StudentCardProps> = ({ children }) => {
  return (
    <div className="md:w-1/3 md:mb-0 mb-10 overflow-hidden items-center flex-col flex">
      {children}
    </div>
  );
};

interface StaffCardProps {
  headerText: string;
  children: ReactNode;
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
  children: ReactNode;
  className?: string;
}
const LabCard: FC<LabCardProps> = ({ children, className }) => {
  return (
    <Card className={`min-h-fit  px-10 md:px-20 ${className}`}>{children}</Card>
  );
};
