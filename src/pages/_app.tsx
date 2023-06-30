import { MainNav } from "@/components/MainNav";
import { MobileDrawer } from "@/components/MobileDrawer";
import { MobileMainNav } from "@/components/MobileMainNav";
import { MyFooter } from "@/components/MyFooter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#f1f4f9] min-h-screen flex flex-col items-center">
      <MainNav />
      <MobileDrawer />
      <Component {...pageProps} />
      <MyFooter />
    </div>
  );
}
