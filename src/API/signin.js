export default function signIn(newUser) {
    return fetch('https://stocks-mocks.herokuapp.com/api/auth/signin', {
      method: "POST",
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
