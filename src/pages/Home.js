import React, { useState } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [searchopt, setSearchopt] = useState('shows');
  const isSearchShow = searchopt === 'shows';
  const onRadioChange = ev => {
    setSearchopt(ev.target.value);
  };
  const OnInputChange = e => {
    setInput(e.target.value);
  };

  const OnSearch = () => {
    apiGet(`search/${searchopt}?q=${input}`).then(rt => {
      setResult(rt);
    });
  };

  const renderResult = () => {
    if (result && result.length === 0) {
      return <p>No result found !</p>;
    }
    if (result && result.length > 0) {
      return result[0].show ?
          result.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          )):result.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ))
      
    }
    return null;
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) OnSearch();
  };
  return (
    <div>
      <MainPageLayout>
        <input
          type="text"
          onChange={e => OnInputChange(e)}
          value={input}
          onKeyDown={onKeyDown}
          placeholder="search for something"
        />
        <div>
          <label htmlFor="show-search">
            <input
              type="radio"
              id="search-show"
              value="shows"
              checked={isSearchShow}
              onChange={onRadioChange}
            />
            Shows{' '}
          </label>
          <label htmlFor="actor -search">
            <input
              type="radio"
              id="search-actor"
              value="people"
              checked={!isSearchShow}
              onChange={onRadioChange}
            />
            Actor{' '}
          </label>
        </div>
        <button type="button" onClick={() => OnSearch()}>
          Search
        </button>
        {renderResult()}
      </MainPageLayout>
    </div>
  );
};
export default Home;
