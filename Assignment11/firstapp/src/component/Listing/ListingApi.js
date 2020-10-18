import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';


const url = "https://developerfunnelrestapi.herokuapp.com/restaurant?mealtype="
const mealurl = "https://developerfunnelrestapi.herokuapp.com/mealtype"

class ListingApi extends Component {
    constructor(props) {
        super()

        this.state = {
            hotelist: '',
            mealname: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        Filter Here
                    
                    </div >
            <div className="col-md-10">
                <center>
                    <h3>HOTELS FOR {this.state.mealname}</h3>
                </center>
                <ListingDisplay listdata={this.state.hotelist} />
            </div>
                </div >
            </div >
        )
    }

    componentDidMount() {
        var mealid = this.props.match.params.id
        sessionStorage.setItem('mealid', mealid)
        axios.get(`${mealurl}`)
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i]._id == Number(mealid)) {
                        this.setState({ mealname: (response.data[i].name).toUpperCase() })
                        i = response.data.length;
                    } else {
                        this.setState({ mealname: 'Wrong Input' })
                    }
                }

            })
        axios.get(`${url}${mealid}`)
            .then((response) => { this.setState({ hotelist: response.data }) })
    }
}

export default ListingApi;