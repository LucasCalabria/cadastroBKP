import Api from './api';

const RestaurantService = { 
    getAllAdm: async () => {
        const { data } = await Api.get('/hello');
        return data;
    },

    getAdmById: async (id) => {
        const { data } = await Api.get(`/admin/${id}`, id);
        return data;
    },

    createNewRestaurant: async (id, restaurant) => {
        const { data } = await Api.put(`/admin/${id}`, restaurant);
        return data;
    },

    updateAdm: async (id, adm) => {
        const { data } = await Api.put(`/admin/${id}`, adm);
        return data;
    }
};

export default RestaurantService