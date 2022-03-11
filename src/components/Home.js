import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Free V-Bucks"
                backgroundImg="model-s.jpg"
                leftBtnText="Fortnite bror"
                rightBtnText="lorem ipsum typ"
            />

            <Section 
                title="Model Y"
                description="Order Online for Free Kebab"
                backgroundImg="model-y.jpg"
                leftBtnText="IDEK bror"
                rightBtnText="lorem ipsum typ"
            />
            <Section 
                title="Model 3"
                description="Order Online for Free Kebab"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Stuff"
                rightBtnText="lorem ipsum typ"
            />
            <Section 
                title="Model X"
                description="Order Online for Free Candy"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Stuff"
                rightBtnText="lorem ipsum typ"
            />
            <Section
                title="Solar panels typ"
                description="Money Back garantead"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learnmore"
            />
            <Section
                title="Solar for new Roofs"
                description="Money Back garantead"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learnmore"
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