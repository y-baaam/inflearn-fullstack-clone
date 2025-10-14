"use client";

import { usePathname } from "next/navigation";

export default function InstructorPageName() {
  const pathname = usePathname();

  let title = "";
  switch (pathname) {
    case "/instructor":
      title = "대시보드";
      break;
    case "/instructor/courses":
      title = "강의 관리";
      break;
    default:
      title = "대시보드";
  }

  return (
    <div className="w-full bg-gray-700">
      <div className="w-5xl mx-auto text-white text-2xl font-bold py-4">
        {title}
      </div>
    </div>
  );
}
