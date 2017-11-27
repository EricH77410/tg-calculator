import React from 'react';
import { Row, Input, Navbar } from 'react-materialize';

class Header extends React.Component {

    changeContrat = (e) => {
        this.props.changeContract(e.target.value)
    }
    changeNbPrat = (e) => {
      console.log('change prat')
        if (e.target.value >= 1){
            this.props.changeNb(e.target.value)
        }
    }
    changeCnx = (e) => {
        if (e.target.value >= 1){
            this.props.changeCnx(e.target.value)
        }
    }
    render(){
        return (
            <div>
                <Navbar className="nav-barcs" brand='CS Trophy Gestion ADF 2017' ></Navbar>
            <Row>
                <Input
                    placeholder="Combien de praticiens"
                    s={3} label="Nombre de praticiens"
                    type="number"
                    icon='supervisor_account'
                    onChange={this.changeNbPrat}
                    defaultValue='1'
                />
                <Input
                    placeholder="Combien de connexions"
                    s={3} label="Nombre de connexions"
                    type="number"
                    icon='settings_cell'
                    onChange={this.changeCnx}
                    defaultValue='1'
                />
                <Input onChange={this.changeContrat} s={6} type='select' label='Contrat de maintenance' icon='settings_phone' defaultValue='Aucun'>
                    <option value="Aucun">Sans contrat</option>
                    <option value='Gestion + Imagerie Réseau'>Gestion + Imagerie Réseau</option>
                    <option value='Gestion + Imagerie Mono'>Gestion + Imagerie Mono</option>
                    <option value='Gestion Réseau'>Gestion Réseau</option>
                    <option value='Gestion Mono'>Gestion Mono</option>
                </Input>
            </Row>
            </div>
        )
    }
}

export default Header
