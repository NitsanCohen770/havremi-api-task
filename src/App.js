import { useEffect } from 'react';
import useAxios from 'axios-hooks';
import Card from './components/Card';

function App() {
  const [{ data, loading }, refetch] = useAxios('https://randomuser.me/api');

  useEffect(() => {
    refetch();
  }, [refetch]);

  const userData = {
    username: data?.results[0].login.username,
    password: data?.results[0].login.password,
    fullName: `${data?.results[0].name.title} ${data?.results[0].name.first} ${data?.results[0].name.last}`,
    email: data?.results[0].email,
    country: data?.results[0].location.country,
    city: data?.results[0].location.city,
    imageLink: data?.results[0].picture.large,
  };
  return (
    <div>
      <Card userData={userData} isLoading={loading} />
    </div>
  );
}

export default App;
