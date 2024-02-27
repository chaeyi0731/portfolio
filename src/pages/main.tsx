import Profileimage from '../components/profileImage';

function Main() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center overflow-y-hidden">
      <h1 className="text-5xl font-bold text-center my-8">안녕하세요! 이채이입니다 👋</h1>
      <div className="flex flex-row 2xl:w-96 2xl:h-96 justify-center">
        <Profileimage />
        <div className="flex flex-col ml-20 ">
          <p className="font-bold">📧 Email</p>
          <p className="mt-2.5">chaeyi990731@gmail.com</p>
          <p className="font-bold mt-12">😺 GitHub</p>
          <a className="mt-2.5 underline" href="https://github.com/chaeyi0731" target="_blank" rel="noopener noreferrer">
            https://github.com/chaeyi0731
          </a>
          <p className="font-bold mt-12">📷 Instagram</p>
          <a className="mt-2.5 underline" href="https://www.instagram.com/chae._.y99/" target="_blank" rel="noopener noreferrer">
            https://www.instagram.com/chae._.y99/
          </a>
        </div>
      </div>
      <hr className="border-white w-2/3 mt-10" />
      <div className="-ml-96">
        <h1 className="text-2xl font-bold mt-7 ">👨‍💻 Full Stack Engineer, Web Developer</h1>
        <ul className="mt-4 font-medium list-disc">
          <li className="mt-4 ml-5">
            안녕하세요! <span className="font-bold text-blue-400">꾸준히 성장하는 개발자 이채이</span> 입니다.
          </li>
          <li className="mt-4 ml-5">항상 생글생글 웃으며 힘든 작업, 과정이어도 웃으며 작업 할 수 있습니다.</li>
          <li className="mt-4 ml-5">무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.</li>
          <li className="mt-4 ml-5">단 한 줄의 코드라도 서비스의 가치를 담으려고 노력합니다.</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
