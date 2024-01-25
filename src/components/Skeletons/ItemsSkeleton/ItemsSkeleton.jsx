import React from 'react';
import { Grid, Typography, Button, Box, Skeleton, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledSkeleton = styled(Skeleton)(({ theme, width, height }) => ({
      backgroundColor: theme.palette.action.hover,
      width,
      height,
      margin: 'auto',
}));

const ItemSkeleton = ({ theme }) => {

      const styledItem = {


            styledTitle: {
                  textAlign: 'center',
                  marginBottom: '1rem',
                  height: '40px',
                  width: '300px',
            },

            styledButton: {
                  width: '200px',
                  height: "30px",
                  borderRadius: '0.1rem',
                  marginTop: '1rem',
                  marginLeft: '3.14rem',
            },

            styledGridItem: {
                  position: 'relative',
                  paddingRight: '1rem',
                  marginBottom: '2rem',
                  marginTop: '4.3rem',
                  '&::before, &::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        width: '0.5px',
                        height: '40%',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        top: '15%',
                  }
            }

      }

      return (
            <Grid item sx={styledItem.styledGridItem}>
                  <StyledSkeleton variant="rectangular" width={230} height={250} />

                  <StyledSkeleton variant="text" sx={{
                        ...styledItem.styledTitle,
                        marginTop: '0.2rem'
                  }} />

                  <StyledSkeleton variant="text" sx={{
                        ...styledItem.styledTitle,
                        marginTop: '-1rem',
                        width: '50%',
                  }} />

                  <StyledSkeleton variant="rectangular" sx={{
                        ...styledItem.styledButton,
                        marginTop: '1.9rem',
                  }} />
            </Grid>
      );
};

export default ItemSkeleton;