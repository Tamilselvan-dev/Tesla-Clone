/* eslint-disable react/style-prop-object */
import React from 'react'
import styled from 'styled-components'

function Footer(props) {
  
    return (
        <Fcontainer>
         <li><a href="/">TS-DEV</a></li>
         <li><a href="/">Tesla © 2022</a></li>
         <li><a href="/">Privacy & Legal</a></li>
         <li><a href="/">LinkedIn</a></li>
         <li><a href="/">GitUp</a></li>
         <li><a href="/">CodePen</a></li>
        </Fcontainer>
    )
}

export default Footer


const Fcontainer = styled.div`
    width: 100%;
    height: 30vh;
    position: fixed;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #181b21;
    `