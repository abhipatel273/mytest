import React, { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faplus } from '@fortawesome/free-solid-svg-icons';


const getLocaldata = () => {
    const list = localStorage.getItem("mytodolist");

    if (list) {
        return JSON.parse(list)
    } else {
        return [];
    }
}

export default function Todo() {

    const [inputdata, setInputData] = useState("");
    const [item, setItem] = useState(getLocaldata());
    const [isedited, setEdited] = useState();
    const [toggleBtn, setToggleBtn] = useState(false);
     

    // additems
    const additems = () => {
        if (!inputdata) {
            alert("plz enter data")
        } else if (inputdata && toggleBtn) {
            setItem(
                item.map((curelem) => {
                    if (curelem.id === isedited) {
                        return { ...curelem, name: inputdata }
                    }
                    return curelem;
                })
            )
            setInputData([]);
            setEdited();
            setToggleBtn(false);
        }
        else {
            const newinputdata = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItem([...item, newinputdata]);
            setInputData("");
        }
    }

    // edit item
    const edited = (index) => {
        const todo_edit = item.find((curelem) => {
            return curelem.id === index;
        });
        setInputData(todo_edit.name);
        setEdited(index);
        setToggleBtn(true);
    };


    // delete item
    const dltitem = (index) => {
        const updateItem = item.filter((curelem) => {
            return curelem.id !== index;
        })
        setItem(updateItem);
    }

    //remove all item
    const RemoveAll = () => {
        setItem([]);
    }

    // adding local storage

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(item));
    }, [item]);

    return (
        <div>
            <div className='main-div'>
                <div className='center-div'>
                    <figure>
                        <img src="" alt=""></img>
                        <figcaption className='text'>Add Your List Here</figcaption>
                        <div className='middle-div'>
                            <input type="type" placeholder='Add Item' className='item-name' value={inputdata} onChange={(event) => setInputData(event.target.value)} ></input>
                            {/* <FontAwesomeIcon className="">{['fa', 'fa-plus']} </FontAwesomeIcon>  */}
                            {toggleBtn ? (
                                < i className="add-icon fa fa-edit" onClick={additems} ></i>
                            ) : (
                                < i className="add-icon fa fa-plus" onClick={additems} ></i>
                                )
                            }
                        </div>
                        <div className='showItems mt-3'>
                            {item.map((curelem) => {
                                return (
                                    <>
                                        <div className='eachItem d-flex justify-content-between align-items-center mb-2 mx-auto' key={curelem.id}>
                                            <h3 className='p-2'>{curelem.name}</h3>
                                            <div className='todo-button'>
                                                < i className="remove-icon fa fa-edit mr-2" onClick={() => edited(curelem.id)}></i>
                                                < i className="add-icon fa fa-trash-alt" onClick={() => dltitem(curelem.id)}></i>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className='showItems text-center mt-3'>
                            <button className='' data-sm-link-text="remove all" onClick={RemoveAll}>checklist</button>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}
