import React, { Component } from 'react'

const formatPhone = s => {
    const s2 = ('' + s).replace(/\D/g, '');
    const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
}

class MessagePreview extends Component {
    constructor(props) {
        super(props)

        this._onMessagePreview = this._onMessagePreview.bind(this)
    }

    _onMessagePreview() {
        const { _id, type } = this.props.msg

        this.props.onPreview(_id, type)
    }

    componentDidUpdate() {
        this._onMessagePreview()
    }

    componentDidMount() {
        this._onMessagePreview()
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.msg._id !== this.props.msg._id
    }

    render() {
        const { msg, onClosePreview } = this.props

        const {
            createdBy,
            name,
            email,
            subject,
            phoneNumber,
            message,
            firstname,
            lastname
        } = msg

        return (
            <div className="preview-message card border-primary mb-3">
                <div className="preview-message_window">
                    <div className="card-header text-white bg-primary">
                        <span className="preview-message__close" onClick={ onClosePreview }>X</span>
                        <span className="preview-message__date">{ new Date(createdBy).toDateString() }</span>
                    </div>
                    <div className="preview-message__body card-body">
                        <div className="preview-message__body-info">
                            <div className="preview-message__item"><div>NAME:</div><div>{ name ? name : `${firstname} ${lastname}` }</div></div>
                            <div className="preview-message__item"><div>EMAIL:</div><div>{ email }</div></div>
                            <div className="preview-message__item">
                                <div>{ subject ? 'SUBJECT:' : 'PHONE:' }</div>
                                <div>{ subject ? subject : formatPhone(phoneNumber) }</div>
                            </div>
                        </div>
                        <div className="preview-message__content">
                            {
                                message
                                ? message.split('\n').map((c, i) => <p key={i} className="text-content">{ c }</p>)
                                : JSON.stringify(msg, null, 3)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessagePreview
