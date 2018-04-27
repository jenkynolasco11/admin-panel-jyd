import React, { Component } from 'react'
import Editor from 'react-rte'

class TextEditor extends Component {
    state = { value : Editor.createEmptyValue() }

    constructor(props) {
        super(props)

        this._onChange = this._onChange.bind(this)
        this._onCancel = this._onCancel.bind(this)
        this._onSend = this._onSend.bind(this)
    }

    _onChange(value) {
        return this.setState({ value })
    }

    _onCancel() {
        let confirmed = true
        const text = this.state.value.toString('markdown')

        // eslint-disable-next-line no-restricted-globals
        if(text) confirmed = confirm('Are you sure you want to cancel you message?')

        if(confirmed) return this.props.onClose()
    }

    _onSend() {
        const { value } = this.state
        const { _id, type } = this.props.msg


        const text = value.toString('markdown').replace(/(\r\n|\n|\r)/gm, '')

        if(text.length > 1) return this.props.onSubmitMessage(_id, type, value.toString('markdown'))

        return this.props.onClose()
    }

    render() {
        return (
            <div className="reply-message card border-primary mb-3">
                <div className="reply-message__window">
                    <div className="card-header text-white bg-primary">
                        <span className="preview-message__close" onClick={ this.props.onClose }>X</span>
                        <span className="preview-message__date">
                        {
                            `Reply message for ${ this.props.msg.name }`
                            // new Date(this.props.msg.createdBy).toDateString()
                        }
                        </span>
                    </div>
                    <Editor
                        value={ this.state.value }
                        onChange={ this._onChange }
                        placeholder={ 'Message to send' }
                        autoFocus
                    />
                    <div className="reply-message__controls">
                        <div className="button" onClick={ this._onCancel }>
                            Cancel
                        </div>
                        <div className="button" onClick={ this._onSend }>
                            Reply
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditor
