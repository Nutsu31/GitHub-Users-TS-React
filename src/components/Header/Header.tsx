import { type } from 'os'
import React from 'react'
import styled, { css } from 'styled-components';


type HeaderProps = {
    dark:boolean;
    setDark:(dark : boolean) => boolean | void;
}
const Header = (props:HeaderProps) => {

  return (
    <Div1>
        <H1 dark={props.dark}>devfinder</H1>

        <Button dark={props.dark} setDark={props.setDark} onClick={() => {
            props.setDark(!props.dark)
        }}>{props.dark ? "Dark" : "Light"}</Button>
    </Div1>
  )
}

export default Header


const Div1 = styled.div`
    width:730px;
    height: 80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`


type H1Props = {
    dark:boolean;
}

const H1 = styled.h1(
    (props:H1Props) => css`
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: ${props.dark ? "white" : "#222731"};
    `
)

type ButtonProps = {
    setDark: (dark : boolean) => boolean | void;
    dark:boolean;
}

const Button = styled.button(
    (props:ButtonProps) => css`
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: right;
    letter-spacing: 2.5px;
    color: ${props.dark ? "white" : "#697C9A"};
    background: transparent;
    border:none;
    
    `
)