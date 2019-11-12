import React from "react";
import { Tab } from "semantic-ui-react";
import WelcomePage from './WelcomePage'
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const panes = [

    { menuItem: { icon: 'home', content: 'Home', key: "home"},
    render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },

    { menuItem: { icon: 'users', content: 'Characters', key: "char"},
    render: () => <Tab.Pane><CharacterList /></Tab.Pane> },

    { menuItem: { icon: 'map', content: 'Locations', key: "loc"},
    render: () => <Tab.Pane><SearchForm /></Tab.Pane> },

    { menuItem: { icon: 'video camera', content: 'Episodes', key: "epi"},
    render: () => <Tab.Pane>Episodes Page</Tab.Pane> }
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav
