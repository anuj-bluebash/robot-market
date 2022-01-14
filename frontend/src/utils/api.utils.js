import axios from 'axios';

function handleAPI(path, params, method, data = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  let url = 'http://localhost:8000' + path;
  return axios({
    method,
    url,
    data,
    headers
  });
}

export { handleAPI };
