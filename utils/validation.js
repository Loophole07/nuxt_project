// Product validation
export const validateProduct = (product) => {
  const errors = []

  if (!product.name || product.name.trim().length < 3) {
    errors.push('Name must be at least 3 characters long.')
  }

  if (!product.model || product.model.trim().length === 0) {
    errors.push('Model is required.')
  }

  if (!product.price || isNaN(Number(product.price.replace(/,/g, '')))) {
    errors.push('Price must be a valid number.')
  }

  if (!product.details || product.details.trim().length < 10) {
    errors.push('Details must be at least 10 characters long.')
  }

  return errors
}

// User validation (you can also use this in user forms)
export const validateUser = (user) => {
  const errors = []

  if (!user.name || user.name.trim().length < 3) {
    errors.push('Name must be at least 3 characters long.')
  }

  if (!user.email || !/\S+@\S+\.\S+/.test(user.email)) {
    errors.push('Enter a valid email address.')
  }

  if (user.phone && !/^\d{10}$/.test(user.phone)) {
    errors.push('Phone must be 10 digits.')
  }

  if (!user.address || user.address.trim().length < 5) {
    errors.push('Address must be at least 5 characters long.')
  }

  return errors
}
