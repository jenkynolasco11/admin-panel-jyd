import axios from 'axios'

export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS'
export const EDIT_CAR_SUCCESS = 'EDIT_CAR_SUCCESS'
export const REMOVE_CAR_SUCCESS = 'REMOVE_CAR_SUCCESS'

export const getCars = () => async dispatch => {
  const { data } = await axios.get('http://localhost:8000/car/all')
  const { cars } = data

  dispatch({
    type: GET_CARS_SUCCESS,
    payload: cars ? cars : []
  })
}

export const createCar = newCar => async dispatch => {
  const { data } = await axios.post('http://localhost:8000/car/new', newCar)
  const { cars } = data

  dispatch({
    type: ADD_CAR_SUCCESS,
    payload: cars ? cars : []
  })
}

export const editCar = car => async dispatch => {
  const { data } = await axios.put(`http://localhost:8000/car/edit/${ car.id }`, car)
  const { cars } = data

  dispatch({
    type: EDIT_CAR_SUCCESS,
    payload: cars ? cars : []
  })
}

export const deleteCar = id => async dispatch => {
  const { data } = await axios.delete(`http://localhost:8000/car/delete/${ id }`)
  const { cars } = data

  dispatch({
    type: REMOVE_CAR_SUCCESS,
    payload: cars ? cars : []
  })
}

// /** TODO: NOT IMPLEMENTED YET */
// export const editCar = editedCar => async dispatch => {
//   let bodyObj = {
//     car: {
//       year: editedCar.year,
//       make: editedCar.make,
//       model: editedCar.model,
//       trim: editedCar.trim,
//       engine: editedCar.engine,
//       drive_type: editedCar.drive_type,
//       body_type: editedCar.body_type,
//       ext_color: editedCar.ext_color,
//       int_color: editedCar.int_color,
//       transmission: editedCar.transmission,
//       price: editedCar.price,
//       sale: editedCar.sale,
//       status: editedCar.status,
//       vin: editedCar.vin
//     },
//     image: editedCar.link,
//     features: {
//       elect_stab: editedCar.elect_stab,
//       wireless: editedCar.wireless,
//       seat: editedCar.seat,
//       keyless: editedCar.keyless,
//       trip_comp: editedCar.trip_comp,
//       tire_pressure: editedCar.tire_pressure,
//       wiper: editedCar.wiper,
//       headlight: editedCar.headlight
//     }
//   }
//   let updatedcar = await axios.patch(`http://localhost:8000/car/${editedCar.id}`, bodyObj)
//   dispatch({
//     type: EDIT_CAR_SUCCESS,
//     payload: updatedcar
//   })
// }
