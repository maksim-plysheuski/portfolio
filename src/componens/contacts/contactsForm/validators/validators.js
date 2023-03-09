

export const nameValidation = {
    required: "Field is required",
    minLength: {
        value: 3,
        message: "Name must be more then 3 symbols"
    },
    maxLength: {
        value: 35,
        message: "Name must be less then 35 symbols"
    }
}

export const messageValidation = {
    required: "Field is required",
    minLength: {
        value: 25,
        message: "Message must be more then 25 symbols"
    },
    maxLength: {
        value: 900,
        message: "Message must be less then 900 symbols"
    }
}