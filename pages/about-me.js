import Layout from "@/components/layout";
import imgSrc from "../public/yoon.JPG";
import Image from "next/legacy/image";

export default function AboutMe() {
  return (
    <Layout>
      <div>
        <div class="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="grid gap-4 sm:gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
              <div>
                <div class="h-auto sm:h-auto md:h-auto">
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

              <div class="md:pt-8">
                <p class="text-center font-bold text-indigo-500 md:text-left">
                  Who we are
                </p>

                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  세계를 누비는 개발자
                </h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  사용자들에게 제가 만든 웹이나 어플 등을 보여주고 사용하는것에
                  보람을 느껴서 프론트엔드를 공부하였습니다. 처음에는 Html,
                  CSS로 공부하기 시작하였습니다. 간단한 코드로도 웹을 만드는것에
                  재미를 느꼈고 JavaScript 더 나아가 React까지 공부를
                  하였습니다. 하지만 공부에 그치지 않고 다른 누군가와 협업을
                  통해 백엔드에 발을 담궈보기도 하고 소통을 하며 나의 프로젝트에
                  숨을 불어넣는 과정이 짜릿했습니다. 중간중간 난관을 맞이하곤
                  했지만 포기하지 않고 끝까지 고민한 끝에 해결을 함으로써
                  프로젝트가 완성됨으로써 저도 완성이 되는 느낌을 받았습니다.
                  저는 제 프로젝트의 완성도가 제 자신의 성장률이 비례한다고
                  생각합니다. 그래서 저는 끊임없이 배우고 성장할 준비가 된
                  개발자입니다.
                  <br />
                  <br />
                  
                  <a
                    href="#"
                    class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    random
                  </a>{" "}
                  or otherwise generated. It may be used to display a sample of
                  fonts or generate text for testing. Filler text is dummy text
                  which has no meaning however looks very similar to real text.
                </p>

                <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                  About us
                </h2>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing. Filler text is dummy text which has no meaning
                  however looks very similar to real text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
