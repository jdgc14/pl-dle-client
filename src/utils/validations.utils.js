export const validateSingleValue = (valueToFind, valueSelected) => {
    return valueToFind === valueSelected
}

export const validateReleaseYear = (valueToFind, valueSelected) => {
    if (valueToFind < valueSelected) {
        return 'minus'
    } else if (valueToFind > valueSelected) {
        return 'more'
    }
    return true
}

export const validateArrayValues = (arrayToFind, arraySelected) => {
    let coincidences = 0

    const validateCharacteristics = (item) => {
        if (arraySelected.includes(item)) {
            coincidences++
        }
    }

    arrayToFind?.forEach(validateCharacteristics)

    if (coincidences === arraySelected?.length) {
        return true
    }

    if (!coincidences) {
        return false
    }

    return coincidences
}
