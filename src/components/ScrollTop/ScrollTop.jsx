import React from 'react'
import ScrollToTop from 'react-scroll-up'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { IconButton } from '@mui/material';

const ScrollTop = () => {
      return (
            <ScrollToTop showUnder={160}>
                  <IconButton
                        sx={{
                              boxShadow: "0",
                              backgroundColor: 'transparent',
                              color: "rgba(254, 82, 141, 1)",
                              opacity: "0.85",
                              "&:hover": {
                                    cursor: "pointer",
                                    backgroundColor: 'transparent',
                                    color: "rgba(254, 82, 141, 1)",
                                    transition: "all 0.5s ease-in-out",
                                    opacity: "1",
                              },
                              width: "5rem",
                        }}
                  >
                        <KeyboardDoubleArrowUpOutlinedIcon sx={{
                        }} style={{
                              fontSize: "3.5rem",
                              padding: "0.1rem",
                              opacity: '1',
                        }} />
                  </IconButton>
            </ScrollToTop>
      )
}

export default ScrollTop