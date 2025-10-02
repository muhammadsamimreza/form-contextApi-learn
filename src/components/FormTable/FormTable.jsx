import React from 'react';
import Container from '../Container/Container';

const FormTable = ({user}) => {
    return (
        <Container>
            <div className='w-[50%] mx-auto'>
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
        </Container>

    );
};

export default FormTable;