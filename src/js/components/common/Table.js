import React from 'react';
import Infinite from 'react-infinite';

class Table extends React.Component{
    constructor() {
        super();
        this.state = {
            counter: 0,
            totalRows: [],
            displayedRows: []
        }
    }

    updateDisplay() {
        console.log("Updating display");
        let i;
        for(i = this.state.counter; i < (this.state.counter + 25); i++) {
            console.log(this.state.displayedRows);
            this.setState({displayedRows: this.state.displayedRows.push(this.state.totalRows[i])});
        }
        console.log(this.state);
    }

    handleLoad() {
        console.log("Handling load");
        if(this.state.counter < 100) {
            this.setState({counter: this.state.counter + 25});
        }

        console.log(this.state);
        this.updateDisplay();
    }

    componentDidMount() {
        this.props.data.forEach(row => {
            this.setState({totalRows: this.state.totalRows.push(
                <div className="article-row row">
                    <h5 className="col-sm-9">{row.title}</h5>
                    <h5 className="col-sm-3">{row.published}</h5>
                </div>
            )})
        });

        this.updateDisplay();
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        if(this.state.displayedRows.length > 0) {
            return (
                <div className="col-sm-7 table">
                    <div className="row">
                        <h4 id="title" className="col-sm-9">Title</h4>
                        <h4 id="publish-date" className="col-sm-3">Date Published</h4>
                    </div>
                    <div>
                        {/* <Infinite containerHeight={1400} 
                                      elementHeight={70} 
                                      infiniteLoadBeginBottomOffset={70} 
                                      onInfiniteLoad={() => handleLoad()}> */}
                            {this.state.displayedRows}
                        {/* </Infinite> */}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-sm-7 table">
                    <div className="row">
                        <h4 id="title" className="col-sm-9">Title</h4>
                        <h4 id="publish-date" className="col-sm-3">Date Published</h4>
                    </div>
                    <div>
                        <h1>No rows to display!</h1>
                    </div>
                </div>
            );
        }
    }
}

export default Table; 