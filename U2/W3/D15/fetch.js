const AUTH_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2EwY2Y4MWI0MjAwMTM5YjI4MzQiLCJpYXQiOjE2NzkwNDcxODAsImV4cCI6MTY4MDI1Njc4MH0.DEYGId0ZJ4-Z028r1Wi_VSuARGI-hnmlMy3hPD3-CrM"
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"

const fetchSuperMegaFiga = async (url, method, respBody) => {
    const fetchOpt = {
        method,
        headers: {
            Authorization: AUTH_KEY,
        }
    //    body
        }
    if (method === "POST" || method === "PUT") {
        params.headers["Content-Type"] = "application/json";
        params.body = JSON.stringify(respBody);
      }


try{
    const resp = await fetch(url, fetchOpt)
    
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
    console.log(productz);
    return productz

} catch (err) {
    console.log(err);

} 
}