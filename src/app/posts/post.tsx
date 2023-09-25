"use client";
import React, { useCallback, useState } from "react";
import PostCard from "../components/Card/PostCard/PostCard";
import { ERoutes } from "../constant/route";
import useSWR from "swr";
import { PostApi } from "../api/api";
import { ApiEndpoints } from "../api/http";
import PaginationTable from "../components/Table/Pagination/PaginationTable";
const Post = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { data: posts, isLoading } = useSWR(ApiEndpoints.posts.list, () =>
    PostApi.fetchPosts()
  );
  const handleSearch = useCallback((searchValue: string) => {
    setSearchValue(searchValue);
  }, []);
  if (isLoading) {
    return (
      <div className="w-full items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-[12px]">
      <input
        className="border-[1px] border-gray-300 outline-none rounded-[12px] p-2 min-w-full shadow-sm"
        placeholder="Search posts..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <h1 className="text-[20px] font-semibold">List Posts</h1>
      {posts
        ?.filter(
          (item) =>
            item.title.includes(searchValue) || item.body.includes(searchValue)
        )
        .map((item) => (
          <PostCard
            key={item.id}
            href={{
              pathname: ERoutes.POST_DETAIL.replace(":slugId", String(item.id)),
              query: { slugId: item.id },
            }}
            title={item.title}
            body={item.body}
          />
        ))}
      <PaginationTable defaultCurrent={1} total={Number(posts?.length)} />
    </div>
  );
};

export default Post;
