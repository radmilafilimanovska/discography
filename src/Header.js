import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import prva from './raw/prva.jpg';
import BrowseArtists from './BrowseArtists';
class Header extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <img src={prva} className="img img-responsive margin-bottom" />
                {/* <BrowseArtists /> */}
            </div>
        )
    }
}

export default Header;