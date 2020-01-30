const ERROR_LOG = 'ERROR_LOG';
const errorLog = error => ({
  type: ERROR_LOG,
  error,
});

export { ERROR_LOG, errorLog };
