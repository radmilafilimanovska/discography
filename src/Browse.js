import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import artists from './db.js'
import BrowseArtists from './BrowseArtists';
import ArtistPage  from './ArtistPage'
class Browse extends React.Component {
    render(){
        return(
           <div>
               <Switch>
                    <Route exact path='/' component={BrowseArtists}/>
                    <Route exact path='/artistpage/:number' component={ArtistPage}/>
               </Switch>
           </div> 
        )
    }
}

export default Browse;