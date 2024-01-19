import React from 'react'

const Carousel = ({ prop }) => {
      return (
            <>
                  <h3 style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                        marginBottom: "10vh"
                  }}>{prop}</h3>
            </>
      )
}

export default Carousel