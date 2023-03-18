const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"
const BASE_OPT = {
        headers: {
            "Content-Type": 'application/json; charset=utf-8',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2EwY2Y4MWI0MjAwMTM5YjI4MzQiLCJpYXQiOjE2NzkxNDIyNTIsImV4cCI6MTY4MDM1MTg1Mn0.eE7kuHqtTEj_9HE6b2xRlTrjGwyWFsmM99rQ-sXotx8"
        }
    }        
const urlParams = new URLSearchParams(window.location.search)
const selectedId = urlParams.get("_id")
const endpoint = selectedId ? BASE_URL + selectedId : BASE_URL
const method = selectedId ? "PUT" : "POST"


const handleValidate = () => {
const form = document.querySelector("form")
form.classList.add("validated")
}

window.onload = async () => {

    if (selectedId) {
        try {
            const dataGet = await fetch(endpoint, BASE_OPT)
            const productz = await dataGet.json()
            const { brand, description, imageUrl, name, price, _id } = productz;
            document.getElementById("name").value = name
            document.getElementById("description").value = description
            document.getElementById("price").value = price
            document.getElementById("brand").value = brand
            document.getElementById("imageUrl").value = imageUrl

        } catch (error) {
            
        }

        

        document.getElementById("subtitle").innerText = " — Edit your Event Concert"
        document.getElementById("delete-btn").classList.remove("d-none")

        



            const sbmtBtn = document.querySelector("button[type='submit']")
                sbmtBtn.classList.remove("btn-primary")
                sbmtBtn.classList.add("btn-success")
                sbmtBtn.innerText = "Modifica"
                


    }
}


const startSubmit = async (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
        console.log('valid');
    }
    const newConcert = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value
    }

    
   const payload = JSON.stringify(newConcert)


    try {
        const opt = Object.assign({}, BASE_OPT);
        opt.method = method
        opt.body = payload

        console.log(opt);
        const data = await fetch(endpoint, opt )
        const resp = await data.json()



        console.log("RESP", resp)

        
            if (method === 'PUT') {
                alert("Source with id " + resp._id + ", edited with success")
            } else {
                alert("Source with id " + resp._id + ", created with success")
            } 

    } catch (error) {
        alert(error)
    }
}







const deleteBtn = async () => {

    const hasAccepted = confirm("Sei convinto di voler elimilare l'appuntamento?")

    if (hasAccepted) {



        try {
            console.log("DELETE")
            const opt = Object.assign({}, BASE_OPT);
            opt.method = "DELETE"

            const deletedResp = await fetch(endpoint, opt);
            const deletedData = await deletedResp.json()

            if (deletedResp.ok){
                 alert("Hai eliminato l'appuntamento " + deletedData.name)
                 window.location.assign("./index.html")
            }
        } catch (error) {
            console.log(error)
        }
    }
}
