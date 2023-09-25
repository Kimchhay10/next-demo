"use client";
import React, { useCallback, useState } from "react";
import PostCard from "../components/Card/PostCard/PostCard";
import { ERoutes } from "../constant/routes";
import useSWR from "swr";
import { PostApi } from "../api/api";
import { ApiEndpoints } from "../api/http";
import PaginationTable from "../components/Table/Pagination/PaginationTable";
const Post = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: posts, isLoading } = useSWR(ApiEndpoints.posts.list, () =>
    PostApi.fetchPosts()
  );
  const handleSearch = useCallback((searchValue: string) => {
    setSearchValue(searchValue);
    setCurrentPage(1);
  }, []);
  const pageSize = 10; // Number of items per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const filteredPosts = posts
    ?.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(startIndex, endIndex);
  const isEmpty = filteredPosts && filteredPosts.length === 0;
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
      {isEmpty ? (
        <span>No Result...!</span>
      ) : (
        <div className="space-y-[12px]">
          {filteredPosts?.map((item) => (
            <PostCard
              key={item.id}
              href={{
                pathname: ERoutes.POST_DETAIL.replace(
                  ":slugId",
                  String(item.id)
                ),
                query: { slugId: item.id },
              }}
              title={item.title}
              body={item.body}
            />
          ))}
          <PaginationTable
            showSizeChanger={false}
            className="pt-[20px]"
            defaultCurrent={1}
            current={currentPage}
            total={
              posts?.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              ).length
            }
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
