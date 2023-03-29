import Drawer from "@mui/material/Drawer";
import { FC, useState } from "react";
import { IconBar, MobileMainLink } from "./MobileMainNav";

export const MobileDrawer: FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex justify-between items-center w-screen px-4 py-4"
        onClick={() => setDrawerOpened(true)}
      >
        <div className="w-8" />
        <div className="h-8">
          <img src={"/logo.webp"} alt="logo" width={40} height={40} />
        </div>
        <div className="relative h-6 w-6">
          <div className="fixed">
            <div className="h-6 w-6 flex flex-col items-center justify-around">
              <IconBar />
              <IconBar />
              <IconBar />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        anchor={"right"}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      >
        <div className="w-fit">
          <MobileMainLink title="トップ" subtitle="Top" href="/" />
          <MobileMainLink
            title="曽道智教授"
            subtitle="Prof. Zeng"
            href="/zeng"
          />
          <MobileMainLink
            title="伊藤亮准教授"
            subtitle="Assoc. Prof. Itoh"
            href="/itoh"
          />
          <MobileMainLink title="研究室紹介" subtitle="Labs" href="/labs" />
          <MobileMainLink title="ゼミ" subtitle="Seminars" href="/seminars" />
          <MobileMainLink
            title="ワークショップ"
            subtitle="Workshops"
            href="/workshops"
          />
          <MobileMainLink
            title="連絡先"
            subtitle="Contact us"
            href="/contact"
          />
        </div>
      </Drawer>
      <div className="mt-1 text-xs text-center">
        都市社会経済システム分析研究室へようこそ!
      </div>
      <div className="text-xs text-center mb-3">
        Welcome to Socio-Economic Analysis of Urban System Lab!
      </div>
    </div>
  );
};
