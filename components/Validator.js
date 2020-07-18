const Validate = (value) => {
    let isValid = true
    let parsedValue = parseFloat(value)

    isValid = isValid && isNumberValidator(parsedValue)
    return isValid
}

export default Validate

function isNumberValidator(value) {
    return !isNaN(value)
}
