import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import avatar from '../data/media/avatar.png';

const gap = 40;
const width = 800;
const height = width / 1.618;
const textWidth = height - gap * 2;
const picWidth = width - textWidth - gap * 3;

const StyledProfile = styled.div`
  ${({ theme: { color, breakpoints } }) => css`
    box-sizing: border-box;
    width: ${width}px;
    min-height: ${height}px;

    display: flex;

    background-color: ${color.dark};
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    padding: ${gap}px;

    display: grid;
    grid-template-columns: ${picWidth}px ${textWidth}px;
    grid-gap: ${gap}px;

    ${breakpoints.tablet} {
      grid-template-columns: auto;
      width: 100%;
    }
  `}
`;

const LeftColumn = styled.div`
  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.tablet} {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: ${gap}px;
      > div {
        margin: auto 0;
      }
    }
    @media only screen and (max-width: 850px) {
      grid-template-columns: auto;
      > img {
        justify-self: center;
      }
    }
  `}
`;

const Picture = styled.img`
  ${({ theme: { color } }) => css`
    width: ${picWidth}px;
    height: ${picWidth}px;
    border: 4px solid ${color.light};
    padding: 20px;
    object-fit: contain;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  `}
`;

const Skills = styled.div`
  ${({ theme: { space } }) => css`
    margin-top: ${gap}px;
    font-weight: 400;
    line-height: ${space.md};
  `}
`;

const Text = styled.div`
  ${({ theme: { color, space, breakpoints } }) => css`
    width: ${textWidth}px;
    color: ${color.light};
    font-size: ${space.md};
    text-align: justify;
    > p {
      margin: 0;
    }
    > h2 {
      font-size: ${space.lg};
      margin-top: 0;
      margin-bottom: ${space.sm};
    }

    ${breakpoints.tablet} {
      width: 100%;
    }
  `}
`;

const K = styled.span`
  ${({ theme: { color } }) =>
    css`
      color: ${color.red !== color.dark ? color.red : color.light};
    `};
`;

export const Profile = () => (
  <StyledProfile>
    <LeftColumn>
      <Picture src={avatar} />
      <Skills>
        B Sc Informatics
        <br />
        German | English
        <br />
        <K>Skills:</K> CSS, TypeScript, React
        <br />
        <K>Learning:</K> Hooks, Redux, Animation
      </Skills>
    </LeftColumn>
    <Text>
      <h2>About Me</h2>
      <p>
        I am a 25 year old professional <K>web developer</K> which acquired his{' '}
        informatics degree in 2021 and is employed since then as a web
        developer.
        <br />
        <br />
        Most of the time I develop <K>frontend</K> apps with <K>React</K> and{' '}
        <K>Typescript</K>, try to <K>design</K> my own stuff and build cool web
        apps while learning new things.
      </p>
    </Text>
  </StyledProfile>
);