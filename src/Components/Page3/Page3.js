import {Link} from "react-router-dom"
import React from 'react'
import Header from'../Header/Header.js'
import Upper from '../Upper/Upper.js'
import './Page3.css'

const Page3 = () => {
    return (
        <div>
        <Header/>
        <Upper/>
            <div className="step"> Step 3: Answer this</div>
                <table cellspacing="10px"> 
                    <tr>
                    <td id= "num">1</td>
                    <td className="VCircle"></td>
                    <td id= "item-content">
                            <tr id="item">Item 1</tr>
                            <tr id="select">Select one option</tr>
                            <tr>
                                <tc>Option 1</tc>
                                <tc>Option 2</tc>
                                <tc>Option 3</tc>
                                <tc>Option 4</tc>
                                <tc>Option 5</tc>
                                <tc>Option 6</tc>
                            </tr>
                    </td>
                    </tr>
                    <tr>
                    <td id= "num">2</td>
                    <td className="RCircle"></td>
                    <td id= "item-content">
                            <tr id="item">Item 2</tr>
                            <tr id="select">Select one option</tr>
                            <tr>
                                <tc>Option 1</tc>
                                <tc>Option 2</tc>
                                <tc>Option 3</tc>
                                <tc>Option 4</tc>
                                <tc>Option 5</tc>
                                <tc>Option 6</tc>
                            </tr>
                    </td>
                    </tr>
                    <tr>
                    <td id= "num">3</td>
                    <td className="YCircle"></td>
                    <td id= "item-content">
                            <tr id="item">Item 3</tr>
                            <tr id="select">Select one option</tr>
                            <tr>
                                <tc>Option 1</tc>
                                <tc>Option 2</tc>
                                <tc>Option 3</tc>
                                <tc>Option 4</tc>
                                <tc>Option 5</tc>
                                <tc>Option 6</tc>
                            </tr>
                    </td>
                    </tr>
                </table>
                <div className="Wrapper">
            <Link to="/page2">
                <button className="button5"> Back </button>
            </Link>
            <button className="button4"> Submit </button>
            </div>
        </div>
    )
}

export default Page3
