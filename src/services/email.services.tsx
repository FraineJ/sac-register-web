import axios from 'axios';
import apiClient from './apiClient';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

class EmailService {

    async create(data: any) {
        try {
            const response = await apiClient.post(`${apiBaseUrl}/email/sendEmail`, data);

            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

   
    private handleError(error: unknown) {
        if (axios.isAxiosError(error)) {
            // Puedes personalizar el manejo de errores de Axios aquí
            console.error('Error en la solicitud:', error.response?.data || error.message);
            throw error.response?.data || error.message;
        }
        console.error('Error desconocido:', error);
        throw error;
    }
}

// Exporta una instancia única del servicio (patrón Singleton)
export const emailService = new EmailService();