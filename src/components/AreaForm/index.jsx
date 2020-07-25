import React, {Component} from 'react';
import Api from '../../api.js';

class AreaForm extends Component{

    state = {
        contas: [], 
    }

    async componentDidMount(){
        const response = await Api.get('/conta');
        this.setState({contas: response.data});
    }
    render(){
        const {contas} = this.state; 
        return(
            <div>
                <h1>Saldo</h1>
                <ul style={{listStyleType: "none"}}>
                    {contas.map(conta => (
                    <li key={conta.id}>
                        <h4>Saldo: {conta.saldo}</h4>
                    </li>))}
                </ul>
            </div>
        );
    };
  };
  
export default AreaForm;

  