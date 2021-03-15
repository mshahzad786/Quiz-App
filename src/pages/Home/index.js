import React from "react";
import { connect } from 'react-redux';
import {set_data, facebook_login,save_data} from '../../store/action'



class Home extends React.Component{

    save_name = ()=>{
        console.log("ab chala")
    }



    render(){
        console.log("Home Props===>",this.props)
    
        return(
            <div>
                <h1>Home</h1>

                <input placeholder="Email" type="text"/>
                <br/>
                <input placeholder="Password" type="password"/>
                <br/>

                <button onClick={()=> this.props.set_data(this.props.save_data())} >SET DATA</button>
                <button onClick={()=> this.props.facebook_login()} >Facebook Login</button>
            </div>
        )
    }
}   

const mapStateToProps = (state)=>({
    users: state.users
    
})

const mapDispatchToProps = (dispatch)=>({
    set_data: (save_data)=> dispatch(set_data(save_data)),
    facebook_login: ()=> dispatch(facebook_login()),
    save_data: ()=> dispatch(save_data()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);