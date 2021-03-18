import React from 'react';

export class List extends React.Component{
    render(){
        console.log(this.props.contactList);
        return(
            <div id="list">
                {
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.contactList.map((contact,i)=>{
                            return(
                                <tr key={i}>
                                <td>{contact.id}</td>
                                <td>{contact.fullName}</td>
                                <td>{contact.email}</td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table> 
                }
            </div>
        )
    }
}