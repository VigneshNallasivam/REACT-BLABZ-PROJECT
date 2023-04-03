import React from "react";
import logos from '../../src/bz.jpg';

 class About extends React.Component
 {
    url = 'https://www.bridgelabz.com/';
    constructor()
    {
        super()
        this.state = {
            userName:'',
            nameError:''
        }
    }
    onClick = (event) =>{
        console.log("Save Button Clicked",event);
        window.open(this.url,"_blank");
    }
    onNameChange = (event) =>{
        console.log("Value Is : ",event.target.value);
        const nameRegex = RegExp('[A-Z]{1}{a-z}{2,}[A-Z]{1}{a-z}{2,}');
        this.setState({userName:event.target.value})
        if(nameRegex.test(event.target.value))
        {
            this.setState({nameError:''})
        }
        else
        {
            this.setState({nameError:'Name Is In-Correct..!'})
        }
    }

    render()
    {
        return(
            <div>
                <div>
                    <h1>Hello {this.state.userName} from Bridgelabz</h1>
                    <img src={logos} onClick={this.onClick} alt="Bridgelabz Logo : Employment through lab works"></img>
                </div>
                <div>
                    <input onChange={this.onNameChange}></input>
                </div>
            </div>
        );
    }
}

 export default About;