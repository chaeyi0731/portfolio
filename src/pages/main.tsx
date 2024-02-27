import Profileimage from '../components/profileImage';

function Main() {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center my-8">안녕하세요! 이채이입니다 👋</h1>
      <div className="flex flex-row 2xl:w-96 2xl:h-96 justify-center">
        <Profileimage />
        <div className="flex flex-col ml-20 ">
          <p className="font-bold">📧 Email</p>
          <p className="mt-2.5">chaeyi990731@gmail.com</p>
          <p className="font-bold mt-2.5">😺 GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
