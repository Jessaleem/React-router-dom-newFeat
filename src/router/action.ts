import { createPost } from '../lib/createPost';

export async function postsAction() {
  const post = await createPost();

  return { post };
}
