import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

function Section(props) {
    return (
        <Compined bgImage={props.backgroundImg}>
            <Fade delay={400}>
            <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>  
            </ItemText>
            </Fade>          
            <CompinedSection>
            <Fade delay={400}>
            <Buttons>
                <LeftButton>{props.leftBtnText}</LeftButton>
                { props.rightBtnText && 
                <RightButton>{props.rightBtnText}</RightButton>
}
            </Buttons>
            </Fade>
            { props.downArrow &&
             <Fade delay={200}>
               <DownArrow src="/images/down-arrow.svg"></DownArrow>
             </Fade>
          
            }
            </CompinedSection> 
            {/* <Fcontainer>
                 <Footer />         
           </Fcontainer> */}
        </Compined>
        
    )
}

export default Section


const Compined = styled.div`
width: 100vw;
height: calc(100vh + 10px);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding: 30px;
scroll-snap-align: start;
scroll-behavior: smooth;
transition:all 0.5s ease-in-out;
background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

@media (max-width: 844px) {
   font-size: 14px;
}`

const Buttons = styled.div`
display: flex;
align-tems: center;
justify-content: center;

@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 50px;
}

@media (max-width: 844px) {
 }`


const LeftButton = styled.a`
background-color: #181b21;
text-transform: uppercase;
height: 40px;
width: 256px;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
opacity: 0.85;
font-size: 12px;
cursor: pointer;
margin: 15px;
transition: border-color .33s ease,background-color .33s ease,color .33s ease
`

const RightButton = styled(LeftButton)`
background-color: hsla(0,0%,100%, 2.89);
color: #393c41;
`

const DownArrow = styled.img`
color:#393c41;
height: 40px;
animation: animateDown infinite 1.5s;
cursor:pointer;

@media (max-width: 768px) {
    margin-bottom: 100px;
}

@keyframes animateDown {
    0%, 20%, 50%, 80%, 100%  {
         transform: translateY(0);
    }
    40% {
        transform: translateY(5px);
    }
    60% {
        transform: translateY(3px);
    }
}
`

const CompinedSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`
