
let notes;
    fetch('https://localhost:3002/')
    .then((response) =>
    {
    return  response.json();
    })
    .then((data) => {
        notes=data;
    })

