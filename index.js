let disp = document.getElementById("display")

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>{
        console.log(data);
        for(let i=0; i<)
        for(let i=0;i<data.length;i++){
            let id = document.createElement("p");
            let name = document.createElement("p");
            let uname = document.createElement("p"); 
            id.innerHTML = `<b>ID</b> : ${data[i].id}`;
            name.innerHTML = `<b>Name</b> : ${data[i].name}`
            uname.innerHTML = `<b>Password</b> : ${data[i].email}`

            disp.appendChild(id);
            disp.appendChild(name);
            disp.appendChild(uname);
        }
        
}
)