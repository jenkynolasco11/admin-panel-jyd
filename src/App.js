import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Admin Components
import AdminNavigationBar from './components/admin/admin_top_navigation'
import Cars from './components/admin/admin_cars'
import NewCar from './components/admin/newcar'
import Login from './components/login'
import Messages from './components/messages/messages'
import Chat from './components/chat'

import { getCars } from './actions/car'
import { getMessages } from './actions/message'
import { checkAuth, connectSocket } from './actions/app'

const test = false

const AdminRoutes = () => (
    <React.Fragment>
      <AdminNavigationBar />
      <Route exact path="/admin" component={ Cars } />
      <Route exact path="/admin/car-add-edit/:id?" component={ NewCar } />
      <Route exact path="/admin/messages" component={ Messages } />
      {/* <Route exact path="/admin/editcar/:id" component={ EditCar } /> */}
      {/* <Route exact path="/admin/messages" component={ Messages } /> */}
    </React.Fragment>
)

const Routes = () => (
  <Router>
    <Switch>
      <Route component={ AdminRoutes }  path="/" />
      <Redirect to="/admin"/>
      {/* <Route component={ AdminRoutes } /> */}
    </Switch>
  </Router>
)

class App extends Component {
  componentDidMount() {
    this.props.checkAuth()
    this.props.connectSocket()
  }

  componentWillUnmount() {
    try{
      this.props.socket.disconnect()
    } catch(e) {
      console.log(e)
    }
  }

  render() {

    if(test) return (
      <React.Fragment>
        <Routes />
        <Chat />
      </React.Fragment>
    )

    return (
      <div className="App">
        {
          this.props.isLoggedIn
          ?   <React.Fragment>
                <Routes />
                <Chat />
              </React.Fragment>
          : <Login />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { app } = state

  return {
    isLoggedIn : app.logged,
    socket : app.socket
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCars,
  getMessages,
  checkAuth,
  connectSocket
}, dispatch)

// function mapDispatchToProps(dispatch){
//   return{
//       getCars: bindActionCreators(getCars, dispatch),
//       getMessages: bindActionCreators(getMessages, dispatch),
//       checkAuth : bindActionCreators(checkAuth, dispatch),
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps) (App)
