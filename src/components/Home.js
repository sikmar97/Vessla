import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
        <Container>
            <Section 
                title="Model 3SE"
                description="Pink is better than black"
                backgroundImg="model-3se-pink.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section 
                title="Model 2X"
                description="Bullet proof"
                backgroundImg="model-2x.jpg"
                leftBtnText="Custom Orde"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Order Now"
            />
        </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`