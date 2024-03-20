import Tailwind from "@/engineering/tailwind.mdx";
import Toast from "@/engineering/toast.mdx";
import Component from "@/engineering/component.mdx";
import CodeQualityFlow from "@/engineering/codequalityflow.mdx";
import ReactVirtual from "@/engineering/react-virtual.mdx";
import Calendar from "@/engineering/calendar.mdx";
import Compressor from "@/engineering/compressor.mdx";
import Fault from "@/utils/error";
import Blog from "@/components/dynamic/engineering/Blog";

const Page = ({ params }) => {
  const MDX = {
    tailwind: <Tailwind />,
    component: <Component />,
    toast: <Toast />,
    codequalityflow: <CodeQualityFlow />,
    "react-virtual": <ReactVirtual />,
    calendar: <Calendar />,
    compressor: <Compressor />,
    blog: <Blog />,
  };

  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  const isBlog = params.type == "blog";

  if (MDX.hasOwnProperty(params.type)) {
    return (
      <div
        className={`w-full flex items-start justify-center font-poppins ${
          isBlog ? "" : "my-8"
        }`}
      >
        <title>{`Engineering | ${capitalizeFirstLetter(params.type)}`}</title>
        <div
          className={`prose min-h-screen ${
            isBlog ? "max-w-full m-0 p-0 w-full" : ""
          }`}
        >
          {MDX[params.type]}
        </div>
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
