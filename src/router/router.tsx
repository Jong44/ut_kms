import { createBrowserRouter } from "react-router-dom";
import Home from "../app/Home";
import Result from "../app/Result";
import DosenDetail from "../app/detail/DosenDetail";
import DetailMataKuliahDosen from "../app/detail/DetailMataKuliahDosen";
import DetailJawaban from "../app/detail/DetailJawaban";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/result/:query",
        element: <Result />,
    },
    {
        path: "/detail",
        children: [
            {
                path: "dosen/:id",
                element: <DosenDetail />,
            },
            {
                path: "dosen/:id/mata-kuliah/:idMataKuliah",
                element: <DetailMataKuliahDosen />,
            },
            {
                path: "dosen/:id/mata-kuliah/:idMataKuliah/jawaban/:idJawaban",
                element: <DetailJawaban />,
            }
        ],
    },
    
]);