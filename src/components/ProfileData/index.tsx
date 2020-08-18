import React from 'react';

import * as S from './styles';

interface iProps {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<iProps> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <S.Container>
      <S.Flex>
        <S.Avatar src={avatarUrl} alt={username} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </S.Flex>
      <S.Row>
        <li>
          <S.PeopleIcon />
          <b>{followers}</b>
          <span>.</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </S.Row>
      <S.Column>
        {company && (
          <li>
            <S.CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <S.LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <S.EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <S.BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </S.Column>
    </S.Container>
  );
};

export default ProfileData;
