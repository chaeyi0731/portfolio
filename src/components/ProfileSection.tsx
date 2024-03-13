import Profileimage from './profileImage';
import ContactInfo from './myInfo/ContactInfo';

function ProfileSection() {
  return (
    <div className="container flex flex-row  justify-center  w-screen">
      <Profileimage />
      <ContactInfo />
    </div>
  );
}

export default ProfileSection;
