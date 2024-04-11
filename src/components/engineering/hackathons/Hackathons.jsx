import Header from "./Header";
import Hacks from "./Hacks";
import CutieLogo from "@/public/engineering/hackathon/cutielogo.webp";
import Cutie from "@/public/engineering/hackathon/cutie.webp";
import RoseLogo from "@/public/engineering/hackathon/roselogo.webp";
import Rose from "@/public/engineering/hackathon/rose.webp";
import BearLogo from "@/public/engineering/hackathon/bearlogo.webp";
import Bear from "@/public/engineering/hackathon/bear.webp";
import CitrusLogo from "@/public/engineering/hackathon/citruslogo.webp";
import Citrus from "@/public/engineering/hackathon/citrus.webp";
import DesignLogo from "@/public/engineering/hackathon/designlogo.webp";
import Design from "@/public/engineering/hackathon/design.webp";

const Hackathons = () => {
  return (
    <div>
      <Header />
      <Hacks
        id={1}
        img={Cutie}
        alt1="Photo of hackathon participants"
        logo={CutieLogo}
        alt2="Cutie Hack Logo"
        title="Cutiehack"
        text="Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside where hackers are challenged to create a cool project within the time frame to demo in order to win awesome prizes and participate in workshops, fun games, and networking."
      />
      <Hacks
        id={2}
        img={Rose}
        alt1="Photo of hackathon speaker"
        logo={RoseLogo}
        alt2="Rose Hack Logo"
        title="Rosehack"
        text="Rose Hack is UC Riverside's 24-hour hackathon, one of the few women-centric hackathons in California! Founded by the female leaders of the Association for Computing Machinery (ACM-W) and the Society of Women Engineers (SWE)."
      />
      <Hacks
        id={3}
        img={Bear}
        alt1="Photo of hackathon participants"
        logo={BearLogo}
        alt2="Bear Hack Logo"
        title="Bearhack"
        text="Founded by the Biomedical Engineering Society (BMES), Bearhack is a medical-centric hackathon event hosted at University of California, Riverside. Our goal is to provide an opprotunity for hackers to build new projects and expand their networks."
      />
      <Hacks
        id={4}
        img={Design}
        alt1="Photo of hackathon participants"
        logo={DesignLogo}
        alt2="Designverse Logo"
        title="DesignVerse"
        text="At DesignVerse, our goal is to empower our community of students who are interested in design-like thinking and provide career developmental opportunities through our workshops, mentorship, and networking events."
      />
      <Hacks
        id={5}
        img={Citrus}
        alt1="Photo of hackathon participants"
        logo={CitrusLogo}
        alt2="Citrus Hack Logo"
        title="Citrus Hack"
        text="Citrus Hack is a 36-hour hackathon hosted by the University of California, Riverside. Hackers are challenged to create a project on the spot and demo it to compete for prizes. Our goal is to provide learning and networking opportunities for our community of hackers."
      />
      <div className="h-52 w-full bg-hackathon-blue-200" />
    </div>
  );
};

export default Hackathons;
