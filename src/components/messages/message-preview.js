import React, { Component } from 'react'

const formatPhone = s => {
    const s2 = ('' + s).replace(/\D/g, '');
    const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
}

class MessagePreview extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        this._onMessagePreview = this._onMessagePreview.bind(this)
        this._onReply = this._onReply.bind(this)
    }

    _onMessagePreview() {
        const { _id, type } = this.props.msg

        this.props.onPreview(_id, type)
    }

    _onReply(msg) {
        return this.props.onReply(msg)
    }

    componentDidUpdate() {
        return this._onMessagePreview()
    }

    componentDidMount() {
        return this._onMessagePreview()
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
            dob,
            subject,
            phoneNumber,
            message,
            firstname,
            lastname,
            street,
            city,
            state,
            zip,
            ssn,
            homeOwnership,
            monthlyRent,
            yearsLivingInPlace,
            monthsLivingInPlace,
            previousAddress,
            driverLicense,
            employement,
            make,
            model,
            vin,
            year,
            condition,
            mileage,
            type,
            reply
        } = msg


        const getCreditAppData = () => {
            return (
                <div>
                    <div className="preview-message__item">
                        <div>ADDRESS:</div>
                        <div>{ `${street}, ${city}, ${state} ${zip}` }</div>
                    </div>
                    <div className="preview-message__item">
                        <div>HOME OWNERSHIP:</div>
                        <div>{ homeOwnership }</div>
                    </div>
                    <div className="preview-message__item">
                        <div>MONTHLY RENT:</div>
                        <div>{`USD$${ monthlyRent }`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>TIME AT ADDRESS:</div>
                        <div>{`${yearsLivingInPlace} years and ${monthsLivingInPlace} months.`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>PREVIOUS ADDRESS:</div>
                        <div>{`${previousAddress}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>DRIVER'S LICENSE #:</div>
                        <div>{`${driverLicense.number}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>DRIVER'S LICENSE STATE:</div>
                        <div>{`${driverLicense.stateIssued}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>DRIVER'S LICENSE EXPIRATION:</div>
                        <div>{`${new Date(driverLicense.expirationDate).toLocaleDateString('en-us')}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>EMPLOYER NAME:</div>
                        <div>{`${employement.employerName}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>EMPLOYER PHONE:</div>
                        <div>{ employement.employerPhone ? employement.employerPhone : 'N/A' }</div>
                    </div>
                    <div className="preview-message__item">
                        <div>EMPLOYER ADDRESS:</div>
                        <div>{`${employement.employerAddress}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>JOB TITLE:</div>
                        <div>{`${employement.employerName}`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>EMPLOYEE LENGTH OF TIME:</div>
                        <div>{`${employement.employerYearsAtWork} years and ${employement.employerMonthsAtWork} months.`}</div>
                    </div>
                    <div className="preview-message__item">
                        <div>MONTHLY INCOME:</div>
                        <div>{employement.monthlyIncome ? `USD$${employement.monthlyIncome}` : 'N/A' }</div>
                    </div>
                </div>
            )
        }

        const getMessageData = () => {
            return (
                <div className="preview-message__content">
                    <p>{message}</p>
                </div>
            );
        }

        const getSellingCarData = () => {
            return (
                <div>
                    <div className="preview-message__item"><div>Car Details:</div><div>{ `${make} ${model} ${year}` }</div></div>
                    <div className="preview-message__item"><div>Mileage:</div><div>{ mileage }</div></div>
                    <div className="preview-message__item"><div>Condition:</div><div>{ condition }</div></div>
                    <div className="preview-message__item"><div>VIN:</div><div>{ vin }</div></div>
                </div>
            )
        }

        const personalCreditData = () => {
            return (
                <div>
                    <div className="preview-message__item"><div>DATE OF BIRTH:</div><div>{ new Date(dob).toLocaleDateString('en-us') }</div></div>
                    <div className="preview-message__item"><div>SSN:</div><div>{ ssn }</div></div>
                </div>
            )
        }
        return (
            <div className="preview-message card border-primary mb-3">
                <div className="preview-message__window">
                    <div className="card-header text-white bg-primary">
                        <span className="preview-message__close" onClick={ onClosePreview }>X</span>
                        <span className="preview-message__date">{ new Date(createdBy).toDateString() }</span>
                    </div>
                    <div className="preview-message__body card-body">
                        <div className="preview-message__body-info">
                            <div className="preview-message__item"><div><h2>PERSONAL INFORMATION</h2></div></div>
                            <div className="preview-message__item"><div>NAME:</div><div>{ name ? name : `${firstname} ${lastname}` }</div></div>
                            <div className="preview-message__item"><div>EMAIL:</div><div>{ email }</div></div>
                            <div className="preview-message__item"><div>{ subject ? 'SUBJECT:' : 'PHONE:' }</div><div>{ subject ? subject : formatPhone(phoneNumber) }</div></div>
                            { type === 'credit' && personalCreditData() }
                            { type === 'credit' && getCreditAppData() }
                            { type === 'sell' && getSellingCarData() }
                        </div>
                            { type === 'message' && getMessageData() }
                        {
                            reply.length > 0 &&
                            <div className="preview-message__replies">

                            {
                                // TODO: Add nested blockquotes for X amount of replies
                                reply.map((r, i) => <blockquote key={ i }> <p>{ `${ new Date(r.createdBy).toLocaleDateString() } ${ new Date(r.createdBy).toLocaleTimeString() }:` }<br />{ r.text }</p> </blockquote>)
                            }
                            </div>
                        }
                        <div className="preview-message__controls">
                            <div className="button delete" onClick={ () => {} }>
                                Delete
                            </div>
                            <div className="button" onClick={ () => this._onReply(msg) }>
                                Reply
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessagePreview
