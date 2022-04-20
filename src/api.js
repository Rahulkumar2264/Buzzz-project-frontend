export const post = async (data) =>{
    let result =  await fetch("http://localhost:5000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      return result;
}

export const get = async (data) =>{
    let result =  await fetch("http://localhost:5000/api/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      });
     result = await result.json(); 
     return result;
}