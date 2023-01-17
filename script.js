
// 1.1
const listApi = async () => {
    const respuesta = await fetch ('https://api.agify.io?name=michael');
    const res = await res.json();
    console.log(res);
}
listApi();

// 2.1

// 2.3

// 2.4