import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";

const getBlogPost = async () => {
  const directory = process.cwd() + "/src/engineering/";
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const path = `${directory}/${file}`;
    const contents = fs.readFileSync(path);
    const markdown = matter(contents);

    return markdown.data;
  });
};
const Blog = async () => {
  const data = await getBlogPost();

  const blogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <div className="w-10/12 mt-[10%] m-auto">
        <title>Engineering | Engineering Blogs</title>
        <p className="m-0 text-3xl font-bold text-center md:text-left">
          Engineering Blogs
        </p>
        <p className="my-3 w-full md:w-3/4 text-center md:text-left">
          Check out our engineering blogs to learn more about the behind the
          scenes as engineers discuss various challenges, migrations,
          bottlenecks. Our engineering blogs captures how our engineers approach
          problems and bring innovative solutions to the table.
        </p>
        <div className="w-full my-8 grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3 gap-4">
          {blogs.map(({ title, author, date, link }, index) => (
            <Link
              href={`/engineering/blog/${link}`}
              key={index}
              className="bg-hackathon-blue-200 rounded-lg px-3 py-2 hover:opacity-80 text-white hover:cursor-pointer"
            >
              <p className="font-semibold text-lg">{title}</p>
              <p className="text-sm text-gray-300">{author}</p>
              <p className="text-sm flex justify-end text-gray-300">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
