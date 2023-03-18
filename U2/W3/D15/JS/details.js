const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"
const BASE_OPT = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2EwY2Y4MWI0MjAwMTM5YjI4MzQiLCJpYXQiOjE2NzkxNDIyNTIsImV4cCI6MTY4MDM1MTg1Mn0.eE7kuHqtTEj_9HE6b2xRlTrjGwyWFsmM99rQ-sXotx8"
        }
    }        
const URLParams = new URLSearchParams(window.location.search)

const selectedId = URLParams.get("_id")

window.onload = async () => {
    const container = document.getElementById("concert-details")
    try {
        const resp = await fetch(BASE_URL + selectedId,BASE_OPT)
        const productz = await resp.json()

    
        const { brand, description, imageUrl, name, price, _id } = productz;

        container.innerHTML = `
        <div class="container-fluid bg-primary rounded-3 d-flex flex-column justify-content-center mb-5">
            <h1 class="fw-bold text-center text-dark text-uppercase badge text-bg-warning rounded-5 mt-5 fs-4 py-1">${name}</h1>
            <ul class="list-group list-group-flush font-monospace text-dark badge text-bg-info rounded-3 fs-3 px-3 mt-5">
            <h6 class="text-dark badge text-bg-info rounded-3 fs-3 py-3 px-3">Idol:</h6>
            <img src="${imageUrl}" class="card-img p-0" alt="...">
            <h6 class="text-dark badge text-bg-info rounded-3 fs-3 py-3 px-3 mt-3">Brand:</h6>
            <li class="list-group-item ps-2">${brand}</li>
            </ul>
            <ul class="list-group list-group-flush font-monospace text-dark badge text-bg-info rounded-3 fs-3 px-3 mt-5">
            <h6 class="text-success badge text-bg-info rounded-3 fs-3 py-3 px-3">Price:</h6>
            <li class="list-group-item text-success ps-2">${price}€</li>
            </ul>
            <ul class="list-group list-group-flush font-monospace text-dark badge text-bg-info rounded-3 fs-3 px-3 mt-5">
            <h6 class="text-dark badge text-bg-info rounded-3 fs-3 py-3 px-3">Description:</h6>
            <li class="list-group-item ps-2">${description}</li>
            </ul>
            <ul class="list-group list-group-flush font-monospace text-dark badge text-bg-info rounded-3 fs-3 px-3 mt-5">
            <h6 class="text-dark badge text-bg-info rounded-3 fs-3 py-3 px-3">ID Event:</h6>
            <li class="list-group-item ps-2"><strong>id:</strong> ${_id}</li>
            </ul>
            <button class="btn btn-success text-dark badge text-bg-success rounded-5 w-auto fs-3 px-3 mt-5 mb-5" onclick="editFuncConcert()">Edit Concert</button>
        </div>    
            `
    }
    catch (err) {
        console.log(err)
    }
}

const editFuncConcert = () => {
    window.location.assign("./backoffice.html?_id=" + selectedId)
}
