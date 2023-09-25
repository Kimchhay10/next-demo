import React from "react";
import Link, { LinkProps } from "next/link";

interface PostDetailCardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const PostDetailCard: React.FC<PostDetailCardProps> = ({
  userId,
  id,
  title,
  body,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-300 rounded-[12px] p-[8px] max-w-[500px]">
      <span>User Id: {userId}</span>
      <span>Id: {id}</span>
      <h1 className="text-[20px] font-semibold">{title}</h1>
      <span>{body}</span>
    </div>
  );
};

export default PostDetailCard;
