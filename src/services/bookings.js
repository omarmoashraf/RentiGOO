// src/services/bookings.js - COMPLETE VERSION
import axios from 'axios';
import { API_URL } from '../api';

export const createBooking = async (bookingData, token) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create booking');
  }
};

export const processPayment = async (bookingId, paymentData, token) => {
  try {
    const response = await axios.post(`${API_URL}/bookings/${bookingId}/payment`, paymentData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Payment failed');
  }
};

export const getBookingById = async (bookingId, token) => {
  try {
    const response = await axios.get(`${API_URL}/bookings/${bookingId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch booking');
  }
};

export const deleteBooking = async (bookingId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/bookings/${bookingId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete booking');
  }
};

// ADD THESE TWO MISSING FUNCTIONS:
export const fetchBookings = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/bookings`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch bookings');
  }
};

export const updateBooking = async (bookingId, updateData, token) => {
  try {
    const response = await axios.put(`${API_URL}/bookings/${bookingId}`, updateData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update booking');
  }
};