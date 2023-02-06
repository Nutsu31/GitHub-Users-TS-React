import { type } from 'os'
import React from 'react'
import styled, { css } from 'styled-components';
import LocationIcon from '../Assets/icon-location.svg'
import TwitterIcon from '../Assets/icon-twitter.svg'
import CompanyIcon from '../Assets/icon-company.svg'
import WebsiteIcon from '../Assets/icon-website.svg'

type BodyProps = {
  dark: boolean;
  login:string;
  name:string;
  followers:number;
  following:number;
  bio:string;
  blog:string;
  location:string;
  twitter:string;
  avatar_url:string;
  html_url:string;
  public_repos:number;
  company:string;
}
const Body = (props:BodyProps) => {


  return (
    <Container dark={props.dark}>
      <Aside>
        {props.login && <Img avatar_url={props.avatar_url}  src={props.avatar_url} />}
      </Aside>
      <Section>
        <Div1>
        {props.login && <H1 dark={props.dark} name={props.name}>{props.name}</H1>}
        {props.login && <Span login={props.login}>{props.login}</Span>}
        {props.login && <P dark={props.dark} bio={props.bio}>{props.bio === null ? <P dark={props.dark}>This User has no bio</P> : <P bio={props.bio}>{props.bio}</P>}</P>}
        </Div1>
        <ColoredDiv dark={props.dark}>
          <div>
          {props.login && <P dark={props.dark}>Repos</P>}
          {props.login && <H1 dark={props.dark} public_repos={props.public_repos}>{props.public_repos}</H1>}
          </div>
          <div>
          {props.login && <P dark={props.dark}>Followers</P>}
          {props.login && <H1 dark={props.dark} followers={props.followers}>{props.followers}</H1>}
          </div>
          <div>
          {props.login && <P dark={props.dark}>Following</P>}
          {props.login && <H1 dark={props.dark} following={props.following}>{props.following}</H1>}
          </div>
        </ColoredDiv>
        <Footer>
            <MiniFlexDivs>
              {props.login && <P dark={props.dark}><Icon dark={props.dark} src={LocationIcon} />{props.location}</P>}
              {props.login && <Link dark={props.dark} href={props.html_url}><Icon dark={props.dark} src={WebsiteIcon} />GitHub Link</Link>}
            </MiniFlexDivs>
            <MiniFlexDivs>
              {props.login && <P dark={props.dark}><Icon dark={props.dark} src={TwitterIcon} />{props.twitter}</P>}
              {props.login && <Link dark={props.dark}><Icon dark={props.dark} src={CompanyIcon} />{props.company}</Link>}
            </MiniFlexDivs>
        </Footer>
      </Section>
    </Container>
  )
}

export default Body

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///-----------------------------------------------------Styled Component--------------------------------------------------->///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ContainerProps = {
  dark: boolean;
}
const Container = styled.div(
  (props:ContainerProps) => css`
  height: 419px;
  width: 730px;
  margin-top:24px;
  padding: 16px 8px;
  background: ${props.dark ? "#1E2A47" : "#FEFEFE"};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  display:flex;
  `
)


const Aside = styled.div`
    width:230px;
    height:100%;
    display:flex;
    justify-content:center;
    padding-top:8px;
  `

type ImgProps = {
  avatar_url:string;
  login?:string;
}

const Img = styled.img(
  (props:ImgProps) => css`
    width:116px;
    height:116px;
    border-radius:50%;
  `
)

type IconProps = {
  dark:boolean;
}
const Icon = styled.img(
  (props:IconProps) => css`
  margin-right:16px;
  ${props.dark ? "filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(45deg) brightness(112%) contrast(93%);" : null}
  `
)

const Section = styled.section`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
  `
const Div1 = styled.div`
  height:100px;
  display:flex;
  align-items:flex-start;
  flex-direction:column;
  justify-content: space-between;
`

  type H1Props = {
    dark?:boolean;
    name?:string;
    public_repos?: number;
    followers?:number;
    following?: number;
  }

  const H1 = styled.h1(
    (props:H1Props) => css`
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color:${props.dark ? "white" : "black"};
    `
  )

type SpanProps = {
  login:string;
}

  const Span = styled.span(
    (props:SpanProps) => css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0079FF;

    `
  )


  type Pprops = {
    bio?:string;
    dark?:boolean;
  }
const P = styled.p(
  (props:Pprops) => css`
  width:fit-content;
  color: ${props.dark ? "white" : "black"};

  `
)

type ColoredDivProps = {
  dark: boolean;
}
const ColoredDiv = styled.div(
  (props:ColoredDivProps) => css`
  height: 85px;
  width: 480px;
  border-radius: 10px;
  background:${props.dark ? "#141D2F" : "#F6F8FF"};
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  `
)

const Footer = styled.footer`
    width:480px;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:space-between;

  `

  const MiniFlexDivs = styled.div`
  width:200px;
  height:80px;
  display:flex;
  align-items:flex-start;
  flex-direction:column;
  justify-content:space-between;
  
  `
type LinkProps = {
  dark:boolean;
}
  const Link = styled.a(
    (props:LinkProps) => css`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #4B6A9B;
    `
  )