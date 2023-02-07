export async function createPost() {
  const newPost = {
    userId: 10,
    id: 300,
    title: 'dignissimos eum dolor ut enim et delectus in',
    body: 'commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem',
  };
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();
  return data;
}
