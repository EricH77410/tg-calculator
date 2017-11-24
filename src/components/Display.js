import React, { Component } from 'react'
import { Table } from 'react-materialize';
import numeral from 'numeral';
import Fraction from './Fraction';

// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('fr');

export default class Display extends Component {

  render() {
    const msg = 'Pour bénéficier des connexions pour 1€ de plus, il faut sélectionner un contrat de maintenance'
      let contrat, price, praticiens
      if (this.props.contract){
          contrat = this.props.contract[0].name
          price = this.props.contract[0].price
      }
      if (this.props.prat === 1){
          praticiens = '1 praticien'
      } else {
          praticiens = this.props.prat+' praticiens'
      }
      const afficheMsg = !this.props.contract && this.props.cnx >1 ? <p className="msg-warning">{msg}</p>:''
      const displayCnxPrice = this.props.cnx > 1 ? '('+numeral(this.props.realCnxPrice).format('$0,0.00')+
      ')':''
      const economy = () => {
        if (this.props.cnx === 1) {
          return 'Soit une économie de '+numeral(2136.12-1999).format('$0,0.00')
        } else {
          return 'Soit une économie de '+numeral((this.props.realCnxPrice + 2136.12) - this.props.total).format('$0,0.00')
        }

      }
    return (
        <div>
            { afficheMsg }
        <div className="display">
	        <img src="./img/cstg-visuel.jpg" alt="img-carestream"/>
            <div className="lighten-4 black-text">
                <Table className="highlight striped bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Libellé</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                   <tbody>
                        <tr>
                            <th><i className="small material-icons">devices</i>Logiciel</th>
                            <th className="striked">{numeral(2136.12).format('$0,0.00')}</th>
                            <th>{numeral(1999).format('$0,0.00')}</th>
                        </tr>
                        <tr>
                            <th><i className="small material-icons">settings_phone</i>Contrat</th>
                            <th>{contrat}</th>
                            <th>{numeral(price).format('$0,0.00')}</th>
                        </tr>
                        <tr>
                            <th><i className="small material-icons">supervisor_account</i>Praticiens</th>
                            <th>{praticiens}</th>
                            <th>{numeral(this.props.pratPrice).format('$0,0.00')}</th>
                        </tr>
                        <tr>
                            <th><i className="small material-icons">settings_cell</i>Connexions</th>
                            <th>{this.props.cnx} <span className="striked real-price">{displayCnxPrice}</span></th>
                            <th>{numeral(this.props.cnx-1).format('$0,0.00')}</th>
                        </tr>
                        <tr>
                            <th><i className="small material-icons">euro_symbol</i>Total</th>
                            <th>
                              <span className="striked">{numeral(this.props.realCnxPrice + 2136.12).format('$0,0.00')}</span>
                              <span className="economy">{economy()}</span>
                            </th>
                            <th>{numeral(this.props.total).format('$0,0.00')}</th>
                        </tr>
                    </tbody>
                </Table>
			</div>
        </div>
            <div className="monthly">
                {this.props.contract ? <Fraction pratSupp={this.props.pratPrice} price={price} nbPrat={this.props.prat}/>:''}

            </div>
        </div>

    )
  }
}
