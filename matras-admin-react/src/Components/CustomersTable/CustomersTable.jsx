import react from "react";
import Toggle from "../Toggle/Toggle";
import Delete from "../../Assets/Images/delete.png"
// import TrComponent from "../TrComponent/TrComponent";
import "./CustomersTable.css";
const CustomersTable = ({items}) =>{
    // console.log(items,"aloooo")

return (
<section className="tables">
    <div className="tbl-header">
        <table>
            <thead>
                <tr>
                    <th className="th th-id">ID</th>
                    <th className="th th-left">Sana</th>
                    <th className="th  th-left">Telefon Raqami</th>
                    <th className="th th-left ">Qayta Aloqa</th>
                    <th className="th th-left"></th>
                </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table>
            <tbody>
                {/* <TrComponent /> */}

                {items.map((menuItem) =>{
const {id,title,number,name,quantity} = menuItem;
       return(
       <>
                
        <tr className="tr" key={id} >
        <td className="td td-id">{id}</td>
        <td className="td">12:13-12.05.21</td>
        <td className="td">{number}</td>
        <td className="td th-toggle"><Toggle key={id} /></td>
        
        <td className="td td-right">
        <button className="delete-btn">
            <img src={Delete} alt="" />
        </button>
        </td>
    </tr>
         </>
         )
        })}
        
            </tbody>
        </table>

    </div>


</section>

)
}

export default CustomersTable;