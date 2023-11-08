import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 빡빡이입니다
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩?
        </h1>
        <p className="mb-8 leading-relaxed">
          모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는
          교육을 받게 할 의무를 진다. 제2항과 제3항의 처분에 대하여는 법원에
          제소할 수 없다. 이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의
          권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이
          설치될 때까지 존속하며 그 직무를 행한다. 신체장애자 및 질병·노령
          기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의
          보호를 받는다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나
          재산권을 박탈당하지 아니한다. 국회의원은 현행범인인 경우를 제외하고는
          회기중 국회의 동의없이 체포 또는 구금되지 아니한다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
