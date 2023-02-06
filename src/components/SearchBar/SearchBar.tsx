import axios from 'axios';
import React, {useEffect, useState} from 'react'
import styled, { css } from 'styled-components'


type SearchBarProps ={
    dark: boolean;
    setUserData: (data : object) => object;
}

type UserProps = {
    user:string;
    setUser: () => string;
} 


const SearchBar = (props:SearchBarProps) => {
    const [user , setUser] = useState('')

        async function getUserApi (userName:string) {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            const data : {} = await response.data;
            props.setUserData(data)
            return data;
        }



  return (
    <InputForm dark={props.dark} onSubmit={(e) => {
        e.preventDefault()
        getUserApi(user);
    }}>
        <Input dark={props.dark} user={user} placeholder='Search GitHub Users...' onChange={(e) => {
            setUser(e.currentTarget.value)
        }} />
        <Button dark={props.dark}>Submit</Button>
    </InputForm>
  )
}

export default SearchBar




// -----------------------------------------Styled Components-------------------------------------------------------->
type InputFormProps = {
    dark:boolean;
}
const InputForm = styled.form(
    (props:InputFormProps) => css`
    height: 60px;
    width: 730px;
    border-radius: 15px;
    background: ${props.dark ? "#1E2A47" : "#FEFEFE"};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    `
)

type ButtonProps = {
    dark:boolean;
}
const Button = styled.button(
    (props:ButtonProps) => css`
    height: 50px;
    width: 106px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border:none;
    background: ${props.dark ? "rgb(179, 46, 9)" : "#0669BA"}


    `
)

type InputProps = {
    dark:boolean;
    user:string;
}

const Input = styled.input(
    (props:InputProps) => css`
        color:${props.dark ? "white" : "black"};
        font-size: 18px;
        font-weight: 600;
        width:600px;
        height: 60px;
        background:transparent;
        border:none;
        outline:none;
    `
)