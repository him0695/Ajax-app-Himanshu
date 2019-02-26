import React from 'react';
import './searchForm.css';
const TrackList = (props) => {
    return (
        <div className="trackList">
            <td >
                {props.trackName.trackName}
            </td>
            <td>
                <img src={props.trackName.artworkUrl60} />
            </td>
            <td>
                {props.trackName.trackPrice}
            </td>
            


        </div >
    )
}
export default TrackList;