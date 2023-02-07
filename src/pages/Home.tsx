import { useLoaderData, Form } from 'react-router-dom';
import { Posts } from '../router/loader';

export default function Home() {
  const data = useLoaderData() as { posts: Posts[]; post: Posts };
  console.log(data);

  async function handleClick() {}

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempore.
        Ab repellat quod quos eveniet dolores possimus suscipit hic fuga dolore
        enim pariatur quia aperiam unde laboriosam, vero debitis odit veniam
        nobis sint ipsum non, quis temporibus? Temporibus, voluptate odit quod
        aspernatur, ducimus nulla ab quas dolor suscipit dolores ex!
      </p>
      {data.posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <Form method='post'>
        <button type='submit'>Crear Post</button>
      </Form>
    </div>
  );
}
