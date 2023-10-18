import gitLogo from "../assets/github-logo.png";
import Input from "../components/Input";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Github Logo" />
      <Input />
    </Container>
  );
}

export default App;
