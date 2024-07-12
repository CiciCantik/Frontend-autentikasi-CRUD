// Home.jsx
import React from 'react';
import Layout from "../componen/Layout";
import Navbar from "../componen/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home1() {
    const navigate = useNavigate();
    return ( 
        <>
            <Layout>
                <Navbar />
                <div>
                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/GetMhs')}>
                            GetMahasiswa
                    </button>
                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/insert')}>
                            Tambah Mahasiswa
                    </button>
                </div>
            </Layout>
        </>
     );
}

export default Home1;
