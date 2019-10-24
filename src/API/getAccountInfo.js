export default function getAccountInfo() {
    return fetch('https://stocks-mocks.herokuapp.com/api/account/info', {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      },
     
    })
    .then(function(data) {
      return data.json()
    })
}

