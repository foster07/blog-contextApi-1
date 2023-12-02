import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

export default function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="max-w-[980px] w-full min-h-screen my-20  mx-auto  flex flex-col gap-5   items-center justify-center ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Posts Found</div>
      ) : (
        <div className="">
          <div className=" flex flex-col gap-5">
            {posts.map((post) => (
              <div className=" m-3" key={post.id}>
                <p className="text-xl font-semibold">{post.title}</p>
                <p>
                  By
                  <span className="text-bold italic mx-1 ">{post.author}</span>
                  on
                  <span className="underline text-lg text-red-700 mx-1 text-bold">
                    {post.category}
                  </span>
                </p>
                <p>{`Posted on ${post.date}`}</p>
                <p className="pt-3 pb-2">{post.content}</p>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      className="text-blue-700 font-semibold underline"
                      key={index}
                    >{`#${tag} `}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
