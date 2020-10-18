import React from 'react';

const OrderView = (props) => {

    const renderTable = ({orderdata}) => {
        if(orderdata){
            return orderdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                         <td>{item.rest_id}</td>
                         <td>{item.name}</td>
                         <td>{item.phone}</td>
                         <td>{item.address}</td>
                         <td>{item.person}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders Details</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Rest Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>No. Person</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default OrderView;