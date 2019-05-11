import React from 'react'

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      <h1>hello from Hero</h1>
    </header>
  )
}

Hero.defaultProps = {
  hero: 'default-hero'
}