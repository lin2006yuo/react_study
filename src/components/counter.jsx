import React, { Component } from "react";

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     imageUrl: "https://picsum.photos/200",
    //     tags: ["tag1", "tag2", "tag3"]
    // };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return (
    //         <ul>
    //             {this.state.tags.map(tag => (
    //                 <li key={tag}>{tag}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // };
    render() {
        return (
            <div>
                {this.props.children}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span
                    style={{ fontSize: 30 }}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button
                    // onClick={this.doHandleIncrement}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {/* {this.renderTags()} */}
                <button
                    onClick={() => {
                        this.props.onDelete(this.props.counter.id);
                    }}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
