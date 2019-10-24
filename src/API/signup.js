export default function signUp(newUser) {
    return fetch('https://stocks-mocks.herokuapp.com/api/auth/signup', {
      method: "POST",
      mode: "cors",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    .then(function(response) {
      return response.json()
    })
    
}
