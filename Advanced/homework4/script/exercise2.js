let x = 0;
let next = '';
let prev = '';
document.getElementById("btn").addEventListener("click", function () {
    fetch("https://swapi.dev/api/planets/?page=1")
        .then(response => response.json())
        .then(planets => {
            console.log(planets);
            console.log(Object.keys(planets));
            console.log(Object.values(planets));
            // Table
            // ID       Username    Name
            // 1        Bret        Leanne Graham
            next = planets.next;
            prev = planets.previous;
            const keys = Object.keys(planets.results); // [id,name,username] <td>id</td>
            let row = ``;
            let row2 = ``;
            let i = 0;
            for (let key of keys) {
                
                if(i == 10){
                    break;
                }
                i++;
                console.log(row);
                console.log(planets[key]);
                row2 += `<td>${planets.results[key].name}</td>`;
                row += `<td>${key}</td>`;
            }
            

            console.log(row);
            $("#myTable").append(`<tr>${row}</tr>`);
            $("#myTable").append(`<tr>${row2}</tr>`);

            /*
                <table>
                <tr>
                    <td>ID</td>
                    <td>Username</td>
                    <td>Name</td>
                </tr>
                 </table>

            */
        })
})
document.getElementById("next").addEventListener("click", function () {
    fetch(next)
        .then(response => response.json())
        .then(planets => {
            console.log(planets);
            console.log(Object.keys(planets));
            console.log(Object.values(planets));
            // Table
            // ID       Username    Name
            // 1        Bret        Leanne Graham
            next = planets.next;
            prev = planets.previous;
            console.log(planets.results);
            const keys = Object.keys(planets.results); // [id,name,username] <td>id</td>
            let row = ``;
            let row2 = ``;
            let i = 0;
            for (let key of keys) {
                
                if(i == 10){
                    break;
                }
                i++;
                console.log(row);
                console.log(planets[key]);
                row2 += `<td>${planets.results[key].name}</td>`;
                row += `<td>${key}</td>`;
            }
            

            console.log(row);
            $("#myTable").append(`<tr>${row}</tr>`);
            $("#myTable").append(`<tr>${row2}</tr>`);

            /*
                <table>
                <tr>
                    <td>ID</td>
                    <td>Username</td>
                    <td>Name</td>
                </tr>
                 </table>

            */
        })
})
document.getElementById("prev").addEventListener("click", function () {
    fetch(prev)
        .then(response => response.json())
        .then(planets => {
            console.log(planets);
            console.log(Object.keys(planets));
            console.log(Object.values(planets));
            // Table
            // ID       Username    Name
            // 1        Bret        Leanne Graham
            next = planets.next;
            prev = planets.previous;
            const keys = Object.keys(planets.results); // [id,name,username] <td>id</td>
            let row = ``;
            let row2 = ``;
            let i = 0;
            for (let key of keys) {
                
                if(i == 10){
                    break;
                }
                i++;
                console.log(row);
                console.log(planets[key]);
                row2 += `<td>${planets.results[key].name}</td>`;
                row += `<td>${key}</td>`;
            }


            console.log(row);
            $("#myTable").append(`<tr>${row}</tr>`);
            $("#myTable").append(`<tr>${row2}</tr>`);

            /*
                <table>
                <tr>
                    <td>ID</td>
                    <td>Username</td>
                    <td>Name</td>
                </tr>
                 </table>

            */
        })
})
