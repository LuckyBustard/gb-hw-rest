import * as React from 'react'

export function TableItem({ headers, item })
{
    return (
        <tr>
            {headers.map((header) => (<td key={`${header}.${item[header]}`}>{item[header]}</td>))}
        </tr>
    )
}