import React from 'react';
import LocationRow from './LocationRow';

//List of locations on Side Menu
class LocationList extends React.Component {
    render() {
        const { locations, selectFavourite } = this.props;
        console.log(locations)
        return (
            <div id="favouriteId" className="favourite-item-container favourite-item-container-responsive">
                {
                    locations.map((location) => (
                        <LocationRow key={location.name} selectFavourite={selectFavourite} location={location} />
                    ))
                }
            </div>
        );
    }
}

export default LocationList;