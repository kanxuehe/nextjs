'use client';
interface IProps {
  data: any;
}
export default function Item({ data }: IProps) {
  function handleClick(item: any) {
    console.log(item);
  }
  return <div onClick={() => handleClick(data)}>{data.name}</div>;
}
