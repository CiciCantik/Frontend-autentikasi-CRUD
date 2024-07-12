import axios from "axios";
import UpdateMahasiswa from "../componen/admin/UpdateMahasiswa";
import { data } from "autoprefixer";

// const api = axios.create({
//     baseURL: "http://127.0.0.1:4000"
// });

const api = axios.create({
    baseURL: "http://localhost:4000", // Ganti dengan URL endpoint API Anda
});

const apis = {
    getAllMahasiswa: ()  => api.get('/mahasiswa', { withCredentials: true }),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`, { withCredentials: true }),
    createMahasiswa: (data) => api.post('/mahasiswa', data, { withCredentials: true }),
    UpdateMahasiswa: (nim, data) => api.put (`/mahasiswa/${nim}`, data, { withCredentials: true }),
    DeleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`, { withCredentials: true })
}
 
export default apis;