import "../App.css";
import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, CardActions, Chip, Typography } from '@mui/material';
import { useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import {IoIosWater} from 'react-icons/io'
import {GiHighGrass} from 'react-icons/gi';
import {MdBubbleChart} from 'react-icons/md';
import {AiFillFire, AiFillBug, AiFillStar} from 'react-icons/ai';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { red, green, blue, purple, yellow, grey, lightBlue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function PokemonCard(props) {

    // takes in a togglePokemon function, which will add or remove the pokemon from the team
    // check if pokemon is in team, if it is, set the button to "Remove from Team", if not, set the button to "Add to Team"
    // team is passed in as a list of pokemon names
    const [isInTeam, setIsInTeam] = useState(props.team.includes(props.name));

    // on each re-render, check if pokemon is in team, if it is, set the button to "Remove from Team", if not, set the button to "Add to Team"
    // team is passed in as a list of pokemon names
    useEffect(() => {
        setIsInTeam(props.team.includes(props.pokemon));
    }, [props.team, props.pokemon]);
    
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
                    <b>Number:</b> {props.number}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    <b>HP:</b> {props.hp}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    <b>Attack:</b> {props.attack}
                </Typography>
                <Typography variant="body2" color="text.secondary" color="white">
                    <b>Types:</b>
                </Typography>
                {props.types.map((type) => {
                    if (type === 'grass') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                sx={{ bgcolor: green[500], margin: 0.5, textColor: "white" }}
                                icon={<GiHighGrass />}
                                size="small"
                            />
                        );
                    } else if (type === 'poison') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                sx={{ bgcolor: purple[500], margin: 0.5, textColor: "white" }}
                                icon={<MdBubbleChart />}
                                size="small"
                                // set text color to white
                            />
                        );
                    } else if (type === 'fire') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                sx={{ bgcolor: red[500], margin: 0.5, textColor: "white" }}
                                icon={<AiFillFire />}
                                size="small"
                            />
                        );
                    } else if (type === 'water') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                sx={{ bgcolor: blue[500], margin: 0.5, textColor: "white" }}
                                icon={<IoIosWater />}
                                size="small"
                            />
                        );
                    } else if (type === 'bug') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                sx={{ bgcolor: yellow[800], margin: 0.5, textColor: "white" }}
                                icon={<AiFillBug />}
                                size="small"
                            />
                        );
                    } else if (type === 'normal') {
                        return (
                            <Chip
                                label={type}
                                color="primary"
                                sx={{ bgcolor: grey[600], margin: 0.5, textColor: "white" }}
                                icon={<AiFillStar />}
                                size="small"
                            />
                        );
                    }
                })}
            </CardContent>
            <CardActions>
                {/* if is in team, have blue button to add to team, if not, have red button to remove from team */}
                {isInTeam ? (
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<MdOutlineCatchingPokemon />}
                        onClick={() => props.togglePokemon(props.pokemon)}
                    >
                        Remove from Team
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CgPokemon />}
                        onClick={() => props.togglePokemon(props.pokemon)}
                    >
                        Add to Team
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}






export default PokemonCard;