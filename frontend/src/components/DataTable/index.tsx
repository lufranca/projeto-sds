import axios from "axios";
<<<<<<< HEAD
import Pagination from "components/Pagination";
=======
>>>>>>> 5509495fc403a181c6d16f8a685975e654a3ffb1
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

<<<<<<< HEAD
    const [activePage, setActivePage] = useState(0);
=======
>>>>>>> 5509495fc403a181c6d16f8a685975e654a3ffb1
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
<<<<<<< HEAD
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data)
            })
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }


    return (
        <>
            <Pagination page={page} onPageChange={changePage}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
=======
        axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
        .then(response => {
            setPage(response.data)
        })
    })


    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item => (
                    <tr key={item.id}>
                        <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                        <td>{item.seller.name}</td>
                        <td>{item.visited}</td>
                        <td>{item.deals}</td>
                        <td>{item.amount.toFixed(2)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
>>>>>>> 5509495fc403a181c6d16f8a685975e654a3ffb1
    )
}

export default DataTable;