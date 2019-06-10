import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "red"
        };
    }

    setCategory = async category => {
        await this.setState({ category: category });
    };

    render() {
        return(
            <div className="container-fluid">
                <div className="card-deck">
                    <div className={this.state.category === "red"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                        onClick={() => {this.setCategory("red")}}>
                        <img src="https://picsum.photos/100/50" className="card-img-top"
                            alt="red wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Red</h5>
                            <p className="card-text">e.g. Merlot, Pinot Noir</p>
                        </div>
                    </div>
                    <div className={this.state.category === "white"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                        onClick={() => {this.setCategory("white")}}>
                        <img src="https://picsum.photos/100/50" className="card-img-top"
                             alt="white wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">White</h5>
                            <p className="card-text">e.g. Chardonnay, Pinot Gris</p>
                        </div>
                    </div>
                    <div className={this.state.category === "pink"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {this.setCategory("pink")}}>
                        <img src="https://picsum.photos/100/50" className="card-img-top"
                             alt="pink wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Pink</h5>
                            <p className="card-text">e.g. Rose, White Zinfandel</p>
                        </div>
                    </div>
                    <div className={this.state.category === "bubbly"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {this.setCategory("bubbly")}}>
                        <img src="https://picsum.photos/100/50" className="card-img-top"
                             alt="bubbly wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Bubbly</h5>
                            <p className="card-text">e.g. Champagne, Sparkling Red</p>
                        </div>
                    </div>
                    <div className={this.state.category === "sweet"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {this.setCategory("sweet")}}>
                        <img src="https://picsum.photos/100/50" className="card-img-top"
                             alt="sweet wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Sweet</h5>
                            <p className="card-text">e.g. Port, Ice Wine</p>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputType">Type</label>
                    <input type="text" className="form-control" id="inputType" placeholder="e.g. Merlot"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputYear">Year</label>
                    <input type="number" className="form-control" id="inputYear" placeholder="e.g. 2017"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputRegion">Region</label>
                    <input type="text" className="form-control" id="inputRegion" placeholder="e.g. France"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputLabel">Label</label>
                    <input type="text" className="form-control" id="inputLabel" placeholder="e.g. Cotes du Rhone"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <textarea className="form-control" id="inputDescription" placeholder="e.g. oaky, buttery, smooth"/>
                </div>

            </div>
        )
    }
}

export default Add;