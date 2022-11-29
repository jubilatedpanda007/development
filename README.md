# Development | Pokemon Evolution

<!-- center public/images/Pokemon_animated.webp -->
<p align="center">
  <img src="public/images/Pokemon_animated.webp" alt="animated" />
</p>


### Link to Deployed Website
The deployed website can be found [here](https://jubilatedpanda007.github.io/development)!

### Goal and Value of the Application
The goal of this application is to provide a user with a list-based interface of Pokemon and their information. The user can filter by **type** and **evolution stage** from the included Pokemon from the start of the Pokedex. Users can also sort by the attack and HP attributes. This will surface the relevant Pokemon Cards to the user, which includes data about each Pokemon. Lastly, the user can also reset their filter and sort preferences with ease by using the Reset button in the Filter and Sort Sidebar.

Further, the user can assemble Pokemon into a theoretical team. Once added to the team, the Pokemon in the team are displayed alongside their aggregate attack and HP attributes. Therefore, the user can add or remove Pokemon from the team to optimize the team's attack and HP attributes!

### Usability Principles Considered
The usability principles considered for layout and hierarchy are as follows:
- **Visibility of Filter and Sort Status**: The user can see the status of the application at all times. This is done by displaying the Pokemon Cards and the Pokemon added to the Team. The user can also see how their selection of filters and sorts affects the Pokemon Cards directly.
- **Consistency and Hierarchy**: The heading of the Filter and Sort Sidebar and the Team component are the same sizes. For the Team component, the HP and Attack information is bolded to indicate that it is the most important information. For the Pokemon Cards, the Pokemon data is organized in a top-to-bottom fashion, with each attribute bolded on each card. Lastly, the types of Pokemon have a consistent color scheme with matching logos.
- **Feedback**: The user is given feedback when they add or remove a Pokemon from the team. This is done by changing the color of the Add and Remove buttons on the Pokemon Cards. If the button is red, then the Pokemon is in the team and the user is prompted to remove the Pokemon from the team. If the Pokemon Card is blue, then the Pokemon is not in the team and the user is prompted to add the Pokemon to the team. Lastly, selecting a sort or filter option will change the color of the button value and the option name. This indicates to the user that the option is selected and will be applied to the Pokemon Cards.
- **Reset**: The user can select and deselect options in the Filter and Sort Sidebar. The user can also reset the Filter and Sort Sidebar to their original state. This is done by clicking the Reset button in the Filter and Sort Sidebar. The Pokemon Cards will also reflect the initial state of the application.

### Organization of Components
The organization of the components is as follows:
- **App**: This is the parent component of the application. It contains the team, aggregated attack and HP, and selected filter state of the application. It contains methods for applying the filter and sort preferences onto the Pokemon data (contained within **pokemon-data.json**), rendering the data as Pokemon Cards, and adding/removing Pokemon from the team state. It also contains the Filter and Sort Sidebar and the Team component.
- **FilterBar**: This is the child component of the App component. It contains the form components for filtering by Type and Evolution and sorting by Attack and HP. It also contains the Reset button for resetting the filter and sort preferences. It contains methods for setting the state of the selected filter and sort preferences.
- **PokemonCard**: This is the child component of the App component. It contains a state for whether the Pokemon is in the team or not.
- **Aggregator**: This is the child component of the App component. It contains the Pokemon in the team and their aggregated attack and HP values.

Lastly, custom styling is contained within **App.css**.

### How Data is Passed Down Through Components
The data is passed down through components as follows:
- **App**: The App component contains the state of the selected filter and sort preferences, the aggregate attack and HP values, and the Pokemon in the team. It passes the filter and sort state to the FilterBar alongside the setter methods. It passes the team and aggregate state values to the Aggregator. The team state is passed to the PokemonCard component alongside a function that adds and removes Pokemon to the team. It also passes the Pokemon data (from `pokemon-data.json`) to the PokemonCard component.
- **FilterBar**: The FilterBar component receives the filter and sort state from the App component. It also receives the setter methods for the filter and sort state. 
- **PokemonCard**: The PokemonCard component receives the Pokemon data from the App component. It also receives the team state and the function for adding and removing Pokemon to the team (callback function for the Add and Remove button).
- **Aggregator**: The Aggregator component receives the team state and the aggregate state values from the App component.

### How the User Triggers State Changes
The user triggers state changes as follows:
- **FilterBar**: The user can select and deselect options in the Filter and Sort Sidebar. The user can also reset the Filter and Sort Sidebar to their original state. This is done by clicking the Reset button in the Filter and Sort Sidebar. The Pokemon Cards will reflect the filter and sort preferences.
- **PokemonCard**: The user can add and remove Pokemon from the team. This is done by clicking the Add and Remove button on the Pokemon Cards. The Aggregator will reflect the team state and the aggregate state values.
- **Aggregator**: The user can see the Pokemon in the team and their aggregate attack and HP values. 

