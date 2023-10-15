import Release from "@/components/static/Release";
import RELEASES from "@/data/Releases";
import Live from "@/components/static/live/Live";
import Postlive from "@/components/static/postlive/Postlive";
import Prelive from "@/components/static/prelive/Prelive";
import Upcoming from "@/components/static/upcoming/Upcoming";

const Home = () => {
  return (
    <>
      <Release release={RELEASES.STATIC.UPCOMING}>
        <Upcoming />
      </Release>
      <Release release={RELEASES.STATIC.PRELIVE}>
        <Prelive />
      </Release>
      <Release release={RELEASES.STATIC.LIVE}>
        <Live />
      </Release>
      <Release release={RELEASES.STATIC.POSTLIVE}>
        <Postlive />
      </Release>
    </>
  );
};

export default Home;
