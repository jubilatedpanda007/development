import React from "react";
import Card from '@mui/material/Card';
import { CardContent, CardActions, CardHeader, Checkbox, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Button } from "@mui/material";

export default function FilterBar({type, setType, evolution, setEvolution, sort, setSort}) {

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleEvolutionChange = (event) => {
        setEvolution(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Card sx={{ width: 320, bgcolor: "grey.800", color: "white", margin: "auto", marginBottom: "20px" }}>
            <CardHeader title={ 
                <h4 style={{ fontWeight: "bold" }}>Pokébar</h4>
            }
            />
            <CardContent>
                <FormControl component="fieldset">
                    {/* Make Label White and when something in the form is selected, highlight light blue #73A5C6 */}
                    <FormLabel component="legend" sx={{ color: "white", fontWeight: "bold", 
                    '&.Mui-focused': { color: "#73A5C6 !important" } }}>Type</FormLabel>

                    <RadioGroup
                        aria-label="type"
                        name="type"
                        value={type}
                        onChange={handleChange}
                    >
                        {/* make radio color white, and selected a light red */}
                        <FormControlLabel value="all" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="All" />
                        <FormControlLabel value="grass" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Grass" />
                        <FormControlLabel value="poison" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Poison" />
                        <FormControlLabel value="fire" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Fire" />
                        <FormControlLabel value="flying" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Flying" />
                        <FormControlLabel value="water" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Water" />
                        <FormControlLabel value="bug" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Bug" />
                        <FormControlLabel value="normal" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Normal" />
                    </RadioGroup>
                </FormControl>
                {/* filter based on evolution, base middle, final using Checkboxes */}
                {/* <FormControl component="fieldset">
                    <FormLabel component="legend">Evolution</FormLabel>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={base}
                                onChange={handleEvolutionChange}
                                name="base"
                                color="primary"
                            />
                        }
                        label="Base"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={middle}
                                onChange={handleEvolutionChange}
                                name="middle"
                                color="primary"
                            />
                        }
                        label="Middle"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={final}
                                onChange={handleEvolutionChange}
                                name="final"
                                color="primary"
                            />
                        }
                        label="Final"
                    />
                </FormControl> */}
                <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{ color: "white", fontWeight: "bold", 
                    '&.Mui-focused': { color: "#73A5C6 !important" } }}>Evolution</FormLabel>
                    <RadioGroup
                        aria-label="evolution"
                        name="evolution"
                        value={evolution}
                        onChange={handleEvolutionChange}
                    >
                        <FormControlLabel value="all" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="All" />
                        <FormControlLabel value="base" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Base" />
                        <FormControlLabel value="middle" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Middle" />
                        <FormControlLabel value="final" control={<Radio 
                            sx={{
                                color: "white",
                                '&.Mui-checked': {
                                    color: "#73A5C6",
                                },
                            }}
                        />} label="Final" />
                    </RadioGroup>
                </FormControl>

                <FormControl
                    component="fieldset"
                >
                    <FormLabel component="legend" sx={{ color: "white", fontWeight: "bold", 
                    '&.Mui-focused': { color: "#73A5C6 !important" } }}>Sort</FormLabel>
                    <RadioGroup
                        aria-label="sort"
                        name="sort"
                        value={sort}
                        onChange={handleSortChange}
                    >
                        <FormControlLabel 
                            value="number" 
                            control={<Radio 
                                sx={{
                                    color: "white",
                                    '&.Mui-checked': {
                                        color: "#73A5C6",
                                    },
                                }}
                            />} 
                            label="Number" 
                        />
                        <FormControlLabel
                            value="hp"
                            control={<Radio 
                                sx={{
                                    color: "white",
                                    '&.Mui-checked': {
                                        color: "#73A5C6",
                                    },
                                }}
                            />}
                            label="HP"
                        />
                        <FormControlLabel
                            value="attack"
                            control={<Radio 
                                sx={{
                                    color: "white",
                                    '&.Mui-checked': {
                                        color: "#73A5C6",
                                    },
                                }}
                            />}
                            label="Attack"
                        />
                    </RadioGroup>
                </FormControl>
            </CardContent>
            <CardActions>
                {/* button that resets values, type set to "all", evolution set to "all", sort set to "number" */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setType("all");
                        setEvolution("all");
                        setSort("number");
                    }}
                >
                    Reset
                </Button>
        
            </CardActions>
        </Card>
    );
}
