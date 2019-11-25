import React, { Component } from 'react';
import ContactItems from './ContactItems';
import contactInformation from '../data/contactData';
import uuid from 'react-uuid';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { contactInformation : contactInformation.slice(0,5) }
    }

    handlePopular=()=> {
        console.log('rate')
        const popularContacts = this.state.contactInformation.sort((x,y)=> y.popularity - x.popularity)
        this.setState({contactInformation : popularContacts})
    }
    generateRandom=()=>{
        
        let random=Math.floor(Math.random()*contactInformation.length)
        console.log(random)
        let newContact=contactInformation[random]
        console.log(newContact)
        this.state.contactInformation.unshift(newContact)
        this.setState({contactInformation:this.state.contactInformation})
    }
    handleAtoZ=()=> {
        console.log('AtoZ')
        const AtoZName=this.state.contactInformation.sort((x,y)=> {
            if(x.name<y.name)
                return -1;
            if(x.name>y.name)
                return 1;
            return 0
        })
        this.setState({contactInformation : AtoZName})
    }
    deleteItem = (id) => {
        console.log('delete',id)
         const filtredContact=this.state.contactInformation.filter(contact=>{
            return contact.popularity != id
        })
        this.setState({contactInformation:filtredContact})
        
    }
    render() {

        
        return ( 
            <main>
                <div className='buttonDiv'>
                    <button onClick={this.generateRandom}>Add Contact</button>
                    <button onClick={this.handleAtoZ}>Sort Name</button>
                    <button onClick={this.handlePopular}>Sort Popular</button>
                </div>
                <section>
                    {this.state.contactInformation.map(contact => <ContactItems deleteItem={this.deleteItem} key={uuid()} id={contact.popularity} contactInformation ={contact}/>)}
                </section>
            </main>
         );
    }
}
 
export default ContactList;