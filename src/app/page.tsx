async function getData() {
  const data = await fetch('https://pokeapi.co/api/v2/item-pocket');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 4000);
  });
  console.log(123);
  return data.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <article className="text-red-400">
        {data.results.map((item: any) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </article>
    </>
  );
}
