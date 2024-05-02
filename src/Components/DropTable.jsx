import React from 'react';

const DropTable = ({ type, data }) => {
    
    return (
        type === 'dropdown' ? (            
            <select>
                {data.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        ) : type === 'table' ? (
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={`row-${index}`}>
                            {Object.values(row).map((value, idx) => (
                                <td key={`cell-${idx}`}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : null
    );
};

export default DropTable;

