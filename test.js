const location ={
    name:"Last Test Location",
    description: "This is a LAST test location FINAL UPDATE",
};

fetch('http://localhost:5600/ws/rest/v1/location/c69fd460-c175-4ba4-89b9-e831f702bace', {
    method: 'DELETE'
}).then((res)=>{
    if(res.ok){
        res.json().then((data)=>{
            console.log(data);
        })
    } else {
        res.text().then((text)=>{
            console.log(text);
        });
    }
}).catch((error) => {
    console.error('Error:', error);
});