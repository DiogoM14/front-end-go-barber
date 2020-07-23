import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;  // Vai receber algo e colocar na interface de forma dinâmica
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
