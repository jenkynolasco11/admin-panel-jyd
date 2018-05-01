import React, { Component } from 'react'
import { Table, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-icons-kit'
import { bin, pencil } from 'react-icons-kit/icomoon'
import { androidCar, androidMail, androidFavorite } from 'react-icons-kit/ionicons'
import { Link } from 'react-router-dom'

import { deleteCar, getCars } from '../../actions/car'
import { getStats } from '../../actions/app'

import './admin.scss'

class Inventory extends Component {
  state = { toolTip : false }

  render() {
    return (
      <tbody className="t-body">
        {
          this.props.cars.map((car, i) => (
            <tr key={ car.id }>
              {/* <th scope="row">{car.id}</th> */}
              <td>{car.year}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.bodyType}</td>
              {/* <td>{car.outColor}</td> */}
              <td>{car.price}</td>
              {/* <td>{car.status}</td> */}
              <td>
                <Link to={`/admin/car-add-edit/${ car.id }`}>
                  <Icon icon={pencil}/>
                </Link>
              </td>
              <td>
                <Icon
                  className="text-danger delete-car"
                  icon={bin}
                  onClick={()=> this.props.handleDelete(car.id)}
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    )
  }
}
class Cars extends Component {

  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    if(confirm("Are you sure you want to delete this item?")) return this.props.deleteCar(id) // eslint-disable-line
  }

  componentDidMount() {
    this.props.getCars()
    this.props.getStats()
  }

  render(){
    const { inbox = 0, /*toSell = 0,*/ builds = 0, interested = 0 } = this.props.stats

    return(
      <div className="container">
        <br/>
        <div className="card mb-3">
          <div className="card-header bg-primary"> SUMMARY </div>
          <div className="card-body" style={{ border : '1px solid black' }}>
            <Row>
              <Col md="4" className="text-center">
                <Link to={'/admin/messages'}>
                  <Icon icon={androidMail} className="text-danger" /> { `INBOX ${ inbox ? `(${inbox})` : '' }` }
                </Link>
              </Col>
              {/* <Col md="3">
                <Link to={'#'}>
                  <Icon icon={pencil} className="text-danger" /> { `SELLS ${ toSell ? `(${toSell})` : '' }` }
                </Link>
              </Col> */}
              <Col md="4" className="text-center" >
                <Link to={'#'}>
                  <Icon icon={androidCar} className="text-danger" /> { `BUILDS ${ builds ? `(${builds})` : ''}` }
                </Link>
              </Col>
              <Col md="4" className="text-center" >
                <Link to={'#'}>
                  <Icon icon={androidFavorite} className="text-danger" /> { `INTERESTED ${ interested ? `(${interested})` : '' }` }
                </Link>
              </Col>
            </Row>
          </div>
        </div>
        {/* <Row>
          <Col md="4">
            <TotalMessage totalMessages={totalMessages}/>
          </Col>
          <Col md="4">
            <TotalInventory cars={cars} />
          </Col>
          <Col md="4">
            <Specials specials={specials}/>
          </Col>
        </Row> */}
        {/* <br/> */}
        <div className="card border-primary mb-3 car-table">
          <div className="card-header text-white bg-primary">INVENTORY</div>
          <div className="card-body">
            <Table hover>
              <thead className="text-success t-head">
                <tr>
                  {/* <th>ID</th> */}
                  <th>YEAR</th>
                  <th>MAKE</th>
                  <th>MODEL</th>
                  <th>BODY</th>
                  {/* <th>COLOR</th> */}
                  <th>PRICE</th>
                  {/* <th>STATUS</th> */}
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <Inventory cars={ this.props.cars } handleDelete={ this.handleDelete }/>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return{
    cars: state.car,
    messages: state.messages,
    stats : state.app.stats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCars,
    deleteCar,
    getStats
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
