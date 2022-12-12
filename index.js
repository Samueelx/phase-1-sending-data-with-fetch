// Add your code here
const submitData = (name, email) => {
    const dataObject = {
        name: name,
        email: email       
    };

    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataObject)
    }).then(res => res.json()).then( (data) => {
        const p = document.createElement('p');
        p.textContent = data.id;
        document.body.appendChild(p);
    }).catch((error) => {
        const p = document.createElement('p');
        p.textContent = error.message;
        document.body.appendChild(p);
    });
}