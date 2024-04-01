import { FC, useState } from "react";
import Link from "next/link";

export const MobileMainNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <div className="md:hidden fixed bg-[#f1f4f9] w-screen">
      {isOpen ? (
        <div>
          <MobileMainLink
            title="トップ"
            subtitle="Top"
            href="/"
            close={close}
          />
          <MobileMainLink
            title="曽道智教授"
            subtitle="Prof. Zeng"
            href="/zeng"
            close={close}
          />
          <MobileMainLink
            title="伊藤亮准教授"
            subtitle="Assoc. Prof. Itoh"
            href="/itoh"
            close={close}
          />
          <MobileMainLink
            title="研究室紹介"
            subtitle="Introduction"
            href="/intro"
            close={close}
          />
          <MobileMainLink
            title="ゼミ"
            subtitle="Seminars"
            href="/seminars"
            close={close}
          />
          <MobileMainLink
            title="ワークショップ"
            subtitle="Workshops"
            href="/workshops"
            close={close}
          />
          <MobileMainLink
            title="連絡先"
            subtitle="Contact us"
            href="/contact"
            close={close}
          />
          <div onClick={() => setIsOpen(false)}>閉じる</div>
        </div>
      ) : (
        <div
          className="h-10 flex justify-center items-center"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex flex-col items-center justify-around h-6">
            <IconBar />
            <IconBar />
            <IconBar />
          </div>
        </div>
      )}
    </div>
  );
};

export const IconBar: FC = () => {
  return <div className=" bg-indigo-900 w-6 h-1" />;
};

interface MobileMainLinkProps {
  title: string;
  subtitle: string;
  href: string;
  close?: () => void;
}
export const MobileMainLink: FC<MobileMainLinkProps> = ({
  title,
  subtitle,
  href,
}: MobileMainLinkProps) => {
  return (
    <Link href={href}>
      <div className="flex justify-center mt-6 pr-7">
        <div className="w-40 flex flex-col justify-between items-end">
          <div>{title}</div>
          <div className="text-xs">{subtitle}</div>
        </div>
      </div>
    </Link>
  );
};
