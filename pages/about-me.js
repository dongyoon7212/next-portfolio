import Layout from "@/components/layout";
import imgSrc from "../public/yoon.JPG";
import Image from "next/legacy/image";

export default function AboutMe() {
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-4 sm:gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-auto sm:h-auto md:h-auto mt-10">
                  <Image
                    src={imgSrc}
                    loading="lazy"
                    alt="ME"
                    className="h-full w-full rounded-xl object-cover object-center"
                    width={450}
                    height={600}
                  />
                </div>
              </div>

              <div className="md:pt-8">
                <span className="md: text-3xl text-center font-bold text-indigo-500 md:text-left">
                  Who we are
                </span>
                <br />
                <br />
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  더 큰 바다로 항해할 준비 완료
                </h1>

                <div className="mb-6 text-gray-700 dark:text-gray-400 sm:text-lg md:mb-8">
                  제가 가지고 있는 강점은 하나를 깊게 파는 것
                  <br />
                  <br />
                  <p className="dark:text-white text-black font-semibold text-2xl">
                    {'"One By One, Deep Dive"'}
                  </p>
                  <br />
                  하나를 깊게 파는 것은 깊은 의미를 갖습니다. 목표를 달성하고자
                  할 때, 그 목표에 완전히 몰두함으로써 직성이 풀리며, 나
                  자신에게 진정한 만족감을 안겨줍니다. 다른 사람들은 제게
                  &apos;하나만을 택한다&apos; 또는 &apos;과도한 집중&apos;이라는
                  말들을 하지만, 오히려 이러한 성향을 최대한 활용하여 성공적인
                  프로젝트를 구상하고 추진했습니다. 나의 강점으로 이를 살려내어,
                  깊게 파고든 결과물들이 바로 제 프로젝트들입니다.
                  <br />
                  그 어떠한 난관을 맞이 하더라도 끝까지 깊게 파서 해결을 합니다.
                  <br />
                  <br />
                  <p className="dark:text-white text-black font-semibold text-2xl">
                    “바다처럼 깊고 넓은 성장가능성”
                  </p>
                  <br />
                  오늘은 무엇에 몰두해보셨나요?
                </div>

                <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                  About Me
                </h2>

                <div>
                  <h2>이름</h2>
                  <p className="mb-6 text-gray-600 sm:text-lg md:mb-8">
                    이동윤
                  </p>
                  <h2>생년월일</h2>
                  <p className="mb-6 text-gray-600 sm:text-lg md:mb-8">
                    1999.02.26
                  </p>
                  <h2>학력</h2>
                  <p className="mb-6 text-gray-600 sm:text-lg md:mb-8">
                    동서대학교 정보보안학과
                  </p>
                  <h2>이메일</h2>
                  <p className="mb-6 text-gray-600 sm:text-lg md:mb-8">
                    dongyoon7212@naver.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
