import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeName } from '../../styles/themes';
import * as S from './styles';

interface iProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<iProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      navigate(`/${search.toLowerCase().trim()}`);
    },
    [navigate, search],
  );

  const toggleTheme = useCallback(() => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }, [setThemeName, themeName]);

  return (
    <S.Container>
      <S.GithubLogo onClick={toggleTheme} />
      <S.SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </S.SearchForm>
    </S.Container>
  );
};

export default Header;
