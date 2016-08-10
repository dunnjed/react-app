import React, {Component} from "react";


class MyComponent extends Component {

    render () {
        return <span>
            Hello {this.props.name}, I'm a custom component.
            </span>
    }
}

MyComponent.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default MyComponent;