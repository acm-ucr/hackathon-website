import Fault from "@/utils/error";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const getBlogPosts = () => {
  const directory = process.cwd() + "/src/engineering/";
  const files = fs.readdirSync(directory);

  const contents = files.map((file) => {
    const path = `${directory}/${file}`;
    const blog = fs.readFileSync(path);
    const markdown = matter(blog);
    return [file.replace(/\.[^/.]+$/, ""), markdown];
  });

  return Object.fromEntries(contents);
};

const convertMarkdownToHtml = async (content) =>
  (await remark().use(html).process(content)).toString();

const Page = async ({ params }) => {
  const article = await getBlogPosts();

  if (article.hasOwnProperty(params.type)) {
    const { content, data } = article[params.type];
    const markdown = await convertMarkdownToHtml(content);

    return (
      <div
        className={"w-full flex items-start justify-center font-poppins my-8"}
      >
        <title>{`Engineering | ${data.title}`}</title>
        <div className="prose min-h-screen">
          <article dangerouslySetInnerHTML={{ __html: markdown }} />
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
