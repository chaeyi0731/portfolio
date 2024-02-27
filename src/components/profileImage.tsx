import Image from 'next/image';

function Profileimage() {
  return (
    <Image
      src="https://stellatalk.s3.ap-northeast-2.amazonaws.com/image/KakaoTalk_Photo_2024-02-25-21-38-35.jpeg"
      alt="my profile Image"
      width={300} // 이미지의 너비
      height={400} // 이미지의 높이
    />
  );
}

export default Profileimage;
