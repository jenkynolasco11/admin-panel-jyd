export function autofiller (formComponent) {

    const fetchedCarData = formComponent.state.carSet;

    const removedNullBody = fetchedCarData.filter(carData => carData.modelBody !== 'NULL')
    const removedNullTrim = fetchedCarData.filter(carData => carData.modelTrim !== 'NULL' || carData.modelTrim !== '')
    const bodyTypeOptions = removedNullBody.map(carData => carData.modelBody)
    const trimOptions = removedNullTrim.map(carData => carData.modelTrim)

    formComponent.setState({ 
      bodyTypes: [ ...new Set(bodyTypeOptions) ],
      trimSet: [ ...new Set(trimOptions) ]
    });
}

export function autofillerAfterTrim(formComponent, trimSelected) {
    const selectedCar = formComponent.state.carSet.filter(carData => formComponent.state.configuration === carData.modelTrim).pop();
    console.log(formComponent.state.carSet, selectedCar)
    formComponent.setState({
        mileage: selectedCar.modelLkmMixed,
        transmission: selectedCar.modelTransmission_type,
        fuel: selectedCar.modelEngineFuel,
        bodyType: selectedCar.modelBody,
        drivetrain: selectedCar.modelDrive,
        engine: selectedCar.modelEngineCyl,
        hp: Math.round(parseInt(selectedCar.modelEnginePowerPs) / 0.986)
    });
}
