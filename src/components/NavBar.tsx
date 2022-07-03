import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { colors } from "../styles/variables"
import FadeIn from './FadeIn'
const NavBar = ({ home = false }) => {
  return (
    <Header className={home ? `home-nav` : `nav`}>
      {!home && <FadeIn>
        <Title><Link to="/">Nathan Garrow</Link></Title>
      </FadeIn>}
      <Nav>
        <ul>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default NavBar

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 30px 50px;
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  touch-events: initial;

  &.home-nav {
    justify-content: flex-end;
  }

  @media (max-width: 764px) {
    flex-direction: column;
  }
`

const Title = styled.p`
  text-transform: uppercase;
  font-family: condor, sans-serif;
  font-weight: normal;
  letter-spacing: 6px;
  line-height: 1;
  text-shadow: 4px 0 0 black;

  @media (max-width: 764px) {
    font-size: 1.5rem;
  }

  a {
    color: ${colors.red};
    text-decoration: none;
    
    &:hover {
      color: ${colors.white};
    }
    &:focus-visible {
      color: ${colors.white};
      text-decoration: underline;
    }
  }
`
const Subtitle = styled.p`
  color: white;
  max-width: 40ch;
  margin: 0 auto;
`
const Nav = styled.nav`
@media (max-width: 764px) {
  margin-top: 1rem;
}
  ul {
    list-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      margin-bottom: 0;
      a {
        padding: .5rem 1rem;
        color: ${colors.blue};
        text-decoration: none;

        &:hover,
        &:focus-visible {
          color: ${colors.green};
        }
      }
    }
  }
`