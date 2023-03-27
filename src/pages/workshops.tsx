import { Card } from "@/components/Card";
import { ComingSoon } from "@/components/ComingSoon";

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden md:w-screen">
        <img src={"/workshop.webp"} alt="univ" width={9999} height={9999} />
      </div>
      <Card className="pt-0 md:pb-0 md:pr-0 md:-mt-72 -mt-10">
        <ComingSoon />
      </Card>
    </div>
  );
}
