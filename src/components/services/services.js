export function Service (endpoint, method, body = {}, token = null) {
    let BaseUrl = 'https://alsatoju-dev.herokuapp.com/'
  
    if (token) {
      return new Promise((resolve, reject) => {
        fetch(BaseUrl + endpoint, {
          method: method,
          body: JSON.stringify(body),
          headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          return response.json()
        }).then((responseJson) => {
          resolve(responseJson)
        }).catch((error) => {
          reject(error)
        })
      })
    } else {
      console.log(body);
      return new Promise((resolve, reject) => {
        fetch(BaseUrl + endpoint, {
          method: method,
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          return response.json()
        }).then((responseJson) => {
          resolve(responseJson)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }