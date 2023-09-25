import { BaseUrl } from "../constant/route";

export const ApiEndpoints = {
    posts: {
        list: `${BaseUrl}/posts`,
        detail: (slugId: string) => `${BaseUrl}/posts/${slugId}`
    }
}