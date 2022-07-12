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
    background: rgb(7 1 24 / 70%);
    backdrop-filter: blur(6px);
  }
`

const Title = styled.p`
  text-transform: uppercase;
  font-family: condor, sans-serif;
  font-weight: normal;
  letter-spacing: 6px;
  line-height: 1;
  text-shadow: 4px 0 0 black;
  margin: 0;

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

    @media (max-width: 764px) {
      justify-content: space-between;
    }

    li {
      margin-bottom: 0;
      margin-left: 0;
      text-align: center;

      a {
        padding: .5rem 1rem;
        color: ${colors.blue};
        text-decoration: none;
        
        @media (max-width: 764px) {
          padding: 1rem 1.5rem;
        }

        &:hover,
        &:focus-visible {
          color: ${colors.green};
        }
      }
    }
  }
`