import Link from "next/link";
import matter from "gray-matter";
import { FaGithub } from "react-icons/fa";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

async function getBlogPost() {
  const dirPath = process.cwd() + "/src/engineering/";
  const blogFiles = fs.readdirSync(dirPath);
  const markdownContents = blogFiles.map((file) => {
    const filepath = `${dirPath}/${file}`;
    const fileContents = fs.readFileSync(filepath);
    const parsedMarkdown = matter(fileContents);
    return parsedMarkdown;
  });
  return markdownContents;
}

const convertMarkdownToHtml = async (content) => {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
};

const Blog = async () => {
  const blogData = await getBlogPost();

  return (
    <>
      <div className="fixed top-0 w-full h-16 flex justify-end items-center bg-hackathon-blue-200">
        <div className="w-2/6 flex justify-between no-underline mr-10">
          <Link
            href="#examples"
            className="text-white text-xl mx-2 no-underline font-light"
          >
            examples
          </Link>
          <Link
            href="#start"
            className="text-white text-xl mx-2 no-underline font-light"
          >
            start
          </Link>
          <Link
            href="#blogs"
            className="text-white text-xl mx-2 no-underline font-light"
          >
            blogs
          </Link>
          <Link href="#home">
            <FaGithub className="text-white text-3xl" />
          </Link>
        </div>
      </div>

      <div className="w-10/12 mt-[10%] m-auto">
        <p className="m-0 text-3xl font-bold">Engineering Blogs</p>
        <p className="my-3 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id
          nunc id lectus condimentum auctor a et justo. Integer aliquet molestie
          semper.
        </p>

        <div className="w-full my-8 flex grid grid-cols-5 gap-4">
          {await Promise.all(
            blogData.map(async (blog) => {
              const title = blog.data.title ?? "UNTITLED";
              const preview = await convertMarkdownToHtml(
                blog.content.substring(0, 75)
              );
              return (
                <div key={blog.data.id} className="bg-gray-200 rounded-lg mr-5">
                  <p className="font-bold text-lg m-0 pl-2 pt-2">{title}</p>
                  <div
                    className="text-sm m-0 pl-2 pb-2"
                    dangerouslySetInnerHTML={{ __html: preview }}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
