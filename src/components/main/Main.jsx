import React, {Component} from 'react';
import './main.scss';


class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            movies: []

        }
    }

    render(){
        const postMovies = this.state.movies.map;
        return(
            <main>
                {postMovies}
            </main>
        );
    }
}

export default Main