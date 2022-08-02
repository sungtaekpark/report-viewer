const url = `${
  process.env.REACT_APP_URL
    ? process.env.REACT_APP_URL
    : `https://subs-backend.guardione.dev`
  // `https://subs-backend-gs.guardione.dev`
}`;
export const baseURL = `${url}/api`;

const axiosDefaultConfig = {
  headers: {},
  baseURL,
  timeout: 30000,
};

export const axiosDefaultConfigForDataUpload = {
  headers: {},
  baseURL,
};

export default axiosDefaultConfig;
