import axios from "axios";
import { IPost } from "../constant/type";
import { ApiEndpoints } from "./http";
export const PostApi = {
  fetchPosts: async (): Promise<IPost[]> => {
    const response = await axios.get(ApiEndpoints.posts.list);
    return response.data;
  },
  fetchPostDetail: async (slugId: string): Promise<IPost> => {
    const response = await axios.get(ApiEndpoints.posts.detail(slugId));
    return response.data;
  },
};
