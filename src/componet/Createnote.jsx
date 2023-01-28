import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';

export default function Createnote() {

    const [curval, setCurVal] = useState({
        content: "",
        title: "",
    });

    const [item, setItem] = useState([]);
    const [expand, setExpand] = useState(false);

    const inputval = (e) => {
        const { value, name } = e.target;

        setCurVal((prvdata) => {
            return {
                ...prvdata,
                [name]: value,
            };
        });
    };

    const AddNote = () => {
        setItem((prevnote) => {
            return [...prevnote, curval]
        });
        setCurVal({
            title: "",
            content: "",
        });
    };

    const RemoveNote = (id) => {
        setItem((olddata) => {
            olddata.filter((curdata, index) => {
                return index !== id;
            });
        });
    };

    const expanit = () => {
        setExpand(true);
    };

    const expandthis = () => {
        setExpand(false);
    };

    return (
        <>
        < Navbar/>
            <div className="container">
                <fieldset>
                    <div className='form-row' onDoubleClick={expandthis}>
                        <div className='form-col'>
                            {expand ? <input type="text" name="title" className='form-input' placeholder='Enter title...' value={curval.title}
                                onChange={inputval} /> : null}
                            <textarea type="text" rows="" columns="" name="content" placeholder='Enter text...' className='form-input' value={curval.content}
                                onChange={inputval} onClick={expanit} />
                        </div>
                    </div>
                    {expand ? <button className='submit-btn' onClick={AddNote}>Addtext 👍</button> : null}
                </fieldset>
                {item.map((val, id) => {
                    return (
                        <>
                            <div className='' key={id.index}>
                                <div className='form-col'>
                                    <h1>{val.title}</h1>
                                    <p>{val.content}</p>
                                </div>
                                <button className='submit-btn' onClick={RemoveNote}>removetext 👍</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
};
