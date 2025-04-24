import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000';

export const getTracks = () => axios.get(`${API_BASE}/tracks`);
export const getTrackBySlug = (slug: string) => axios.get(`${API_BASE}/tracks/${slug}`);
export const createTrack = (data: any) => axios.post(`${API_BASE}/tracks`, data);
export const updateTrack = (id: string, data: any) => axios.put(`${API_BASE}/tracks/${id}`, data);
export const deleteTrack = (id: string) => axios.delete(`${API_BASE}/tracks/${id}`);
export const uploadFile = (id: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post(`${API_BASE}/tracks/${id}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const deleteAudioFile = (id: string) => axios.delete(`${API_BASE}/tracks/${id}/file`);
