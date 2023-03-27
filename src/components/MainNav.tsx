import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

export const MainNav: FC = () => {
  return (
    <div className="bg-[#f1f4f9] fixed md:flex flex-col items-center w-screen px-7 hidden z-50">
      <div className="flex items-center w-full">
        <div className="px-6 pt-6 pb-4">
          <img src={"/logo.webp"} alt="logo" width={100} height={100} />
        </div>
        <div className="text-2xl flex-1 flex flex-col gap-y-2">
          <div>
            <div>都市社会経済システム分析研究室へようこそ！</div>
            <div className="text-lg">
              Welcome to Socio-Economic Analysis of Urban System Lab!
            </div>
          </div>
          <div className="flex">
            <MainLink title="トップ" subtitle="Top" href="/" />
            <MainLink title="曽道智教授" subtitle="Prof. Zeng" href="/zeng" />
            <MainLink
              title="伊藤亮准教授"
              subtitle="Assoc. Prof. Itoh"
              href="/itoh"
            />
            <MainLink title="研究室紹介" subtitle="Labs" href="/labs" />
            <MainLink title="ゼミ" subtitle="Seminars" href="/seminars" />
            <MainLink
              title="ワークショップ"
              subtitle="Workshops"
              href="/workshops"
            />
            <MainLink title="連絡先" subtitle="Contact us" href="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface MainLinkProps {
  title: string;
  subtitle: string;
  href: string;
}
export const MainLink: FC<MainLinkProps> = ({
  title,
  subtitle,
  href,
}: MainLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={`text-[#082382] ${
        isActive ? "border-t-4" : "border-t"
      } flex-1 px-1 pt-1 border-[#082382] mx-2 hover:border-t-4 text-sm`}
    >
      <div>{title}</div>
      <div className="text-xs">{subtitle}</div>
    </Link>
  );
};
