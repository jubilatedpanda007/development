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
            <CardHeader sx={{ fontWeight: "bold" }}
                title="My Pokémon Team"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {props.team.map((pokemon) => {
                            return (
                                <img src={pokemon.image} alt={pokemon.name} style={{ width: 100, height: 100, margin: 5 }} />
                            )
                        })}
                    </Box>
                </Typography>
                {/* Aggregator Display */}
                <Typography variant="body2" color="white">
                    <b>Total HP:</b> {props.hp}
                </Typography>
                <Typography variant="body2" color="white">
                    <b>Total Attack:</b> {props.attack}
                </Typography>
            </CardContent>
        </Card>

    );
}

export default Aggregator