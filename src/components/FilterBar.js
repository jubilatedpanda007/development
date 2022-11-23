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
            <CardHeader title="Pokébar" />
            <CardContent>
                {/* <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={grass}
                                onChange={handleChange}
                                name="grass"
                                color="primary"
                            />
                        }
                        label="Grass"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={poison}
                                onChange={handleChange}
                                name="poison"
                                color="primary"
                            />
                        }
                        label="Poison"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={fire}
                                onChange={handleChange}
                                name="fire"
                                color="primary"
                            />
                        }
                        label="Fire"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={flying}
                                onChange={handleChange}
                                name="flying"
                                color="primary"
                            />
                        }
                        label="Flying"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={water}
                                onChange={handleChange}
                                name="water"
                                color="primary"
                            />
                        }
                        label="Water"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={bug}
                                onChange={handleChange}
                                name="bug"
                                color="primary"
                            />
                        }
                        label="Bug"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={normal}
                                onChange={handleChange}
                                name="normal"
                                color="primary"
                            />
                        }
                        label="Normal"
                    />
                </FormControl> */}
                <FormControl component="fieldset">
                    {/* Make Label White */}
                    <FormLabel component="legend" sx={{ color: "white", fontWeight: "bold" }}>Type</FormLabel>
                    <RadioGroup
                        aria-label="type"
                        name="type"
                        value={type}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="all" control={<Radio />} label="All" />
                        <FormControlLabel value="grass" control={<Radio />} label="Grass" />
                        <FormControlLabel value="poison" control={<Radio />} label="Poison" />
                        <FormControlLabel value="fire" control={<Radio />} label="Fire" />
                        <FormControlLabel value="flying" control={<Radio />} label="Flying" />
                        <FormControlLabel value="water" control={<Radio />} label="Water" />
                        <FormControlLabel value="bug" control={<Radio />} label="Bug" />
                        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
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
                    <FormLabel sx={{ color: "white", fontWeight: "bold" }} component="legend">Evolution</FormLabel>
                    <RadioGroup
                        aria-label="evolution"
                        name="evolution"
                        value={evolution}
                        onChange={handleEvolutionChange}
                    >
                        <FormControlLabel value="all" control={<Radio />} label="All" />
                        <FormControlLabel value="base" control={<Radio />} label="Base" />
                        <FormControlLabel value="middle" control={<Radio />} label="Middle" />
                        <FormControlLabel value="final" control={<Radio />} label="Final" />
                    </RadioGroup>
                </FormControl>

                <FormControl
                    component="fieldset"
                >
                    <FormLabel sx={{ color: "white", fontWeight: "bold" }} component="legend">Sort</FormLabel>
                    <RadioGroup
                        aria-label="sort"
                        name="sort"
                        value={sort}
                        onChange={handleSortChange}
                    >
                        <FormControlLabel 
                            value="number" 
                            control={<Radio />} 
                            label="Number" 
                        />
                        <FormControlLabel
                            value="hp"
                            control={<Radio />}
                            label="HP"
                        />
                        <FormControlLabel
                            value="attack"
                            control={<Radio />}
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
