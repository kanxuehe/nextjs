import Item from '@/components/Item';
async function getData() {
  const data = await fetch('https://pokeapi.co/api/v2/item-pocket');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 4000);
  });
  return data.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <article className="text-red-400">
        {data.results.map((item: any) => (
          <Item key={item.name} data={item} />
        ))}
      </article>
    </>
  );
}
