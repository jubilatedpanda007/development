// TODO: create a component that displays a single bakery item
import "../App.css";
// create PokemonCard component using MUI Card, is in dark mode
// Display Pokemon Image, Name, Number, HP, Attack, Types
// Make Types chips, and adequate color for each type
// grass --> green, poison --> purple, fire --> red, water --> blue, bug --> yellow, normal --> grey, flying --> light blue
// Add button to "Add to Team" with a pokeball icon (CgPokemon)
// This button is a toggle button, if clicked, it will add the pokemon to the team, if clicked again, it will remove the pokemon from the team
// The team is represented as a list of pokemon names, used to display the Pokemon's Image and Total the team's HP and Attack
// MUI 5
import React from "react";
import { Card, CardContent, CardMedia, CardActions, Chip, Typography } from '@mui/material';
import { useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import { red, green, blue, purple, yellow, grey, lightBlue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


// const theme = createTheme({
//     palette: {
//         primary: {
//             main: red[500],
//         },
//         secondary: {
//             main: green[500],
//         },
//         error: {
//             main: blue[500],
//         },
//         warning: {
//             main: purple[500],
//         },
//         info: {
//             main: yellow[500],
//         },
//         success: {
//             main: grey[500],
//         },
//         light: {
//             main: lightBlue[500],
//         },
//     },
// });

function PokemonCard(props) {
    // const theme = useTheme();

    const handleAddToTeam = () => {
        
    };

    return (
        // set card width to 320px, and height to 400px
        <Card sx={{ width: 320, height: 500, bgcolor: "grey.800", color: "white" }}>
            <CardMedia
                component="img"
                height="250"
                image={props.pokemon.image}
                title={props.name}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    Number: {props.number}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    HP: {props.hp}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    Attack: {props.attack}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    Types:
                </Typography>
                {props.types.map((type) => {
                    if (type === 'grass') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        );
                    } else if (type === 'poison') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        );
                    } else if (type === 'fire') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        );
                    } else if (type === 'water') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        );
                    } else if (type === 'bug') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        );
                    } else if (type === 'normal') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        );
                    }
                })}
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddToTeam}
                >
                    {/* {isInTeam ? 'Remove from Team' : 'Add to Team'} */}
                    Add to Team
                </Button>
            </CardActions>
        </Card>
    );
}






export default PokemonCard;