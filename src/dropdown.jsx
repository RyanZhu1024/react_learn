// we need to show a button, and a list.
// component should know when to show the list
// based on when the user click
var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
    handleClick: function(){
        // to use setState , we can force the component to rerender itself,call render function again
        this.setState({open: !this.state.open})
    },
    handleItemClick: function(item){
        console.log(item);
        this.setState({
            open: false,
            itemTitle: item
        })
    },
    getInitialState: function(){
        return {open: true};
    },
    render: function(){
        var list = this.props.items.map(function(item){
            return <ListItem item={item}
                whenItemClicked={this.handleItemClick}
                className={this.state.itemTitle === item ?"active":""}/>
        }.bind(this));

        return <div className="dropdown">
            <Button className="btn-default"
                title={this.state.itemTitle || this.props.title}
                subTitleClassName="caret"
                whenClicked={this.handleClick}/>
            <ul className={"dropdown-menu " + (this.state.open ? "show":"") }>
                {list}
            </ul>
        </div>
    }
})
