import React from 'react';
import Nav from '../common/Nav';
import Table from '../common/Table';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://www.stellarbiotechnologies.com/media/press-releases/json').then(res => {
            return res.json();
        }).then(data => {
            this.setState({data: data.news});
        }).catch(e => {
            console.log(e);
        })
    };

    render() {
        console.log(this.state.data);
        if(this.state.data.length > 0) {
            return (
                <div id="home" className="row">
                    <Nav/>
                    <Table data={this.state.data}/>
                </div>
            )
        } else {
            return (
                <div id="home" className="row">
                    <Nav/>
                </div>
            )
        }
    };
}

export default Home;