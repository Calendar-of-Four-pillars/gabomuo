type Name = string;
type Gender = 'F' | 'M';
type Year = number;
type Month = number;
type Day = number;
type Hour = number;
type Minute = number;

type Person = {
  name: Name;
  gener: Gender;
  year: Year;
  month: Month;
  day: Day;
  hour: Hour;
  minute: Minute;
};

interface ProfileProps {
  profile: Person;
}

interface MyoungJoProps {
  myoungJo: Person;
}

function Result() {
  return (
    <>
      <MyProfile />
      <MyMyoungJo />
    </>
  );
}

function MyProfile() {
  // TODO: useUser 구현 필요
  const { status, data: profile } = useUser();
  return <Profile profile={profile} />;
}

function MyMyoungJo() {
  // TODO: useMyoungJo 구현 필요
  const { status, data: myoungJo } = useMyoungJo();
  return <MyoungJo myoungJo={myoungJo} />;
}

function Profile(props: ProfileProps) {}
function MyoungJo(props: MyoungJoProps) {}

export default Result;
