// This component is a "Pokemon Team" Card Component
// It displays the pokemon team name, the pokemon team image, and the pokemon members images
// It also displays the total attack and hp of the team as a banner at the bottom of the card
import React from 'react'
import { Card, CardContent, CardMedia, CardHeader, CardActions, Chip, Typography } from '@mui/material';
import { useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import { red, green, blue, purple, yellow, grey, lightBlue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';


function Aggregator(props) {
   const [totalAttack, setTotalAttack] = useState(0);
    const [totalHp, setTotalHp] = useState(0);

    

    return (
        // Set name of this card to "Pokemon Team", then the body of the card is where the images of the pokemon team members will be displayed, and the bottom of the card will be the total attack and hp of the team
        // This component takes in the pokemon objects in the team, which have image, name, attack, and hp properties
        <Card sx={{ width: 320, height: 500, bgcolor: "grey.800", color: "white" }}>
            <CardHeader
                title="Pokemon Team"
                subheader="This is a Pokemon Team"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                    My Pokémon Team
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.pokemon.map((pokemon, index) => (
                        <img src={pokemon.image} alt={pokemon.name} />
                    ))}
                </Typography>
                {/* Aggregator Display */}
                <Typography variant="body2" color="text.secondary">
                    {props.pokemon.map((pokemon, index) => (
                        <div>
                            <p>{pokemon.name}</p>
                            <p>{pokemon.attack}</p>
                            <p>{pokemon.hp}</p>
                        </div>
                    ))}
                </Typography>
            </CardContent>
        </Card>

    );
}

export default Aggregator