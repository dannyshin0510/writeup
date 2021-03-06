import React, {Component} from 'react'
import Top from "./hero/Nav"
import Student from "./features/Student"
import Business from "./features/BusinessMan"
import Field from "./features/Field"
import Footer from './footers/MiniCenteredFooter'
import Form from "./forms/SurveyForm"
import tw from "twin.macro";
const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;

class MatcherDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug:null
        }
    }
    componentDidMount(){
        if (this.props.match){
            const {slug} = this.props.match.params
            this.setState({
                slug:slug
            })
        }
    }



    render(){
        const {slug} = this.state
        return(
        <div>
            <StyledDiv>
                < Top />
            </StyledDiv>
            <Form />
            <Footer />
        </div>
        )
    }
}


export default MatcherDetails