import Tailwind from "@/engineering/tailwind.mdx";
import Component from "@/engineering/component.mdx";
import ReactVirtual from "@/engineering/react-virtual.mdx";
import Fault from "@/utils/error";

const Page = ({ params }) => {
  const MDX = {
    tailwind: <Tailwind />,
    component: <Component />,
    "react-virtual": <ReactVirtual />,
  };

  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  if (MDX.hasOwnProperty(params.type)) {
    return (
      <div className="w-full flex items-start justify-center my-8 font-poppins">
        <title>{`Engineering | ${capitalizeFirstLetter(params.type)}`}</title>
        <div className="prose min-h-screen">{MDX[params.type]}</div>
      </div>
    );
  } else {
    throw new Fault(
      404,
      "Page Not Found",
      "The page you are looking for does not seem to exist"
    );
  }
};

export default Page;
