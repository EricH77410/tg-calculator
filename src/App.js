import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';

const contracts = [
  {
    name:'Gestion + Imagerie Réseau',
    price: 769
  },
  {
    name:'Gestion + Imagerie Mono',
    price: 679
  },
  {
    name:'Gestion Réseau',
    price: 635
  },
  {
    name:'Gestion Mono',
    price: 529
  },
  {
    name:'Praticien supp',
    price: 139
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      contracts:contracts,
      nbPrat:1,
      selectedContract: null,
      nbCnx: 1,
      cnxPrice: 1,
      softPrice: 1999
    }  
  }

  handleSelectedContrat = (contrat) => {
    if (contrat === 'Aucun'){
      this.setState({selectedContract:null})
    } else {
      this.setState({selectedContract: this.state.contracts.filter((c)=>c.name === contrat)})
    }    
  }

  handleNbPrat = (val) => {
    if (parseInt(val,10) > 1){
      this.setState({nbPrat: parseInt(val,10)})
    }    
  }

  changeCnx = (val) => {
    if (parseInt(val,10) > 1){
      this.setState({nbCnx: parseInt(val,10)})
    }
  }

  getTotal = () => {
    let total = this.state.softPrice
    if(this.state.nbPrat === 1){
      total += (this.state.nbCnx-1)
    } else {
      total += this.state.nbCnx-1 + (this.state.nbPrat * 139)
    }
    if (this.state.selectedContract){
      total += this.state.selectedContract[0].price
    }
    return total;
  }

  getPratSuppPrice = () => {
    if (this.state.nbPrat === 1) {
      return 0
    } else {
      return ((this.state.nbPrat-1) * 139)
    }    
  } 
  
  render() {
    return (
      <div className="App container">
        <Header changeContract={this.handleSelectedContrat} changeNb={this.handleNbPrat} changeCnx={this.changeCnx}/>
        <Display 
          cnx={this.state.nbCnx} 
          prat={this.state.nbPrat} 
          contract={this.state.selectedContract}
          total={this.getTotal()} 
          pratPrice={this.getPratSuppPrice()}
        />
      </div>
    );
  }
}

export default App;
