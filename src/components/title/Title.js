import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Text } from './Title.elements'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Title = (props) => {
  return (
    <Container>
      <Wrapper data-aos="zoom-in">
        <Text >{props.children}</Text>
     </Wrapper>
    </Container>
  )
}

export default Title