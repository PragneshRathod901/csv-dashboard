import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="font-semibold text-2xl text-black dark:text-white">
        Upload CSV
      </div>
      <div className="flex items-center gap-x-7">
        <Link
          href={"/dashboard/notification"}
          className="aspect-square w-8 text-black dark:text-white "
        >
          <Image
            src={"/svg/Notification.svg"}
            width={32}
            height={32}
            alt="notification"
            className="w-full h-full"
          />
        </Link>
        <div className="overflow-hidden rounded-full aspect-square w-8">
          <Image
            src={"/images/profile.png"}
            height={32}
            width={32}
            alt="profile pic"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
