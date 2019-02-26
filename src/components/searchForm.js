import React, { Component } from 'react';
import axios from 'axios';
import TrackList from './trackList';
import 'bootstrap/dist/css/bootstrap.css';
import './searchForm.css';

class SearchForm extends Component {
    state = {
        tracks: []
    }
    componentDidMount() {
        let singerName = document.getElementById("songName").value;

        axios.post('https://itunes.apple.com/search?term=' + singerName + '&limit=5').
            then((response) => {
                this.setState({
                    tracks: response.data.results
                });
                console.log(response);
            });
    }


    render() {
        const tracks = this.state.tracks.map(track => {
            return <tr className="list-group-item"><TrackList
                
                trackName={track}
            /></tr>
        });
        return (
            <div className="searchForm">
                <h2>Itunes</h2>
                Artist: <input type="text" id="songName" />
                {/* <input type="text" /> */}
                <br />

                <button className="searchBtn" type="button" class="btn btn-primary" onClick={this.componentDidMount.bind(this)}>Search</button>
                <table class="table table-striped">
                    {/* <thead>
                        <tr>
                            <th> Song </th>
                            <th> image </th>
                            <th> price </th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {tracks}
                    </tbody>

                </table>
                {/* <TrackList name={this.state.tracks.map(track=>{return track})}></TrackList> */}
            </div>
        );
    }
}

export default SearchForm;