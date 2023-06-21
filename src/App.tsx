import { styled } from "styled-components";
import Providers from "./Providers";
import ProfileUserComponent from "./components/ProfileUserComponent";
import TabsComponent from "./components/ProfileTabComponent";

function App() {
  const user = {
    name: "Vernon Dahmer",
    age: 40,
    speciality: "Purchasing manager",
    imageUrl:
      "https://ik.imagekit.io/crv83iwkz/person-img.jpg?updatedAt=1687303538443",
  };
  return (
    <Providers>
      <ProfileUserComponent
        name={user.name}
        age={user.age}
        speciality={user.speciality}
        imageUrl={user.imageUrl}
      />
      <TabsComponent/>
    </Providers>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export default App;
