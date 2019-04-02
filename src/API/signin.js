export default function signIn(user) {
    return fetch('https://stocks-mocks.herokuapp.com/api/auth/signin', {
      method: "POST",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(function(response) {
      return response.json()
    })
    
}
