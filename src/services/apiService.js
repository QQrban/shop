
export const getAllProducts = async () => {
    try {
        const response = await fetch('https://api.npoint.io/72fb16c38956dd4d24eb');
        return response.json();
    } catch (err) {
        console.log(err);
    }
}