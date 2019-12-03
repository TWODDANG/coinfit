import React, {Component} from 'react';
let QRcode = require('qrcode.react');


export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        //user 정보 가져와서 독특한 url 가져오고..

        this.state = {exercises : []};
    }


    render(){
        return (
            <QRcode value='http://google.com'/>
        )
    }
}