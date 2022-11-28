import React from 'react'
import { Card, CardContent, CardMedia, CardHeader, CardActions, Chip, Typography } from '@mui/material';
import { useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import { red, green, blue, purple, yellow, grey, lightBlue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';


function Aggregator(props) {
    return (
        <Card sx={{ width: 320, bgcolor: "grey.800", color: "white" }}>
            <CardHeader 
                title={ 
                    <h4 style={{ fontWeight: "bold" }}>My Pokémon Team</h4>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* add each pokemon image in a gray card */}
                        {props.team.map((pokemon) => {
                            return (
                                <Card sx={{ width: 100, height: 100, bgcolor: "grey.600", color: "white", margin: 1 }}>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={pokemon.image}
                                        title={pokemon.name}
                                        alt={pokemon.name}
                                    />
                                </Card>
                            )
                        })}
                    </Box>
                </Typography>
                {/* Aggregator Display */}
                <Typography variant="body2" color="white">
                    <b style={{ color: "#73A5C6" }}>Total HP:</b> {props.hp}
                </Typography>
                <Typography variant="body2" color="white">
                    <b style={{ color: "#73A5C6" }}>Total Attack:</b> {props.attack}
                </Typography>
            </CardContent>
        </Card>

    );
}

export default Aggregator