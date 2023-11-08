import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.<br/>개발자 이동윤입니다.
          <br className="hidden lg:inline-block" />
          맘껏 구경해요!
        </h1>
        <p className="mb-8 leading-relaxed">
          저는 여행하는 것을 좋아해요. 이 세상 이곳 저곳 누비며 코딩을 하는게 제 꿈이랍니다. 그래서 열심히 준비중이에요. 노력은 배신하지 않으니까요!<br/> 오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간답니다.
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
