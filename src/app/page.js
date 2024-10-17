"use client";
import { useEffect, useState } from "react";
import WritingApp from "./compon/Write";
import { useRouter } from "next/navigation";
import { Parent } from "./components/Parent";
const Page = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const pages = async () => {
    const dataJSON = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${page}`
    );
    const res = await dataJSON.json();
    setData(res);
    console.log(res);
  };

  const [page, setPage] = useState(1);
  const addComments = () => {
    setPage(page + 1);
    console.log(page);
  };
  const minusComments = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    pages();
  }, [page]);

  const router = useRouter();
  const routeringSeit = (id) => {
    router.push(String(id));
  };
  if (data === null) return "Loading";

  const blogsSearching = data.filter((blog) => {
    return blog.title.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <Parent>
      <div className="blogs">
        <div className="flex">
          <h1 className="word">All blog Post</h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="searching..."
            className="input"
          ></input>
        </div>

        <div className="flexing">
          {blogsSearching.map((app, index) => {
            return (
              <div onClick={() => routeringSeit(app.id)}>
                <WritingApp
                  key={index}
                  cover_image={app.cover_image}
                  title={app.title}
                  profile_image={app.profile_image}
                  description={app.description}
                  user={app.user}
                  type_of={app.type_of}
                  published_timestamp={app.published_timestamp}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="page">
        <button className="buttonStyle" onClick={() => minusComments()}>
          return
        </button>
        <div className="num"> {page} </div>
        <button className="buttonStyle" onClick={() => addComments()}>
          next
        </button>
      </div>
    </Parent>
  );
};
export default Page;
