import LoginButton from "@/components/LoginButton";
import Release from "@/components/Release";
import { RELEASES } from "@/data/Release";

const Home = () => {
  return (
    <>
      <Release release={RELEASES.comingsoon}>Coming Soon Compomnent</Release>
      <LoginButton />
    </>
  );
};

export default Home;
