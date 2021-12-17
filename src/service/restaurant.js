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

    updateRestaurant: async (id, employee) => {
        const { data } = await Api.put(`/nutemployee/${id}`, employee);
        return data;
    },

    deleteRestaurant: async (id) => {
        const { data } = await Api.delete(`/nutemployee/${id}`);
        return data;
    }
};

export default RestaurantService