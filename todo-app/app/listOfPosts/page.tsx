const getPostsData = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default async function ListOfPosts() {
  const posts = await getPostsData();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      {posts &&
        posts.map((el: any) => {
          return <div className="p-4">{el.title}</div>;
        })}
    </div>
  );
}
