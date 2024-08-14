"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Category,
  Ticket,
  Chart,
  Document,
  Notification,
  Setting,
} from "react-iconly";
import Link from "next/link";
import NavIcn from "../SvgComponents/NavIcn";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Category },
  { name: "Upload", href: "/dashboard/upload", icon: Chart },
  { name: "Invoice", href: "/dashboard/invoice", icon: Ticket },
  { name: "Schedule", href: "/dashboard/schedule", icon: Document },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  {
    name: "Notification",
    href: "/dashboard/notification",
    icon: Notification,
  },
  { name: "Settings", href: "/dashboard/settings", icon: Setting },
];

const Dashboard = () => {
  const [closed, setClosed] = useState(false);
  const pathName = usePathname();
  return (
    <div
      className={
        (closed ? "w-[154px] " : "w-[285px] ") +
        "h-full  flex flex-col  bg-primary"
      }
    >
      <div className=" ml-8 h-[143px] items-center flex relative">
        <Logo showText={!closed} />
        <button
          className="w-7 h-7 absolute right-8"
          onClick={() => setClosed(!closed)}
        >
          <NavIcn className="w-full h-full" />
        </button>
      </div>
      <div className={"flex flex-col "}>
        {links.map((val) => (
          <Link
            key={val.name}
            href={val.href}
            className={
              "w-full pl-8 flex gap-x-[14px] text-[#6E6E6E] hover:text-secondary/50 p-3 " +
              (pathName === val.href
                ? "bg-gradient-to-r from-selNav/20 to-90%"
                : "")
            }
          >
            <val.icon />
            {closed ? "" : <div className="text-base">{val.name}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
