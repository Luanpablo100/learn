axios.get('https://api.github.com/users/Luanpablo100')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })