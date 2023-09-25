/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { PostApi } from "@/app/api/api";
import { ApiEndpoints } from "@/app/api/http";
import PostDetailCard from "@/app/components/Card/PostDetailCard/PostDetailCard";
import React from "react";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
const detail = () => {
  const searchParams = useSearchParams();
  const slugId = searchParams.get("slugId") as string;
  const { data: postDetail, isLoading } = useSWR(
    [slugId, ApiEndpoints.posts.detail(slugId)],
    () => PostApi.fetchPostDetail(slugId)
  );
  if (isLoading) {
    return (
      <div className="w-full items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[40px]">
      <h1 className="text-[20px] font-semibold">Post Detail</h1>
      <div className="w-auto pt-[40px]">
        <PostDetailCard
          body={postDetail?.body as string}
          id={postDetail?.id as number}
          title={postDetail?.title as string}
          userId={postDetail?.userId as number}
        />
      </div>
    </div>
  );
};

export default detail;
