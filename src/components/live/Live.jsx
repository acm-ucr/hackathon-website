import Landing from "./Landing";
import About from "./About";
import Schedule from "./schedule/Schedule";
import Tracks from "./Tracks";
import Sponsors from "./Sponsors";
import Team from "./Team";
import Committees from "./Committees";
import Judges from "./Judges";
import FAQ from "./faq/FAQ";
import Footer from "./Footer";
const Live = () => {
  return (
    <div>
      <Landing />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <Team />
      <Committees />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
