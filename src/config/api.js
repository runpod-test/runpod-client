// Desc: Application API configuration
// Note: Shared config per application environment can live here; things like API URL, etc.
// In a case where there are multiple applications (prod, sandbox) for each environment,
// this can come in handy for sharing the config across the codebase

export const config = {
  baseAPIURL: 'http://localhost:6062/api/v1'
};
