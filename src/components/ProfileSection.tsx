import Profileimage from './profileImage';
import ContactInfo from './myInfo/ContactInfo';

function ProfileSection() {
  return (
    <div className="flex flex-row 2xl:w-96 2xl:h-96 justify-center mt-64">
      <Profileimage />
      <ContactInfo />
    </div>
  );
}

export default ProfileSection;
