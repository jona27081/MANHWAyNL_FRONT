import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_PROMPTS_QUERY = gql`
  query GetPrompts($search: String!) {
    prompts(search: $search) {
      id
      prompt
      result
      fecha
      modelo
      promptBy {
        username
      }
    }
  }
`;

const Filter = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(GET_PROMPTS_QUERY);

  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button
          onClick={() =>
            executeSearch({
              variables: { search: searchFilter } // Modificamos 'filter' a 'search'
            })
          }
        >
          OK
        </button>
      </div>
      {data &&
        data.prompts.map((prompt) => (
          <div key={prompt.id}>
            <p>Prompt: {prompt.prompt}</p>
            <p>Result: {prompt.result}</p>
            <p>Fecha: {prompt.fecha}</p>
            <p>Modelo: {prompt.modelo}</p>
            <p>PromptBy: {prompt.promptBy.username}</p>
          </div>
        ))}
    </>
  );
};

export default Filter;
