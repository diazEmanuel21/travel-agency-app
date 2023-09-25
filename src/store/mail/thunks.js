import { createAsyncThunk } from '@reduxjs/toolkit';

// Define un Thunk para enviar un correo
export const sendEmail = createAsyncThunk('email/sendEmail', async (emailData) => {
    // Configura las opciones de la solicitud
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Especifica el tipo de contenido como JSON
        },
        body: JSON.stringify(emailData), // Convierte los parámetros a formato JSON
    };

    try {
        // Realiza la solicitud a tu API para enviar el correo

        const response = await fetch('https://api-send-mail-l2zv.vercel.app/api/email/sendEmail', params);
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al enviar el correo'); // Lanza una excepción en caso de error
        }

        // Analiza la respuesta JSON si es necesario
        const data = await response.json();

        return data; // Devuelve la respuesta JSON

    } catch (error) {
        // Lanza una excepción para manejar errores de manera más precisa
        throw new Error(`Error en la solicitud: ${error.message}`);
    }
});
