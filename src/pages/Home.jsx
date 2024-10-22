import Hero from "../components /Hero"
import NewCollection from "../components /NewCollection"
import NewsLetter from "../components /NewsLetter"
import Offer from "../components /Offer"
import Popular from "../components /Popular"
import React from "react"

const Home = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollection/>
    <NewsLetter/>
    </>
  )
}

export default Home