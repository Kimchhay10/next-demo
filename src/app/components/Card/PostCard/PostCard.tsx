import React from "react";
import Link, { LinkProps } from "next/link";

interface PostCardProps extends LinkProps {
  title: string;
  body: string;
}
const PostCard: React.FC<PostCardProps> = ({title, body, ...rest }) => {
  return (
    <Link
      {...rest}
      className="w-full h-full flex flex-col bg-gray-300 rounded-[12px] p-[8px]"
    >
      <h1 className="text-[20px] font-semibold">{title}</h1>
      <span>{body}</span>
    </Link>
  );
};

export default PostCard;
