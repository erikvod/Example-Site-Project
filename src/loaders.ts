export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
  relatedPosts: Post
};
export type Post = {
  userId: number,
  user: User
  id: number,
  comments?: Comment[],
  title: string,
  body: string
};

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  }
};
export type CommentLoaderData = {
  comments: Comment[],
  posts: Post[]
}
export type PostLoaderData = {
  posts: Post[],
  users: User[]
};

export async function userLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

export async function postsLoader(): Promise<PostLoaderData> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const comments = await commentsLoader();
  const users = await userLoader();
  const postData = data.map((post) => {
    return {
      ...post,
      user: users.find((u) => post.userId === u.id),
      comments: comments.comments.filter((c) => post.id === c.postId),
    };
  });
  return {
    posts: postData,
    users: users
  };
}

export async function commentsLoader(): Promise<CommentLoaderData> {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();

  const relatedPosts = await getPosts();
  data=data.map((comment) => {
    return {
      ...comment,
      relatedPosts: relatedPosts.find((p) => comment.postId === p.id),
    };
  });
  return {
    comments:data,
    posts: relatedPosts
  }
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
}
