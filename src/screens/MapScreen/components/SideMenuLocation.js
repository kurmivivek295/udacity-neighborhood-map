import React from 'react'
import LocationList from './LocationList';

// Top right corner side menu with location list
export default class SideMenuLocation extends React.Component {
    render() {
        const { locations,selectFavourite } = this.props;
        return (
            <div id="container">
                <div className="humberger-search">
                    <input id="pac-input" className="controls" type="text" placeholder="Search Box"
                        onChange={(event) => this.props.onSearchLocation(event.target.value)} />
                    <input type="image" className="humberger" src="imgs/humberger.png" />
                </div>
                <LocationList selectFavourite={selectFavourite} locations={locations}/>
            </div>
        )
    }
}