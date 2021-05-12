import React from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  faGithubAlt,
  faOctopusDeploy,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faAddressCard,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';

import {
  Scrollspy,
  ScrollspyExtra,
  ScrollspyContent,
  Tile,
  TileGroup,
  Section,
} from '../components';
import logo from '../data/media/logo.svg';
import { ressources } from '../data/ressources';
import { Intro } from './Intro';
import { SocialMedia } from './SocialMedia';

const Profile = styled.div`
  ${({ theme: { border, space } }) => css`
    width: 50px;
    height: 50px;
    padding: 5px;
    border: ${border.light.sm};
    > img {
      width: 100%;
      height: 100%;
      mix-blend-mode: normal;
    }
  `}
`;

const Button = styled.button`
  ${({ theme: { color, border, space } }) => css`
    cursor: pointer;
    color: ${color.light};
    background-color: transparent;
    border: ${border.light.sm};
    padding: 0 ${space.sm};
    height: ${space.lg};
    transition: 0.3s;
    :hover,
    :active,
    :focus {
      color: ${color.dark};
      background-color: ${color.light};
      outline: none;
    }
  `}
`;

export const Portfolio = () => {
  const { color } = useTheme();

  return (
    <Scrollspy>
      <ScrollspyExtra>
        <Profile>
          <img src={logo} alt={'avatar'} />
        </Profile>
      </ScrollspyExtra>

      <ScrollspyContent icon={faOctopusDeploy} label={'intro'}>
        <Section bgcolor={color.dark}>
          <Intro />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faAddressCard} label={'about me'}>
        <Section bgcolor={color.light}></Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faGithubAlt} label={'projects'}>
        <Section bgcolor={color.dark}></Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faCoffee} label={'ressources'}>
        <Section bgcolor={color.light}>
          <TileGroup autoFill={true} tileSize={'11.5rem'}>
            {ressources.map((ressource, index) => (
              <Tile key={'ressource-' + index} {...ressource} />
            ))}
          </TileGroup>
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faHashtag} label={'follow me'}>
        <Section bgcolor={color.dark}>
          <SocialMedia />
        </Section>
      </ScrollspyContent>

      <ScrollspyExtra>
        <Button>Action</Button>
      </ScrollspyExtra>
    </Scrollspy>
  );
};
