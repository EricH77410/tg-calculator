import React from 'react'
import numeral from 'numeral';
import { Table } from 'react-materialize'

const Additional = (props) => {
    return (
        <div className="display additional">
            <img src="/img/agenda.png" alt="agenda" className="img-agenda"/>
            <div className="lighten-4 black-text">
            <Table className="highlight striped bordered">
                <thead>
                    <tr>
                        <td></td>
                        <td>Pack SMS</td>
                        <td>Prix avec contrat</td>
                        <td>Prix sans contrat</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.add.map((s)=>{
                            return <tr className="">
                                <td><img className="sms-ico" src="/img/icon_sms.png" alt="ico"/></td>                            
                                <td>{s.name}</td>
                                <td className="center">{numeral(s.priceWithContract).format('$0,0.00')}</td>
                                <td className="center">{numeral(s.price).format('$0,0.00')}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>                
            </div>
        </div>
    )
}

export default Additional;
