import Fault from "@/utils/error";
import Blog from "@/components/dynamic/engineering/Blog";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

async function getBlogPosts() {
  const dirPath = process.cwd() + "/src/engineering/";
  const blogFiles = fs.readdirSync(dirPath);
  const markdownContents = blogFiles.map((file) => {
    const filepath = `${dirPath}/${file}`;
    const fileContents = fs.readFileSync(filepath);
    const parsedMarkdown = matter(fileContents);
    return [file.replace(/\.[^/.]+$/, ""), parsedMarkdown];
  });
  return Object.fromEntries(markdownContents);
}

const convertMarkdownToHtml = async (content) => {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
};

const Page = async ({ params }) => {
  const blogData = await getBlogPosts();

  if (params.type == "blog" || params.type == null) {
    return <Blog />;
  } else if (blogData.hasOwnProperty(params.type)) {
    const blog = blogData[params.type];
    const postData = await convertMarkdownToHtml(blog.content);
    return (
      <div
        className={"w-full flex items-start justify-center font-poppins my-8"}
      >
        <title>{`Engineering | ${blog.data.title}`}</title>
        <div className="prose min-h-screen">
          <div dangerouslySetInnerHTML={{ __html: postData }}></div>
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
