import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import artists from './db.js';
import Header from './Header';
class ArtistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.number,
            nesho: ""
        }
    }

    render() {
        const { id } = this.state;
        console.log(this.props);
        const sliki = artists[id].albums.map(album => {
            return (
                <img src={`/albums/${album.cover}.jpg`} className="img-width" />
            )
        })
        return (
            <div className="ArtistPage" key={artists[id].id}>
                <img src={`/covers/${artists[id].cover}.jpg`} />
                <p className="font">{artists[id].name}</p>
                <p className="bio">{artists[id].bio}</p>
                <div className="col-md-6 col-md-offset-3 flex">
                    <div>
                        {sliki}
                    </div>
                </div>
            </div>
        )
    }
}
export default ArtistPage;