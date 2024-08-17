import HomeActions from '@/components/shared/HomeActions';
import PostList from '@/components/shared/PostList';
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';
import React, { useState } from 'react';
import { useGetPostsQuery } from '@/store/api/postApi';

const HomePage = () => {
  const [searchString, setSearchString] = useState('');
  const handleChange = (e) => setSearchString(e.target.value);
  const debouncedString = useDebounce(searchString, 200);

  const { data, isLoading, refetch } = useGetPostsQuery({ userId: debouncedString });

  return (
    <div className='pt-2'>
      <div className='container'>
        <Input
          placeholder='User id...'
          value={searchString}
          onChange={handleChange}
        />
        <HomeActions className='my-2' refetch={refetch}/>
        <PostList className='mt-2 pb-2' data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default HomePage;
