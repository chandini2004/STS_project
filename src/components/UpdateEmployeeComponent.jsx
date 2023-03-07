import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            color: '',
            price: '',
            img:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                name: employee.name,
                color: employee.color,
                price : employee.price,
                img : employee.img
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, color: this.state.color, price: this.state.price, img: this.state.img};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeColorHandler= (event) => {
        this.setState({color: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
    changeImgHandler= (event) => {
        this.setState({img: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Color: </label>
                                            <input placeholder="Color" name="Color" className="form-control" 
                                                value={this.state.color} onChange={this.changeColorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="Price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="Img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
