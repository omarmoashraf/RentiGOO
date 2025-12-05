import { API_URL as DEFAULT_API_URL } from "../api";

const rawBase =
  (import.meta.env?.VITE_API_URL || DEFAULT_API_URL || "").replace(/\/+$/, "");
const BASE_URL = `${rawBase}/api/v1/bookings`;

async function request(path = "", { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (err) {
    data = text || null;
  }

  if (!res.ok) {
    const message =
      (data && data.message) ||
      `Request failed with status ${res.status}${
        text ? `: ${String(text).slice(0, 200)}` : ""
      }`;
    throw new Error(message);
  }

  return data;
}

export const fetchBookings = (token) => request("", { token });

export const fetchBookingById = (id, token) =>
  request(`/${id}`, { token });

export const createBooking = (payload, token) =>
  request("", { method: "POST", body: payload, token });

export const updateBooking = (id, payload, token) =>
  request(`/${id}`, { method: "PUT", body: payload, token });

export const deleteBooking = (id, token) =>
  request(`/${id}`, { method: "DELETE", token });
