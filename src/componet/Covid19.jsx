import React, { useEffect, useState } from 'react'

export default function Covid19() {

    const [data, setData] = useState([]);

    const getcoviddata = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const acdata = await res.json();
        setData(acdata.statewise);
        console.log(acdata.statewise);
    }

    useEffect(() => {
        getcoviddata();
    }, [])

    return (
        <>
        <div className="container">
            <h1 className='text-center'>Covid19 Dashboard</h1>
            <div className='table-responsive mt-4'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>state</th>
                            <th>active</th>
                            <th>confirmed</th>
                            <th>death</th>
                            <th>recover</th>
                            <th>update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((curelement, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{curelement.state}</td>
                                        <td>{curelement.active}</td>
                                        <td>{curelement.confirmed}</td>
                                        <td>{curelement.deaths}</td>
                                        <td>{curelement.recovered}</td>
                                        <td>{curelement.lastupdatedtime}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
