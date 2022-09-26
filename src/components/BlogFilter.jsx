import { useState } from 'react';

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;

    console.log(query, isLatest);

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type='text'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label style={{ padding: '0 15px' }}>
        <input
          type='checkbox'
          name='latest'
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{' '}
        New only
      </label>
      <button type='submit'>Search</button>
    </form>
  );
};

export { BlogFilter };
