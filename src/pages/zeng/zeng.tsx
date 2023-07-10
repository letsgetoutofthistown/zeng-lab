import { Card } from "@/components/Card";
import { MyHeader } from "@/components/MyHeader";
import { FC } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <Card className="md:pt-52 pt-2 pl-0 pr-0 w-screen">
      <div className="flex md:gap-x-16 gap-x-1 md:pb-16 pb-7">
        <div className="md:w-[320px] w-full px-2">
          <img src={"/zeng.webp"} alt="zeng" width={9999} height={9999} />
        </div>
        <div className="flex flex-col md:gap-y-20 gap-y-7 md:pt-7 pt-2">
          <div className="flex flex-col md:gap-y-7 gap-y-1">
            <div className="md:text-4xl text-lg md:flex">
              <div>教授 曽道智</div>
            </div>
            <div className="md:text-4xl text-base">(Prof. Dao-Zhi Zeng)</div>
          </div>
          <ul className="list-disc flex flex-col gap-y-2 md:text-base text-xs">
            <div>1996.4:香川大学経済学部講師</div>
            <div>1997.6:香川大学経済学部助教授 </div>
            <div>2004.4:香川大学大学院地域マネジメント研究科 助教授 </div>
            <div>2006.3:香川大学大学院地域マネジメント研究科 教授</div>
            <div>2008.4:東北大学大学院情報科学研究科 教授</div>
            <div className="mt-5 underline text-blue-700">
              <Link
                target="_blank"
                href={"http://www.se.is.tohoku.ac.jp/~zeng/index.html"}
              >
                詳しくはこちらへ
              </Link>
            </div>
          </ul>
        </div>
      </div>

      <TeacherCard headerText="職歴（Employment）">
        <ul className="list-disc flex flex-col gap-y-5">
          <li>
            <div>1996年4月: 香川大学経済学部 講師</div>
            <div className="text-xs">
              April, 1996-May, 1997: Faculty of Economics, Kagawa University,
              Lecturer
            </div>
          </li>
          <li>
            <div>1997年6月: 香川大学経済学部 助教授</div>
            <div className="text-xs">
              June, 1997-March, 2004: Faculty of Economics, Kagawa University,
              Associate Professor
            </div>
          </li>
          <li>
            <div>2004年4月: 香川大学大学院地域マネジメント研究科 助教授</div>
            <div className="text-xs">
              April, 2004-February, 2006: Graduate School of Management, Kagawa
              University, Associate Professor
            </div>
          </li>
          <li>
            <div>2006年3月: 香川大学大学院地域マネジメント研究科 教授</div>
            <div className="text-xs">
              September, 2006-Present: College of Economics, Zhejiang
              University, Guest Professor
            </div>
          </li>
          <li>
            <div>2006年9月から (中国)浙江大学経済学院 特任教授</div>
            <div className="text-xs">
              September, 2006- Present: College of Economics, Zhejiang
              University
            </div>
          </li>
          <li>
            <div>
              2008年4月:
              東北大学大学院情報科学研究科(工学部建築・社会環境工学科都市システム計画コース兼任)
              教授{" "}
            </div>
            <div className="text-xs">
              August 2008- Present: Graduate School of Information Sciences
              Tohoku University, Professor
            </div>
          </li>
          <li>
            <div>
              2013年-2014年: 中国科学院大学虚擬経済とデータ科学研究センター
              特任教授
            </div>
            <div className="text-xs">
              September, 2013- August, 2014: Research Center on Fictitious
              Economy and Data Science, University of Chinese Academy of
              Sciences, Guest Professor
            </div>
          </li>
          <li>
            <div>2017年6月から (中国)東北大学工商管理学院国際協力 特任教授</div>
            <div className="text-xs">
              June, 2017- Present: Northeastern University, Guest Professor
            </div>
          </li>
          <li>
            <div>2018年9月から (中国)西南民族大学経済学院 特任教授</div>
            <div className="text-xs">
              September, 2018- Present: Southwest Minzu University School of
              Economics, Guest Professor
            </div>
          </li>
        </ul>
      </TeacherCard>
      <TeacherCard headerText="受賞（Awards）">
        <ul className="list-disc flex flex-col gap-y-5">
          <li>
            <div>1999年： 電子情報通信学会平成１０年度の論文賞</div>
            <div>
              1999: Paper Award from The Institute of Electronics, Information
              and Communication Engineers.
            </div>
          </li>
          <li>
            <div>2004年： シュプリンガー・フェアラークベストペーパー賞</div>
            <div>
              2004: The 9th Springer-Verlag Award for the Best Paper, Western
              Regional Science Association' 43rd Annual Meeting in Hawaii.
            </div>
          </li>
          <li>
            <div>2005年：応用地域学会 2005年度坂下賞</div>
            <div>
              2005: Sakashita Prize from the Applied Regional Science
              Conference.
            </div>
          </li>
        </ul>
      </TeacherCard>
      <TeacherCard headerText="学術誌の編集委員（Editorial Board）">
        <ul className="list-disc flex flex-col gap-y-5">
          <li>
            <div className=" text-xl font-bold">Editor-in-Chief</div>
            <div>Interdisciplinary Information Sciences (2020.4-)</div>
          </li>
          <li>
            <div>
              <div className=" text-xl font-bold">Editorial Board</div>
              <div>1.PLOS ONE (2018.12-)</div>
              <div>
                2.Review of Urban and Regional Development Studies
                (2017.1-2019.12)
              </div>
              <div>
                3.Journal of Systems Science and Complexity (2014.6-2020.5)
              </div>
              <div>
                4.Asian Journal of Management Science and Applications (2013.1-)
              </div>
              <div>5.Papers in Regional Science (2012.1-2014.12)</div>
              <div>
                6.Interdisciplinary Information Sciences (2008.4-2020.3)
              </div>
              <div>7.経済研究 (2008.8-2010.7)</div>
            </div>
          </li>
        </ul>
      </TeacherCard>
    </Card>
  );
}

interface TeacherCardProps {
  headerText: string;
  children: React.ReactNode;
}
export const TeacherCard: FC<TeacherCardProps> = ({
  headerText,
  children,
}: TeacherCardProps) => {
  return (
    <div className="px-10 md:px-20 md:pl-32 pb-16 w-full">
      <MyHeader>{headerText}</MyHeader>
      <div className="px-6">{children}</div>
    </div>
  );
};
