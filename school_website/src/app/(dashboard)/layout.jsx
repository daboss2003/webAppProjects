import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({children}) {
  return (
    <div className="h-screen flex max-h-screen overflow-hidden">
      <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[16%] p-4 max-h-full overflow-auto">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

