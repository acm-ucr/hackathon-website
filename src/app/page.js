import Release from "@/components/Release";
import RELEASES from "@/data/Releases";
import Live from "@/components/live/Live";
import Postlive from "@/components/postlive/Postlive";

const Home = () => {
  return (
    <div className="w-full">
      <Release release={RELEASES.LIVE}>
        <Live />
      </Release>
      <Release release={RELEASES.POSTLIVE}>
        <Postlive />
      </Release>
    </div>
  );
};

export default Home;
