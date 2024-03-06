import Button from "@/components/engineering/Button";

const Landing = () => {
  return (
    <div className="flex flex-row items-center w-full min-h-screen">
      <div className="w-5/12 ml-12">
        <div className="border-l-8 border-hackathon-blue-100 px-5 text-hackathon-green-300 text-3xl mb-3">
          <div className="text-6xl text-hackathon-blue-200 font-bold">
            Hackathon Website
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
        <Button
          text="GitHub"
          link="https://github.com/acm-ucr/hackathon-website"
          color="green"
          size="xl"
        />
      </div>
      <div>hello</div>
    </div>
  );
};

export default Landing;
