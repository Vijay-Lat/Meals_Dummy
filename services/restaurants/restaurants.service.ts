import { mocks } from "./mock"
import camilize from "camelize";
export const restaurantRequest = () => {
    console.log(mocks["51.219448,4.402464"], "log");
    const mock = mocks["51.219448,4.402464"];
    return new Promise((resolve: any, reject: any) => {
        if (!mocks) {
            reject("Not Found");
        }
        resolve(mock);
    })
}

const transformRestaurantRequest = (result: any) => {
    const { results } = result;
    return camilize(results)
}

restaurantRequest().then(transformRestaurantRequest).then((response) => console.log(response)).catch((err) => console.error(err))
