const url = `${
    `https://subs-backend-gs.guardione.dev`
}`;
export const baseURL = `${url}/api`;

const axiosDefaultConfig = {
  headers: {
  },
  baseURL,
  timeout: 30000,
};
export default axiosDefaultConfig;
