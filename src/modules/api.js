export const REQUEST_ERROR = 'api/REQUEST_ERROR';
export const requestError = (status) => ({
  type: REQUEST_ERROR, status
});