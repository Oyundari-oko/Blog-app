"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Parent } from "../components/Parent";
const Page = () => {
  const path = usePathname();
  const [blog, setBlog] = useState("");
  const web = async () => {
    const webSeit = await fetch(`https://dev.to/api/articles/${path}`);
    const data = await webSeit.json();
    setBlog(data);
  };

  useEffect(() => {
    web();
  }, []);
  console.log(blog);

  return (
    <Parent>
      <div className="style">
        <div className="poster">
          <div className="imgPage">
            <img className="pageImage" src={blog.cover_image} />
          </div>

          <div>
            <div className="post">
              <div className="human">
                <div className="profile">
                  <div className="prof">
                    <img className="pro" src={blog.user?.profile_image} />
                  </div>

                  <div className="userEdit">
                    <div className="namee">{blog.user?.twitter_username}</div>
                    <div className="twitterName">{blog.user?.name}</div>
                  </div>
                </div>

                <div>
                  <div className="words">{blog.readable_publish_date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list">
          <div className="styk">
            <div className="title">{blog.title}🥹</div>
            <div className="description">📍Type : {blog.type_of}</div>
            <div className="lists">📍List : {blog.tag_list}</div>
            <div className="description">
              📍Description : {blog.description}
            </div>
            <div className="description">📍Slug : {blog.slug}</div>
            <div className="description">
              📍Public reactions count : {blog.public_reactions_count}
            </div>
            <div className="description">
              📍Reading time minutes : {blog.reading_time_minutes}
            </div>
            <div className="description">📍Created at : {blog.created_at}</div>
          </div>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
