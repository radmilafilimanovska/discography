import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import jimmy from './raw/jimmy.jpg'
import madonna from './raw/madonna.png'
import Johnny from './raw/Johnny.jpg'
import thumb from './raw/thumb.jpg'
import artists from './db.js'
import Browse from './Browse';
import ArtistPage from './ArtistPage';
class BrowseArtists extends React.Component {
    constructor() {
        super();
        this.state = {
            artists: artists,
            id: '',
            name: '',
            cover: '',
            albums: [],
            genre: ''

        }
    }
    componentDidMount() {
        this.setState({
            id: artists[0].id,
            name: artists.name,

        });
    }

    renderArtist = (artistId) => {
        const { artist } = this.state;

        return (
            <div>
                <p>artis[artistId].name</p>
                <p>artis[artistId].bio</p>
                <p></p>
                <p></p>
            </div>
        );
    }
    render() {

        const { artists } = this.state;

        const allArtists = [];
        artists.map((artist) => {
            allArtists.push(artist.id);
        });
        console.log(allArtists);
        return (
            <div className="BrowseArtists container">
                <h1>Browse Artists:</h1>

                <div className="jimmy margin">
                    <Link to="/artistpage/0">
                        <img src={jimmy} className="img img-responsive" />
                    </Link>
                </div>
                <div className="madonna margin">
                    <Link to="/artistpage/1">
                        <img src={madonna} className="img img-responsive" />
                    </Link>
                </div>
                <div className="Johny margin">
                    <Link to="/artistpage/2">
                        <img src={Johnny} className="img img-responsive" />
                    </Link>
                </div>
                <div className="thumb margin">
                    <Link to="/artistpage/3">
                        <img src={thumb} className="img img-responsive" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default BrowseArtists;