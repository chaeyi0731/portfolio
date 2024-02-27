function TechStackList() {
  return (
    <div className="ml-56 flex justify-start flex-col w-2/4 h-auto text-justify ">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold mt-7 ">⚒️기술스택</h1>
        <h1 className="text-xl font-bold ">Javascript</h1>
        <div className="text-gray-400">
          <p>이전에 다양한 주제들로 작업 하고 싶었던 작업들을 javascript를 통해 작업을 하였습니다.</p>
          <p> 함수를 통해 이벤트 핸들러를 동작하여 동작 구현을 사용 할 수 있습니다.</p>
        </div>
        <h1 className="text-xl font-bold ">typescript</h1>
        <div className="text-gray-400">
          <p>react를 사용할 때 typescript 를 사용하여 오류를 최적화 할 수있게 만들었습니다.</p>
          <p> javascript에서 잡지 못했던 오류들을 typescript로 조금 더 강력하게 디버깅 하여 오류를 찾아내며 작업을 할 수 있습니다.</p>
        </div>
        <h1 className="text-xl font-bold ">React</h1>
        <div className="text-gray-400">
          <p>react를 사용하여 기존 javascript로 작업한 작업물을 react로 변환하고 또는 react로만으로도 작업물을 작업하였습니다.</p>
          <p> 모듈화 된 컴포넌트로 코드를 간결화 하여 작업 하였으며 재사용 할 수 있는 컴포넌트나 인터페이스들은 모아 따로 보관하는 작업이 가능합니다.</p>
        </div>
        <h1 className="text-xl font-bold ">Node.js / Express</h1>
        <div className="text-gray-400">
          <p>다양한 작업에서 node를 사용하여 로컬로 서버 개발을 해보았습니다.</p>
          <p>
            Http 메서드인 GET, POST, PUT , DELETE 등을 사용하여 서버와 클라이언트 사이의 요청과 응답을 해보았으며 데이터베이스의 데이터 삽입 및 추출을 경험함으로서 서버에서의 요청과 응답을 사용 할 수
            있습니다.
          </p>
        </div>
        <h1 className="text-xl font-bold ">MYSQL / MariaDB / AWS RDS</h1>
      </div>
      <div className="text-gray-400">
        <p>팀 프로젝트 또는 개인 프로젝트를 통해 해당 데이터베이스를 사용하고 쿼리를 이해하며 사용할 수 있습니다.</p>
        <p>관계형 데이터베이스를 사용하여 데이터베이스 테이블간에 서로 참조를 하며 데이터베이스의 쿼리를 이해 하고 사용이 가능합니다.</p>
      </div>
    </div>
  );
}

export default TechStackList;
