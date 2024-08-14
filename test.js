const location ={
    name:"Last Test Location",
    description: "This is a AN UPDATED test location2",
}

fetch('http://localhost:5600/location/06ad041a-2a85-4e6b-bbd7-9bcb18af94b8', {
    method: 'DELETE',
}).then(response => response.json()).then(data => {
    console.log('Success:', data);
}

).catch((error) => {
    console.error('Error:', error);
});