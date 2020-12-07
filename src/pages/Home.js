import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import { CustomRadio } from '../components/CustomRadio';
import { MainPageLayout } from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { FlexGrid } from '../components/styled';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [result, setResult] = useState(null);
  const [searchopt, setSearchopt] = useState('shows');
  const [isLoading, setIsLoading] = useState(false);
  const isSearchShow = searchopt === 'shows';
  const onRadioChange = ev => {
    setSearchopt(ev.target.value);
  };
  const OnInputChange = e => {
    setInput(e.target.value);
  };
  const OnSearch = () => {
    setIsLoading(true);
    apiGet(`search/${searchopt}?q=${input}`).then(rt => {
      setResult(rt);
      setTimeout(()=>setIsLoading(false),1000)
      ;
    });
  };

  const renderResult = () => {
    if(isLoading){
      return <FlexGrid><div className="loader"></div></FlexGrid>
    }
    if (result && result.length === 0) {
      return <FlexGrid><b>No result found!</b></FlexGrid>;
    }
    if (result && result.length > 0) {
      return result[0].show ? (
        <ShowGrid result={result} />
      ) : (
        <ActorGrid result={result} />
      );
    }
    return null;
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) OnSearch();
  };
  return (
    <div>
      <MainPageLayout>
        <SearchInput
          type="text"
          onChange={e => OnInputChange(e)}
          value={input}
          onKeyDown={onKeyDown}
          placeholder="search for something"
        />
        <RadioInputsWrapper>
          <div>
            <CustomRadio
              id="search-show"
              value="shows"
              checked={isSearchShow}
              onChange={onRadioChange}
              label="Shows"
            />
          </div>
          <div>
            <CustomRadio
              id="search-actor"
              value="people"
              checked={!isSearchShow}
              onChange={onRadioChange}
              label="Actor"
            />
          </div>
        </RadioInputsWrapper>
        <SearchButtonWrapper>
          <button type="button" onClick={() => OnSearch()}>
            Search
          </button>
        </SearchButtonWrapper>
        {renderResult()}
      </MainPageLayout>
    </div>
  );
};
export default Home;
