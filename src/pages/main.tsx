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
      <h1 className="text-2xl font-bold -ml-96 mt-7">👨‍💻 Full Stack Engineer, Web Developer</h1>
    </div>
  );
}

export default Main;
