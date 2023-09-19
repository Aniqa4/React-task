import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState();

    const handleClick = (val) => {
        const dataString = localStorage.getItem('contacts');
        const data = JSON.parse(dataString)
        const active = data.filter(x => x.status === 'active')
        const completed = data.filter(x => x.status === 'completed')
        if (val === 'all') {
            data.sort((a, b) => {
                const statusOrder = ['active', 'completed'];
                const statusA = a.status.toLowerCase();
                const statusB = b.status.toLowerCase();

                if (statusOrder.includes(statusA) && !statusOrder.includes(statusB)) {
                    return -1;
                }
                if (!statusOrder.includes(statusA) && statusOrder.includes(statusB)) {
                    return 1;
                }
                return statusA.localeCompare(statusB);
            });

            setShow(data);
        } else {
            const filteredData = data.filter(x => x.status === val);
            setShow(filteredData);
        }
        if (val === 'active') {
            setShow(active);
        }
        if (val === 'completed') {
            setShow(completed);
        }
    }

    const handleForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        let status = form.status.value;
        status = status.toLowerCase()

        let existingData = JSON.parse(localStorage.getItem('contacts')) || [];

        if (!Array.isArray(existingData)) {
            existingData = [];
        }
        const newData = { name, status };
        existingData.push(newData);
        localStorage.setItem('contacts', JSON.stringify(existingData));

        form.reset();
    }

    console.log(show);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleForm} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" name='name' placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" name='status' placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            {
                                show.map((x, index) =>
                                    <tr>
                                        <th scope="col">{x.name}</th>
                                        <th scope="col">{x.status}</th>
                                    </tr>)
                            }
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;