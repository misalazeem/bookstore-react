import { React } from 'react';
import Books from './Books';
import AddBook from './AddBook';

function Home() {
  const BookList = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Misal',
      progress: 70,
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Azeem',
      progress: 80,
    },
  ];
  return (
    <>
      <div className="home">
        <Books BookList={BookList} />
        <AddBook />
      </div>
    </>
  );
}

export default Home;
