import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createCar, editCar } from '../../actions/car'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

import './newcar.scss'

const IMG_TYPES = ['image/gif', 'image/jpeg', 'image/png']

const ImagePreview = props => (
  <div className="image-preview">
    <div className="close-button" onClick={ null } />
    <img src={ props.src } alt="Preview" />
  </div>
)

class ImageUploader extends Component {
  constructor(props) {
    super(props)

    this.handleUploadClick = this.handleUploadClick.bind(this)
    this.readImageFile = this.readImageFile.bind(this)
    this.deleteImage = this.deleteImage.bind(this)
    this.setMainImage = this.setMainImage.bind(this)
  }

  handleUploadClick() {
    this.refs.fileUploader.click()
  }

  readImageFile(e) {
    e.stopPropagation()
    e.preventDefault()

    const files = e.target.files
    const imgs = Array.from(files).filter(f => IMG_TYPES.includes(f.type))
    const data = {}

    imgs.forEach(img => {
      data[img.name] = {
        loading : true,
        src : null,
        main : false
      }

      const rdr = new FileReader()

      rdr.onload = e => this.props.onChange({
        [ img.name ] : {
          // loading : false,
          src : e.target.result,
          name : img.name,
          main : false
        }
      })

      rdr.readAsDataURL(img)
    })

    this.props.onChange(data)
  }

  deleteImage(name) {
    const imgs = this.props.imgs

    delete imgs[ name ]

    this.props.onChange({ ...imgs })
  }

  setMainImage(name) {
    const imgs = this.props.imgs

    Object.keys(imgs).forEach(k => imgs[ k ].main = k === name )

    this.props.onChange({ ...imgs })
  }

  render() {
    // console.log(this.props.imgs)
    return (
      <div className="img-uploader">
        <div className="img-uploader__title">Images Preview</div>
        <input
          name="car-image"
          type="file"
          id="file"
          onChange={ this.readImageFile }
          ref="fileUploader"
          style={{ display : "none" }}
          accept="image/*"
          multiple
        />
        <div className="image-carousel">
        {
          Object.values(this.props.imgs).map(
            ({ name, src, loading, main }, i) => (
              <div key={ `${ name  }-${ i }` } className="img-wrapper">
                <div className="image-delete" onClick={ () => this.deleteImage(name) }>X</div>
                {
                  loading
                  ? <div className="image-loading"> Loading Image... </div>
                  :
                  <div className={ `image-container${ main ? ' main-image' : '' }` } onClick={ () => this.setMainImage(name) }>
                    <img className="image-preview" src={ src } alt="preview" />
                  </div>
                }
                { main && <div className="main-name">Main Image</div> }
                <div className="image-name">{ name }</div>
              </div>
            )
          )
        }
        </div>
        <div className="cstm-input" onClick={ this.handleUploadClick }> Click to upload Images </div>
      </div>
    )
  }
}

// const defaultState = {
//   id : '',
//   year: 2019,
//   make: 'Toyota',
//   model: 'Corolla',
//   configuration : '480i',
//   mileage: 1300,
//   engine: 'V8',
//   transmission: 'manual 4-speed',
//   bodyType: 'suv',
//   inColor: 'Red, Blue',
//   outColor: 'Yellow, Green',
//   fuel: 'diesel',
//   drivetrain : '4wd',
//   price: 12000,
//   msrp: 14000,
//   status: 'outstanding',
//   vin: '0392319459d9acs91',
//   hp : 130,
//   description : 'Big Description',
//   overview : 'Small Overview',
//   extraFeatures : 'Big\nPowerful\nAwesome\nBright\nColourful\nFast',
//   // isFeatured : false,

//   imgs : {},
//   alertMsg: false
// }
class CreateEditCar extends Component {
  state = {
    id : '',
    year: '',
    make: '',
    model: '',
    configuration : '',
    mileage: '',
    engine: '',
    transmission: '',
    bodyType: '',
    inColor: '',
    outColor: '',
    fuel: '',
    drivetrain : '',
    price: 0,
    msrp: 0,
    status: '',
    vin: '',
    hp : 0,
    description : '',
    overview : '',
    extraFeatures : '',
    isFeatured : true,

    imgs : {},
    alertMsg: false
  }

  constructor(props) {
    super(props)

    this.state = {
      ...this.state,
      // ...defaultState
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.alertMsgClose = this.alertMsgClose.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.id) this.props.editCar(this.state)
    else this.props.createCar(this.state)

    this.setState({
      alertMsg: true,
      year: '',
      make: '',
      model: '',
      configuration : '',
      mileage: '',
      engine: '',
      transmission: '',
      bodyType: '',
      inColor: '',
      outColor: '',
      fuel: '',
      drivetrain : '',
      price: 0,
      msrp: 0,
      status: '',
      vin: '',
      hp : 0,
      description : '',
      overview : '',
      extraFeatures : '',

      imgs : {}
    })

    return setTimeout(() => this.props.history.push('/admin/'), 400)
  }

  alertMsgClose() {
    this.setState({ alertMsg: false })
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    if(!id) return

    try {
      const { data } = await axios.get(`http://localhost:8000/car/edit/${ id }`)

      if(data.ok) {
        const { imgs : ims } = data.car

        const imgs = {}

        Object.keys(ims).forEach(name => {
          const self = this
          const { src, main } = ims[ name ]

          imgs[ name ] = {
            loading : true,
            src : null,
            name : name,
            main : main
          }

          const imgUrl = 'http://localhost:8000'+src

          fetch(imgUrl)
          .then(res => res.blob())
          .then(b => {
            const rdr = new FileReader()

            rdr.onload = e => {
              const { imgs } = self.state
              const img = imgs[ name ]
              const newImg =  { [ name ] : { ...img, loading : false, src : e.target.result }}

              return self.setState({ imgs : { ...imgs, ...newImg}})
            }

            rdr.readAsDataURL(b)
          })
        })

        return this.setState({ ...data.car, imgs })
      }
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    const { imgs } = this.state

    return (
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">ADD NEW CAR</div>
          <div className="card-body text-primary">
            <Form onSubmit={ this.handleSubmit }>
              <Row>
                <Col md="12">
                  <ImageUploader
                    imgs={ imgs }
                    onChange={
                      (mult = {}) => this.setState({ imgs : { ...imgs, ...mult } })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="year">Year</Label>
                    <Input
                      required
                      type="number"
                      name="year"
                      id="year"
                      value={ this.state.year }
                      onChange={(e) => this.setState({year: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="make">Make</Label>
                    <Input
                      required
                      type="text"
                      name="make"
                      id="make"
                      value={ this.state.make }
                      onChange={(e) => this.setState({make: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="model">Model</Label>
                    <Input
                      type="text"
                      name="model"
                      id="model"
                      value={this.state.model}
                      onChange={(e) => this.setState({model: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="configuration">Configuration</Label>
                    <Input
                      type="text"
                      name="configuration"
                      id="configuration"
                      value={this.state.configuration}
                      onChange={(e) => this.setState({configuration: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="body">Body</Label>
                    <Input
                      type="select"
                      name="select"
                      id="body"
                      value={this.state.bodyType}
                      onChange={(e) => this.setState({bodyType: e.target.value})}
                    >
                      <option value="" disabled selected >Select Body</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck</option>
                      <option value="sedan">Sedan</option>
                      <option value="van">Van</option>
                      <option value="coupe">Coupe</option>
                      <option value="wagon">Wagon</option>
                      <option value="convertible">Convertible</option>
                      <option value="sport">Sports Car</option>
                      <option value="diesel">Diesel</option>
                      <option value="crossover">Crossover</option>
                      <option value="luxury">Luxury Car</option>
                      <option value="hybrid">Hybrid/Electric</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="certified">Certified Pre-Owned</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="mileage">Mileage</Label>
                    <Input
                      type="number" id="mileage"
                      value={this.state.mileage}
                      onChange={(e) => this.setState({mileage: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="incolor">Interior Color</Label>
                    <Input
                      type="text"
                      id="incolor"
                      value={this.state.inColor}
                      onChange={(e) => this.setState({inColor: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="outcolor">Exterior Colors</Label>
                    <Input
                      type="text"
                      id="outcolor"
                      value={this.state.outColor}
                      onChange={(e) => this.setState({outColor: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="engine">Engine</Label>
                    <Input
                      type="text"
                      name="engine"
                      id="engine"
                      value={this.state.engine}
                      onChange={(e) => this.setState({engine: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="transmission">Transmission Type</Label>
                    <Input
                      type="select"
                      name="transmission"
                      id="transmission"
                      value={this.state.transmission}
                      onChange={(e) => this.setState({transmission: e.target.value})}
                    >
                      <option value="" disabled selected >Select Transmission</option>
                      <option value="manual 4-speed">Manual 4-Speed</option>
                      <option value="manual 5-speed">Manual 5-Speed</option>
                      <option value="manual 6-speed">Manual 6-Speed</option>
                      <option value="manual 7-speed">Manual 7-Speed</option>
                      <option value="auto 3-speed">Auto 3-Speed</option>
                      <option value="auto 4-speed">Auto 4-Speed</option>
                      <option value="auto 5-speed">Auto 5-speed</option>
                      <option value="auto 6-speed">Auto 6-Speed</option>
                      <option value="auto 7-speed dual clutch">Auto 7-Speed Dual Clutch</option>
                      <option value="auto 8-speed dual clutch">Auto 8-Speed Dual Clutch</option>
                      <option value="auto 8-speed">Auto 8-Speed</option>
                      <option value="auto 9-speed">Auto 9-Speed</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="fuel">Fuel Type</Label>
                    <Input
                      type="select"
                      id="fuel"
                      value={this.state.fuel}
                      onChange={(e) => this.setState({fuel: e.target.value})}
                    >
                      <option value="" disabled selected >Select Fuel</option>
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                      <option value="natural gas">Natural Gas</option>
                      <option value="ethanol">Ethanol</option>
                      <option value="bio diesel">Bio Diesel</option>
                      <option value="electricity">Electricity</option>
                      <option value="hybrid">Fuel/Electricity</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="drivetrain">Drivetrain</Label>
                    <Input
                      type="select"
                      id="drivetrain"
                      value={this.state.drivetrain}
                      onChange={(e) => this.setState({drivetrain: e.target.value})}
                    >
                      <option value="" disabled selected >Select Drivetrain</option>
                      <option value="awd">AWD</option>
                      <option value="rwd">RWD</option>
                      <option value="fwd">FWD</option>
                      <option value="4wd">4WD</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="hp">Horse Power</Label>
                    <Input
                      type="number"
                      id="hp"
                      value={this.state.hp}
                      onChange={(e) => this.setState({hp: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="vin">VIN</Label>
                    <Input
                      type="text" id="vin"
                      value={this.state.vin}
                      onChange={(e) => this.setState({vin: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input
                      type="select"
                      id="status"
                      value={this.state.status}
                      onChange={(e) => this.setState({status: e.target.value})}
                    >
                      <option value="" disabled selected >Select Status</option>
                      <option value="outstanding">Outstanding</option>
                      <option value="clean">Clean</option>
                      <option value="fair">Fair</option>
                      <option value="rough">Rough</option>
                      <option value="damaged">Damaged</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="Price">Price</Label>
                    <Input
                      type="text" id="Price"
                      value={this.state.price}
                      onChange={(e) => this.setState({price: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3" sm="6" xs="12">
                  <FormGroup>
                    <Label for="msrp">MSRP</Label>
                    <Input
                      type="text" id="msrp"
                      value={this.state.msrp}
                      onChange={(e) => this.setState({msrp: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="6" xs="12">
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      id="description"
                      value={this.state.description}
                      onChange={(e) => this.setState({description: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col sm="6" xs="12">
                  <FormGroup>
                    <Label for="overview">Overview</Label>
                    <Input
                      type="textarea" id="overview"
                      value={this.state.overview}
                      onChange={(e) => this.setState({overview: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="6" xs="12">
                  <FormGroup>
                    <Label for="features">Extra Features (Separate Each By Line)</Label>
                    <Input
                      type="textarea"
                      id="features"
                      placeholder="Separate Each Feature by Line"
                      value={this.state.extraFeatures}
                      onChange={(e) => this.setState({extraFeatures: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col sm="6" xs="12">
                  <FormGroup id="checkbox-featured">
                    <Label for="is-featured">Should be Featured?</Label>
                    <Input
                      type="checkbox"
                      id="is-featured"
                      // value={this.state.isFeatured}
                      checked={this.state.isFeatured}
                      onChange={ e => this.setState({ isFeatured: e.target.checked }) }
                    />
                    <div className="checkbox-message">This car will be displayed in Featured Specials</div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="10">
                  <FormGroup>
                    <Alert
                      isOpen={this.state.alertMsg}
                      toggle={this.alertMsgClose}
                      color="success">
                      Car saved!
                    </Alert>
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <button type="submit" className="btn btn-success">Save</button>
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <Link to={`/admin/`}>
                      <button type="button" className="btn btn-danger">Cancel</button>
                    </Link>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCar: bindActionCreators(createCar, dispatch),
    editCar : bindActionCreators(editCar, dispatch)
  }
}

const CreateEditCarWithRouter = withRouter(CreateEditCar)

export default connect(null, mapDispatchToProps)(CreateEditCarWithRouter)
