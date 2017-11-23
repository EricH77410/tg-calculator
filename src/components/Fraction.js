import React from 'react'
import numeral from 'numeral'

const Fraction = (props) =>{
    const getMonthAmount = () => {
        return (props.price + props.pratSupp) / 12
    }
    const prixParPrat = () => {        
        if(parseInt(props.nbPrat,10) > 1){
            const price = ((props.price + props.pratSupp) / 12) / parseInt(props.nbPrat,10)
            return (<p>soit : {numeral(price).format('$0,0.00')} par praticien</p>)
        }
    }
    const total = () => {
        return props.price + props.pratSupp
    }
    return (
        <div className="fraction">
            <p>Coût total du contrat de maintenance : {numeral(total()).format('$0,0.00')}</p>
            <p>Coût mensuel du contrat de maintenance : {numeral(getMonthAmount()).format('$0,0.00')}</p>
            {prixParPrat()}
        </div>
    )
}

export default Fraction