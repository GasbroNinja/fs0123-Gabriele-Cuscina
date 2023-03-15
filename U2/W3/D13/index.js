
// fetch("https://randomapi.com/api/", {
//     method: "GET"
// })

// il metodo GET è implicito e si può quindi omettere
// fetch("https://jsonplaceholder.typicode.com/pots")
//     .then(responseObj => {
//         console.log(responseObj)
//         if (responseObj.ok) {
//             return responseObj.json()
//         } else {
//             alert("qualcosa è andato storto con il reperimento dei dati")
//             throw new Error("qualcosa è andato storto con il reperimento dei dati")
//         }
//     })
//     .then(body => console.log("BODY", body))
//     .catch(error => console.log(error))


fetch("https://striveschool-api.herokuapp.com/books")


    .then(responseObj => responseObj.json())

    .then(libri => {



        console.log(libri)



        const grid = document.getElementById("mainCont")
        grid.innerHTML = ""
/*
        shop.forEach((shop) => {
            const shop = document.createElement("a")
            shop.className = "shop"
            shop.innerHTML = `
            <div class="container">
                <button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                </div>
            <div>    
            `
            grid.appendChild(shop);
        })
*/
        libri.forEach((libro) => {            
            const col = document.createElement("div")
            col.className = "col"
            col.innerHTML = `
 
            <div class="card fs-5 m-2 p-3 bg-warning g-2" style="height: 650px">
                <div class="card-body text-center">
                    <img src="${libro.img}" class="card-img-top img-fluid border border-primary border-5 ">
                    <h5 class="card-title pt-3 mt-2 mb-0 fs-5">${libro.title}</h5>
                    <div class="text-success">
                    <hr class="border border-danger border-2 opacity-50">
                    </div>
                    <span class="badge bg-success mt-2 fs-4 px-5 mb-2 border border-dark border-3 text-light">${libro.price} $</span>
                    <button id="removeBtn" class="scarta btn btn-danger mt-0 fs-5 text-center px-5 border border-dark border-3">Scarta</button>
                </div>
            </div>
                `
                grid.appendChild(col);
                
                
                const scarta = document.querySelectorAll('.scarta');
                scarta.forEach((remBtn) => {
                    remBtn.addEventListener("click", (e) => {
                        e.target.closest(".col").classList.add("d-none")
                    })
            })

        })

    })
    .catch(error => console.log("CATCH", error))
