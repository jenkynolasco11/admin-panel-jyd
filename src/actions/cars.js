import axios from 'axios'

export const GET_CARS_PENDING = 'GET_CARS_PENDING'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const ADD_CAR_PENDING = 'ADD_CAR_PENDING'
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS'
export const EDIT_CAR_PENDING = 'EDIT_CAR_PENDING'
export const EDIT_CAR_SUCCESS = 'EDIT_CAR_SUCCESS'
export const REMOVE_CAR_PENDING = 'REMOVE_CAR_PENDING'
export const REMOVE_CAR_SUCCESS = 'REMOVE_CAR_SUCCESS'

export const getCars = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CARS_PENDING })
    let cars = await axios.get('http://localhost:8000/cars')
    dispatch({
      type: GET_CARS_SUCCESS,
      payload: cars
    })
  }
}

export const createCar = (newCar) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CAR_PENDING })
    let newcar = await axios.post('http://localhost:8000/car', newCar)
    dispatch({
      type: ADD_CAR_SUCCESS,
      payload: newcar
    })
  }
}

export const editCar = (carId, editedCar) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_CAR_PENDING })
    let updatedcar = await axios.patch(`http://localhost:8000/car/${carId}`, editedCar)
    dispatch({
      type: EDIT_CAR_SUCCESS,
      payload: updatedcar
    })
  }
}

export const deleteCar = (carId) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CAR_PENDING })
    let removedcar = await axios.delete(`http://localhost:8000/car/${carId}`)
    dispatch({
      type: REMOVE_CAR_SUCCESS,
      payload: removedcar
    })
  }
}
