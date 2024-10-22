"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarMenuItemProps {
  path: string;
  text: string;
  description: string;
  icon: React.ReactNode;
}

export const SidebarMenuItem = ({
  path,
  description,
  text,
  icon,
}: SidebarMenuItemProps) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`${
        path === currentPath && "bg-blue-800"
      } w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{text}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {description}
        </span>
      </div>
    </Link>
  );
};
