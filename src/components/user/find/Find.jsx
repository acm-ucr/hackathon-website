import Title from "@/components/admin/Title";
import Toolbar from "./Toolbar";
import Idea from "./Idea";

const Find = () => {
  const ideas = [
    {
      title: "Idea 1",
      technologies: ["Next.js", "PyTorch"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      contact: "Please contact me on Discord using webdiv",
    },
    {
      title: "Idea 2",
      technologies: ["Python", "TensorFlow"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      contact: "Please contact me on Discord using webdiv",
    },
    {
      title: "Idea 3",
      technologies: ["Python", "TensorFlow"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      contact: "Please contact me on Discord using webdiv",
    },
    {
      title: "Idea 4",
      technologies: ["Python", "TensorFlow"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      contact: "Please contact me on Discord using webdiv",
    },
  ];

  return (
    <div className="flex w-full flex-col h-[calc(100vh-48px)]">
      <div className="pb-3 pt-4">
        <Title title="Find a Team" />
      </div>
      <Toolbar />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {ideas.map(({ title, technologies, description, contact }, index) => (
          <Idea
            key={index}
            title={title}
            technologies={technologies}
            description={description}
            contact={contact}
          />
        ))}
      </div>
    </div>
  );
};

export default Find;
