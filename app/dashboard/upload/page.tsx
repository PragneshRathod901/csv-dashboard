import Image from "next/image";
import Header from "../../ui/dashboard/Header";

export default async function Page() {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <div className="mt-32 w-[596px] h-[367px] sm:w-4/5 bg-primary mx-auto my-auto p-4 rounded-lg flex flex-col flex-grow gap-y-5">
        <div className="w-full h-full rounded-lg border-dotted border border-[#212121]  flex items-center justify-center">
          <div className="m-auto flex flex-col items-center text-gray-50 gap-y-4">
            <Image
              src={"/svg/csvIcn.svg"}
              width={36}
              height={36}
              alt="csv icon"
            />
            <div className="font-normal leading-6">
              Drop your excel sheet here or{" "}
              <span className="text-secondary">browse</span>
            </div>
          </div>
        </div>
        <button className="border-0 bg-secondary w-full p-4 rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
}
