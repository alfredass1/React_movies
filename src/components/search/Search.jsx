import React, {Component} from 'react';
import './search.scss';
import Table from "../table/Table";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reiksme: '',moviesData:{}};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({reiksme: event.target.value});
    }


    handleSubmit(event) {

        event.preventDefault();
        fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${this.state.reiksme}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        moviesData: data
                        } )
                    console.log(this.state.moviesData);

                }
            )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input class="form-control" type="text" value={this.state.reiksme}onChange={this.handleChange} aria-label="Search" />
                </label>
                <div class="col-12">
                <input type="submit" className="btn btn-primary" value="Submit"/>
                </div>
                <Table data={this.state.moviesData}/>
            </form>


        );
    }
}

export default Search;

