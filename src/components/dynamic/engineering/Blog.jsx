"use client";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import matter from "gray-matter";
import { FaGithub } from "react-icons/fa";

const Blog = () => {
  const [title, setTitle] = useState({ title: "Title" });

  useEffect(() => {
    const fetchMarkdownTitle = async () => {
      const response = await fetch("@/src/engineering/tailwind.mdx");
      const markdownText = await response.text();
      const parsedMarkdown = matter(markdownText);
      setTitle(parsedMarkdown.data);
    };
    fetchMarkdownTitle();
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        className="w-full h-16 flex justify-end items-center bg-hackathon-blue-200"
      >
        <Container className="w-2/6 flex justify-between no-underline mr-10">
          <Nav.Link
            href="#examples"
            className="text-white text-xl mx-2 no-underline font-light"
          >
            examples
          </Nav.Link>
          <Nav.Link
            href="#start"
            className="text-white text-xl mx-2 no-underline font-light"
          >
            start
          </Nav.Link>
          <Nav.Link
            href="#blogs"
            className="text-white text-xl mx-2 no-underline font-light"
          >
            blogs
          </Nav.Link>
          <Navbar.Brand href="#home">
            <FaGithub className="text-white text-3xl" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="w-10/12 mt-12 m-auto">
        <p className="m-0 text-3xl font-bold">Engineering Blogs</p>
        <p className="my-3 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id
          nunc id lectus condimentum auctor a et justo. Integer aliquet molestie
          semper.
        </p>

        <div className="w-full flex">
          <div className="bg-gray-200 rounded-lg mr-5">
            <p className="font-bold text-lg m-0 pl-2 pt-2">{title.title}</p>
            <p className="m-0 pl-2 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
