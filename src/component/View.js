import React from 'react'
import "./form.css";


export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(    
        <tr key={book.isbn}>
            <td>{book.information}</td>
            <td>{book.diagnosed}</td>
            <td>{book.expprb}</td>
            <td>{book.phy_trauma}</td>
            <td>{book.ment_trauma}</td>
            <td>{book.problem}</td>
            <td>{book.scale}</td>
            {/* <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/
            30/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png" alt="img"/>
            </td>            */}
        </tr>            
    
))
}