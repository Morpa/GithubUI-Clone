import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface iProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<iProps> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <S.Container>
      <S.Topside>
        <header>
          <S.RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </S.Topside>
      <S.Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <S.StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <S.ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </S.Botside>
    </S.Container>
  );
};

export default RepoCard;
