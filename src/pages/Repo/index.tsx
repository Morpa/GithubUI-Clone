import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { APIRepo } from '../../@types';
import * as S from './styles';

interface iData {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<iData>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async response => {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repo: await response.json() },
        );
      },
    );
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Container>
      <S.Breadcrumb>
        <S.RepoIcon />

        <Link className="username" to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className="reponame" to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </S.Breadcrumb>

      <p>{data.repo.description}</p>

      <S.Stats>
        <li>
          <S.StarIcon />
          <b>{data.repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <S.ForkIcon />
          <b>{data.repo.forks}</b>
          <span>forks</span>
        </li>
      </S.Stats>

      <S.LinkButton href={data.repo.html_url}>
        <S.GithubIcon />
        <span>View on GitHub</span>
      </S.LinkButton>
    </S.Container>
  );
};

export default Repo;
