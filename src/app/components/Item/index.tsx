'use client';
export default function Item({ data }) {
  function handleClick(item) {
    console.log(item);
  }
  return <div onClick={() => handleClick(data)}>{data.name}</div>;
}
