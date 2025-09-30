import React from 'react';

const FormTable = ({user}) => {
    return (
        <div >
            <table className="border-separate" style={{ borderSpacing: '0 10px' }}>
                <thead >
                    <tr >
                        <th style={{ padding: '10px', background: '#d1e3ff', borderRadius: '6px' }} >Email</th>
                        <th style={{ padding: '10px', background: '#d1e3ff', borderRadius: '6px' }}>Password</th>
                    </tr>
                </thead>
                <tbody className='p-2'>
                        {
                            user.map((data, index)=> <tr key={index} >
                            <td className="p-3 border-2 border-red-500 bg-white rounded-md" >{data.email}</td>
                            <td className="p-3 border-2 border-red-500 bg-white rounded-md">{data.password}</td>
                        </tr>)
                        }
                </tbody>
            </table>
        </div>
    );
};

export default FormTable;