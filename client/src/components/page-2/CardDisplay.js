import React from "react"
import {useRecoilState} from "recoil"
import styled from "styled-components";
import cardWindowState from "../../atoms"

const CardDisplay = ()=>{
    const[card,setCardWindow] = useRecoilState(cardWindowState)

     if(card.length>2) return <Container>
        <AreaColor cardColor={card[2]}></AreaColor>
        <CardDetails>{card[0]}</CardDetails>
        <Price>{`$${card[1]}`}</Price>
         </Container>
    return <PicContainer picture={card[0]}/>

}

export default CardDisplay


const Container = styled.div`
    border:1px solid black;
    height: 12rem;
    width: 12rem;
`;

const AreaColor = styled.div`
    background:${(props)=>props.cardColor};
    height:3rem;
`

const CardDetails=styled.div`
height:3rem;
text-align:center;
line-height:3
`

const Price = styled.div`
    text-align:center;

`
const PicContainer = styled.div`
    background-image: url(${(props) => props.picture});
    border:1px solid black;
    background-position: center;
    background-size: cover;
    height: 12rem;
    width: 12rem;
    
`