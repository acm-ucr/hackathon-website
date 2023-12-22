import Release from "@/components/static/Release";
import RELEASES from "@/data/Releases";
import Live from "@/components/static/live/Live";
import Postlive from "@/components/static/postlive/Postlive";

const Home = () => {
  return (
    <div className="w-full">
      <Release release={RELEASES.STATIC.LIVE}>
        <Live />
      </Release>
      <Release release={RELEASES.STATIC.POSTLIVE}>
        <Postlive />
      </Release>
    </div>
  );
};

export default Home;
