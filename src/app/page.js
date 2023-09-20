import LoginButton from "@/components/LoginButton";
import Release from "@/components/Release";
import { releases } from "@/data/Release";

const Home = () => {
  return (
    <>
      <Release release={releases.comingsoon}>Coming Soon Compomnent</Release>
      <LoginButton />
    </>
  );
};

export default Home;
