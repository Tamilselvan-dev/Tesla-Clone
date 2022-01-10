import React, {useState} from 'react'
import styled from 'styled-components'

function Header() {
    const [bState, aState] = useState(false);

    return (
        <Container>
            <Logo>
            <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="currentColor"></path></svg>
            </Logo>
            <CenterSection>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">Solar Roof</a></li>
            </CenterSection>
            
            <RightSection>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#" onClick={()=>aState(!bState)}>Menu</a></li>
            </RightSection>
             <MobileIcon src="/images/menu.png" onClick={()=>aState(!bState)}></MobileIcon>
            {bState?<BurgerNav>
                <Customclose>
                    <Close src="/images/close.png" onClick={()=>aState(!bState)}></Close>
                </Customclose>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Test Drive</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadster</a></li>
                <li><a href="/">Semi</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Powerwall</a></li>
            </BurgerNav>:null
}
        </Container>
    )
}

export default Header


const Container = styled.div`
    width: 100%;
    height: 10vh;
    position: fixed;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`
    
const Logo = styled.div`
width: 120px;

@media (max-width: 844px) {
    width: 80px;
}`

const CenterSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
color: #181b21;

li {
    padding: 5px 10px;
    border-radius: 50px;
}

li:hover {
    background-color: hsla(0,0%,100%, 0.50);
    color: #fff;
}

@media (max-width: 768px) {
   display: none;
}

@media (max-width: 844px) {
    font-size: 12px;
}
`
const RightSection = styled(CenterSection)`
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: #fff;
width: 300px;
padding: 20px;
z-index: 2;
transition:all 0.5s ease-in-out;

li { 
    margin: 10px 0 0 10px;
    border-radius: 20px;
    padding: 10px;
    transition:all 0.5s ease-in-out;
}

li:hover {
    background: rgba(0, 0, 0 , 0.07);
    color: #fff;
}
`
const Customclose = styled.div`
display: flex;
justify-content: end;`

const Close = styled.img`
width: 15px;

@media (max-width: 768px) {
    margin-right: 50px;
 }
`

const MobileIcon = styled.img`
display: none;

@media (max-width: 768px) {
    display: block;
    padding: 20px;
    cursor: pointer;
 }
`