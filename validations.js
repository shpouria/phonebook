var validations = {
    contact: [
      {
        name: 'firstName',
        message: "Enter first name",
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'first name must be only letters, spaces, or dashes'
      },
      {
          name: 'lastName',
          message: "Enter last name",
          validator: /^[a-zA-Z\s\-]+$/,
          warning: 'last name must be only letters, spaces, or dashes'
      },
      {
          name: 'phone',
          message: "Enter phone number",
          validator: /^[0-9\s\-]+$/,
          warning: 'last name must be only numbers'
      }
  ]
}

module.exports = validations;
