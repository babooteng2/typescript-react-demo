import React from "react";
import styled from "styled-components";

const Container = styled.span``;

interface IProps {
    count: number
}

function Number({count}:IProps) {
    return <Container>{count}</Container>
}

export default Number;