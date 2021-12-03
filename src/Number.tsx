import React from "react";
import styled from "styled-components";

const Container = styled.span<{isBlue:boolean}>`
    color: ${props=>props.isBlue ? "blue" : "black"};
`;

interface IProps {
    count: number;    
}

function Number({count}:IProps) {
    return <Container isBlue={count > 10}>{count}</Container>
}

export default Number;