const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"
const BASE_OPT = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2EwY2Y4MWI0MjAwMTM5YjI4MzQiLCJpYXQiOjE2NzkxNDIyNTIsImV4cCI6MTY4MDM1MTg1Mn0.eE7kuHqtTEj_9HE6b2xRlTrjGwyWFsmM99rQ-sXotx8"
        }
    }

const fetchMain = async () => {
    
    
    
try{

const resp = await fetch("https://striveschool-api.herokuapp.com/api/product/", BASE_OPT)

if (resp.status === 400) throw new Error("Request Error, wrong execution (400)")
if (resp.status === 401) throw new Error("You are unauthorized to access the requested resource. Please log in (401)")
if (resp.status === 403) throw new Error("Your account is not authorized to access the requested resource (403)")
if (resp.status === 404) throw new Error("We could not find the resource you requested. Please refer to the documentation for the list of resources (404)")
if (resp.status === 500) throw new Error("Unexpected internal server error (500)")
if (resp.status === 501) throw new Error("The requested resource is recognized but not implemented (501)")
if (resp.status === 502) throw new Error("Invalid response received when acting as a proxy or gateway. (502)")
if (resp.status === 503) throw new Error("The server is currently unavailable (503)")
if (resp.status === 504) throw new Error("Did not receive a timely response from upstream server while acting as a gateway or proxy (504)")

if (!resp.ok) throw new Error("Fetch Error")

const productz = await resp.json()

const row = document.getElementById("rowMain")
row.innerHTML = ""

for (const card of productz){
const { brand, description, imageUrl, name, price, _id } = card;
const col = document.createElement("div");
col.className = "col-12 mt-5";
col.innerHTML = `
<div class="col-12 mt-5">
    <h2 class="display-4 mb-3 fw-bold text-uppercase badge text-bg-primary rounded-5 px-4 mb-4 fs-2 d-flex justify-content-center">New Concert</h2>
    <div class="card text-bg-dark p-0 border border-info border-3 mb-4">
    <img src="${imageUrl}" class="card-img p-0" alt="...">
            <div class="card-img-overlay d-flex flex-column mb-3 align-items-center justify-content-center">
                <h5 class="card-title fw-bold text-uppercase badge text-bg-primary rounded-5 px-4 fs-2 mt-2">${name}</h5>
                <p class="card-text badge text-bg-secondary rounded-3 px-4 fs-4">${description}</p>
                <p class="card-text fw-bold text-uppercase mb-4 badge text-bg-info rounded-3">${brand}</p>
                <p class="card-text badge text-bg-warning rounded-3 px-5 fs-3">${price} $</p>
                <a class="card-text badge text-bg-info rounded-3 px-5 fs-3 text-success text-decoration-none" href="./details.html?_id=${_id}">Info Concert</a>
            </div>
        </div>    
    </div>
</div>
`

row.appendChild(col)
}

} catch (error) {
    alert("We discovered an error during the operation: " + error.message)

} 
}

window.onload = async () => {
fetchMain()
}


