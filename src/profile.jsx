const React = require("react");
const { Component } = React;

module.exports = class Profile extends Component {
    render() {
        return (
            <box label="Profile"
                left='2%'
                top="5%"
                width='45%'
                height="45%"
                border={{ type: 'line' }}
                style={{ border: { fg: 'green' } }}>
                <box
                    left='5%'
                    top="5%"
                    width='90%'
                    height="80%">
                    {"Birthday: 28 Jan, 2001\nGender: Male\nNot a general adult man"}
                </box>
            </box>
        );
    }
}
