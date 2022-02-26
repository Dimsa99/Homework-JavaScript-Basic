document.getElementById("btn").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(user => {
            console.log(user);
            console.log(Object.keys(user));
            console.log(Object.values(user));
            // Table
            // ID       Username    Name
            // 1        Bret        Leanne Graham
            const keys = Object.keys(user); // [id,name,username] <td>id</td>
            let row = ``;
            let row2 = ``;
            for (let key of keys) {
                console.log(row);
                console.log(user[key]);
                row2 += `<td>${user[key]}</td>`;
                row += `<td>${key}</td>`;
            }


            console.log(row);
            $("#table").append(`<tr>${row}</tr>`);
            $("#table").append(`<tr>${row2}</tr>`);

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




