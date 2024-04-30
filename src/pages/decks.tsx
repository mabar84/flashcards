import { useGetDecksQuery } from '@/services/base-api';

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.items.map(el => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
};
