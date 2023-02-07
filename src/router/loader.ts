import { getPosts } from '../lib/getPosts';

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function loader() {
  const posts = (await getPosts()) as Posts[];

  return { posts };
}
