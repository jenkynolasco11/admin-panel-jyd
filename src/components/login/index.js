import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tryLogin } from '../../actions/app'
import { Card, CardBody, CardTitle, CardHeader, Container, Input, CardFooter } from 'reactstrap'
// import { connect, bindActionCreators } from 'react-redux';

import './styles.css'

class Login extends Component {
    tmpState = {
        user : 'demo',
        pass : 'demo'
    }

    state = {
        user : 'demo',
        pass : 'demo',
        valid : false,
    }

    constructor(props) {
        super(props)

        this._onChange = this._onChange.bind(this)
        this._onSubmit = this._onSubmit.bind(this)
    }

    _onChange(e, name) {
        const val = e.target.value
        // console.log(val)
        return this.setState({ [ name ] : val })
    }

    _onSubmit(user, pass) {
        // console.log(user, pass)
        const tmp = this.tmpState
        if(user !== tmp.user || pass !== tmp.pass ) return this.setState({ valid : true }, () => { setTimeout(() => this.setState({ valid : false }), 4000) })

        // console.log(this.props.tryLogin)
        this.props.login(true)
    }

    render() {
        const { user, pass, valid } = this.state

        return (
            <Container className="container-login">
                <Card className="card-login">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                    </CardHeader>
                    <CardBody className="card-body-login">
                        <Input
                            type="text"
                            onChange={ e => this._onChange(e, 'user') }
                            value={ user }
                        />
                        <Input
                            type="password"
                            onChange={ e => this._onChange(e, 'pass') }
                            value={ pass }
                        />
                        <Input
                            onClick={ () => this._onSubmit(user, pass) }
                            type="button"
                            value="Login"
                        />
                    </CardBody>
                    {
                        valid &&
                        <CardFooter>
                            <div>Please, enter a valid user/pass</div>
                            <div>(user: demo, pass: demo)</div>
                        </CardFooter>
                    }
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = dispatch => ({
    login : isLogin => dispatch(tryLogin(isLogin))
})

export default connect(null, mapStateToProps)(Login)
