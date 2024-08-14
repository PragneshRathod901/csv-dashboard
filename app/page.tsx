import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full  ">
      <div className="flex justify-between flex-row sm:flex-col p-6 w-full  ">
        <div className="bg-secondary w-3/6 h-[976px] p-6 rounded-[16px]  hidden md:block">
          <div className="bg-[#4B58D7] w-3/6 h-full w-full rounded-[16px] relative ">
            <Image
              src={"/images/hero.png"}
              width={381}
              height={438}
              alt="hero image"
              className="absolute bottom-0 right-0 shrink"
            />
            <div className="font-bold absolute top-[155px] text-5xl ml-10 leading-[63px] text-white">
              Generate detailed reports with just one click
            </div>
            <div className="absolute top-[38px] left-[38px] bg-white flex flex-row p-3.5 rounded-full gap-x-1">
              <Image
                src={"/svg/blueIcn.svg"}
                width={27}
                height={27}
                alt="Logo"
              />
              <div className="font-bold text-lg text-black leading-8">Base</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
