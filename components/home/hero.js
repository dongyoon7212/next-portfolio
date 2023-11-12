import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br />
          개발자 이동윤입니다.
          <br className="hidden lg:inline-block" />
          <br />
          맘껏 구경해요!
        </h1>
        <p className="mb-8 leading-relaxed">
          저는 다양한 프로젝트를 경험하며 성장하고, 새로운 기술에 도전하며
          스스로를 발전시키는 것을 즐겨요! 그리고 항상 꿈을 키우고 그 꿈을
          현실로 만들기 위해 노력하고 있는 열정적인 개발자입니다. <br />
          <br />
          {"\"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.\""}
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            구경하러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
