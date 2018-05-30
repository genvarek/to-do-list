import React from 'react'

export class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }
    removeTodo(id) {
        this.props.removeTodo(id)
    }
    render() {
        return (
            <div className="Wrapper">
            <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove
            </button> {this.props.todo.text}
            </div>

        )
    }
}