import TechStackList from '../components/TechStack/TechStackList.client';
import ProfileSection from '../components/ProfileSection';
import Introduction from '../components/myInfo/Introduction';

function Main() {
  return (
    <div className="container mx-auto flex flex-col justify-center overflow-y-hidden">
      <h1 className="text-5xl font-bold text-center my-8">안녕하세요! 이채이입니다 👋</h1>
      <ProfileSection />
      <hr className="border-white w-2/3 mt-10 ml-56" />
      <Introduction />
      <TechStackList />
    </div>
  );
}

export default Main;
