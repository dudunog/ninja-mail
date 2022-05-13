import Link from 'next/link';
import styled from 'styled-components';
import { colors, ColorsProps } from '../../../models/_variables';
import { Button } from '../Button';

interface HeaderProps {
  colors: ColorsProps;
}

const Wrapper = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  padding: 0 10rem;

  > div {
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1700px;

    > img {
      z-index: 10;
    }

    .initial {
      margin-top: 0.3rem;
      display: flex;
      align-items: center;

      > img {
        margin-left: -1.5rem;
      }

      > a {
        margin-top: -0.3rem;
        margin-left: -0.5rem;
        font-size: 1.6rem;
        font-weight: 800;
        letter-spacing: 0rem;
      }
    }

    .actions {
      display: flex;

      .navMenu {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
        z-index: 10;

        .navItem {        
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: $black;
            padding: 0.3rem 0;
            font-weight: 800;

            .tag {
              width: 6.5rem;
              height: 0.25rem;
              background-color: ${props => props.colors.green};
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 990px) {
    > div {
      margin-top: 1rem;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 780px) {
    > div {
      margin-top: 0;
      flex-direction: row;

      > .actions {
        > .navMenu {
          .navItem:not(:last-child) {
            display: none;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 424px) {
    > div {
      margin-top: 1rem;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <Wrapper colors={colors}>
      <div>
        <div className="initial">
          <img src={"/assets/logo.svg"} width="80px" alt='IcaBank' />
          <a href="/">NinjaMail</a>
        </div>

        <div className="actions">
          <nav className="navMenu">
            <div className="navItem">
              <Link href={"#"}>
                <a>
                  FEATURES
                  <div className="tag"></div>
                </a>
              </Link>
            </div>
            <div className="navItem">              
              <Link href={"#"}>
                <a>
                  PRICING
                  <div className="tag"></div>
                </a>
              </Link>
            </div>
            <div className="navItem">
              <Link href={"#"}>
                <a>
                  SERVICES
                  <div className="tag"></div>
                </a>
              </Link>
            </div>
            <div className="navItem">
              <Link href={"#"}>
                <a>
                  PARTNERS
                  <div className="tag"></div>
                </a>
              </Link>
            </div>
            <div className="navItem">
              <Button
                color={colors.white}
                backgroundColor={colors.green}
                padding={"0.5rem 1rem"}
                border={"none"}
              >
                SIGN UP FREE
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </Wrapper>
  )
}