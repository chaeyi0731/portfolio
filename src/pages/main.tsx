import dynamic from 'next/dynamic';
import ProfileSection from '../components/ProfileSection';
import Introduction from '../components/myInfo/Introduction';

const TechStackList = dynamic(() => import('../components/TechStack/TechStackList.client'), {
  ssr: false, // 서버 사이드 렌더링을 비활성화하여 클라이언트 사이드에서만 로드되도록 합니다.
});

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
