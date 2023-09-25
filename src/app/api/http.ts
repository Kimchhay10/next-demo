export const baseUrl = "https://jsonplaceholder.typicode.com";

export const ApiEndpoints = {
  posts: {
    list: `${baseUrl}/posts`,
    detail: (slugId: string) => `${baseUrl}/posts/${slugId}`,
  },
};
