import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FilterTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
`;

const FilterOption = styled.label`
  display: block;
  margin: 0.5rem 0;
`;

const FilterInput = styled.input`
  margin-right: 0.5rem;
`;

interface ContentFilterProps {
  onFilterChange: (filters: { age: number; categories: string[] }) => void;
}

function ContentFilter({ onFilterChange }: ContentFilterProps) {
  const [age, setAge] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ age, categories });
  };

  return (
    <FilterContainer>
      <FilterTitle>Content Filter Settings</FilterTitle>
      <form onSubmit={handleSubmit}>
        <FilterOption>
          <FilterInput
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Set Age Limit"
          />
          Age Limit
        </FilterOption>
        <FilterOption>
          <FilterInput
            type="checkbox"
            checked={categories.includes('educational')}
            onChange={() => handleCategoryChange('educational')}
          />
          Educational
        </FilterOption>
        <FilterOption>
          <FilterInput
            type="checkbox"
            checked={categories.includes('entertainment')}
            onChange={() => handleCategoryChange('entertainment')}
          />
          Entertainment
        </FilterOption>
        <FilterOption>
          <FilterInput
            type="checkbox"
            checked={categories.includes('games')}
            onChange={() => handleCategoryChange('games')}
          />
          Games
        </FilterOption>
        <button type="submit">Apply Filters</button>
      </form>
    </FilterContainer>
  );
}

export default ContentFilter; 