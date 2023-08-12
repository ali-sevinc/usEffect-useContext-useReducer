import { useAuthContext } from "../../contexts/useAuthContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const Home = () => {
  const { logoutHandler } = useAuthContext();

  return (
    <Card className="mx-auto my-8 w-[90%] max-w-2xl p-12 text-center ">
      <h1 className="text-2xl font-bold">Welcome back!</h1>
      <Button onClick={logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
