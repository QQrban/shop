

export const getPopular = async () => {
    const response = await fetch('https://api.npoint.io/72fb16c38956dd4d24eb');
    return response.json();
}