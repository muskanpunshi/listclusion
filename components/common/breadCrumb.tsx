"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  const pathname = usePathname();

  return (
    <div className="relative text-center py-5  ">
      <div className="container mx-auto px-4 relative z-10">
        <ul className="flex flex-wrap justify-center items-center space-x-2  text-lg text-secondary border-b border-text-primary pb-2  ">
          <li>
            <Link href="/" className=" hover:text-primary transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          {breadcrumbs.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index} className="flex items-center space-x-2 transition-all duration-300 ease-in-out">
                <span>/</span>

                <Link href={item.href} className={` ${isActive ? 'text-black ' : 'hover:text-primary'}  `}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
