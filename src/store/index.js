import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './slices/phone';

export default configureStore({
    reducer: {
        phone: phoneReducer,
    }
})
