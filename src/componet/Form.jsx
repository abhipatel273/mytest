import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Form() {


    const [curval, setCurVal] = useState({
        username: "",
        password: "",
    })

    const inputval = (e) => {
        console.log(e.target.value);
        console.log(e.target.name)

        const val = e.target.value.trim();
        const name = e.target.name;

        setCurVal((prval) => {
            return {
                ...prval,
                [name]: val,
            }

            //     if (fnmae === "username") {
            //         return {
            //             username: val,
            //             password: prval.password,
            //         };
            //     } else if (fnmae === "password") {
            //         return {
            //             username: prval.val,
            //             password: val,
            //         }
            //     }
            //     else {
            //         alert("value not same")
            //     }
        });

    };

    const handelsub = (e) => {
        e.preventDefault();
        alert("submit success");
    }


    return (
        <>
            < Navbar ></Navbar>
            <div className="container">
                <div className='submit-form'>
                    <h1> {curval.username} </h1>
                    <h1> {curval.password} </h1>
                    <form onSubmit={handelsub}>
                        <fieldset>
                            <div className='form-row'>
                                <div className='form-col'>
                                    <label htmlFor="" className='form-label'>Username</label>
                                    <input type="text" name="username" className='form-input' value={curval.username}
                                        onChange={inputval}></input>
                                </div>
                                <div className='form-col'>
                                    <label htmlFor="" className='form-label'>password</label>
                                    <input type="password" name="password" className='form-input' value={curval.password}
                                        onChange={inputval}>

                                    </input>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" className='submit-btn'>submit 👍</button>
                    </form>
                </div>
            </div>
        </>
    )
}

