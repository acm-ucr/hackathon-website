"use client";
import Toolbar from "../components/Toolbar";
const Home = () => {
  const handleTagClick = (tagText) => {
    console.log(`Tag "${tagText}" clicked!`);
  };

  const tags = [
    { text: "winner", name: "" },
    { text: "disqualified", name: "" },
    { text: "pending", name: "" },
  ];

  return <Toolbar tags={tags} onClick={handleTagClick} />;
};

export default Home;
