import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import imgSrc from "../public/plane.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image src={imgSrc} alt="plane" className="h-9 w-9"></Image>
            <span className="text-black dark:text-gray-200 ml-3 text-xl">Yoon Portfolio</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              처음으로
            </Link>
            <Link href="/about-me" className="mr-5">
              누구세요?
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
              프로젝트
            </Link>
            <Link
              href="https://dongyoon7212.github.io/"
              className="mr-5 hover:text-gray-900"
              target='_blank'
            >
              블로그
            </Link>
            <Link
              href="https://www.instagram.com/d.yxxn/"
              className="mr-5 hover:text-gray-900"
              target='_blank'
            >
              인스타그램
            </Link>
          </nav>
          <DarkModeToggleButton />
          {/* 다크모드 토글 버튼 */}
        </div>
      </header>
    </>
  );
}
