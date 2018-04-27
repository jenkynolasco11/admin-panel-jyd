import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/app'
import { Form, Card, CardBody, CardTitle, CardHeader, Container, Input } from 'reactstrap'
// import { connect, bindActionCreators } from 'react-redux';

import './styles.css'

class Login extends Component {
    state = {
        user : 'jydauto',
        pass : 'jydautoleasing123',
        invalid : false,
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

    _onSubmit(e) {
        e.preventDefault()
        const { user, pass } = this.state
        // const tmp = this.tmpState

        // if(user !== tmp.user || pass !== tmp.pass ) return this.setState({ invalid : true }, () => setTimeout(() => this.setState({ invalid : false }), 4000))

        this.props.login({ user, pass })
    }

    render() {
        const { user, pass/*, invalid*/ } = this.state

        return (
            <Container className="container-login">
                <Card className="card-login"  style={{ border : '1px solid black' }}>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                    </CardHeader>
                    <CardBody className="card-body-login">
                        <Form onSubmit={ this._onSubmit } xs="12">
                            <Input
                                placeholder="username"
                                type="text"
                                onChange={ e => this._onChange(e, 'user') }
                                value={ user }
                            />
                            <Input
                                placeholder="password"
                                type="password"
                                onChange={ e => this._onChange(e, 'pass') }
                                value={ pass }
                            />
                            <Input
                                // onClick={ () => this._onSubmit(user, pass) }
                                type="submit"
                                value="Login"
                            />
                        </Form>
                    </CardBody>
                    {/*
                        invalid &&
                        <CardFooter>
                            <div>Please, enter a valid user/pass</div>
                            <div>(user: demo, pass: demo)</div>
                        </CardFooter>
                     */}
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = dispatch => ({
    login : data => dispatch(loginUser(data))
})

export default connect(null, mapStateToProps)(Login)
