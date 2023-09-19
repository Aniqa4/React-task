import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => {
                setContacts(data?.results)
            })
    }, [])

    const UsContacts = contacts?.filter(x => x.country.name === 'United States')

    console.log(UsContacts);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" data-toggle="modal" data-target="#exampleModal">All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" data-toggle="modal" data-target="#exampleModal2">US Contacts</button>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Modal A</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-lg btn-outline-primary" data-toggle="modal" data-target="#exampleModal" data-dismiss="modal">All Contacts</button>
                                <button type="button" className="btn btn-lg btn-outline-warning mx-1" data-toggle="modal" data-target="#exampleModal2" data-dismiss="modal" >US Contacts</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <div className='py-5'>
                                    <h4>All Contacts</h4>
                                    {
                                        contacts?.map((x, index) =>
                                            <div key={index} className='border px-5 '>
                                                <p>Country: {x.country.name}</p>
                                                <p>{x.phone}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <label>Only Even</label>
                                <input type="checkbox" name="Only Even" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Modal B</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-lg btn-outline-primary" data-toggle="modal" data-target="#exampleModal" data-dismiss="modal" >All Contacts</button>
                                <button type="button" className="btn btn-lg btn-outline-warning mx-1" data-toggle="modal" data-target="#exampleModal2" data-dismiss="modal">US Contacts</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <div className='py-5'>
                                    <h4>US Contacts</h4>
                                    {
                                        UsContacts?.map((x, index) =>
                                            <div key={index} className='border px-5 '>
                                                <p>Country</p>
                                                <p>{x.phone}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <label>Only Even</label>
                                <input type="checkbox" name="Only Even" id="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;