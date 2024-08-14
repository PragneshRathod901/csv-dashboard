import Image from "next/image";

export default function Logo({ showText }: { showText: Boolean }) {
  return (
    <div className="flex flex-row items-center leading-none justify-between text-white w-[82px] md:w-[111px]">
      <Image
        src={"/svg/dashboardIcn.svg"}
        className="md:h-10 md:w-10 w-6 h-6"
        width={25}
        height={25}
        alt="logo"
      />
      {showText ? (
        <div className="font-semibold md:text-2xl text-xl text-primary dark:text-white">
          Base
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
