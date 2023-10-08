
export default function getProductosId(array, paramId) {
    return array.find(obj => obj.id === parseInt(paramId));
}