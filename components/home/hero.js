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
                <div className="mb-8 leading-relaxed;">
                    <br />
                    <p className="text-gray-700 dark:text-gray-400">
                        중고신입
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 font-semibold text-lg">
                        {
                            '"저는 개발로 세상을 바꾸고, 소통으로 더 나은 팀을 만드는 사람입니다."'
                        }
                    </p>
                </div>
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
