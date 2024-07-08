import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const navigate = useNavigate();
    const [newTransaction, setNewTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });

    const API = import.meta.env.VITE_BASE_URL;

    const handleChange = (e) => {
        setNewTransaction((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTransaction),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((data) => {
                console.log('New transaction created:', data);

                navigate('/transactions');
            })
            .catch(error => console.error('Error creating transaction:', error));
    };

    return (
        <div className="new-transaction-page">
            <h2>Add a new item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Item's Name:
                    <input type="text" name="item_name" placeholder='name' value={newTransaction.item_name} onChange={handleChange} required />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={newTransaction.date} onChange={handleChange} required />
                </label>
                <label>
                    Amount:
                    <input type="number" name="amount" placeholder='amount' value={newTransaction.amount} onChange={handleChange} required />
                </label>
                <label>
                    From:
                    <input type="text" name="from" placeholder='from' value={newTransaction.from} onChange={handleChange} required />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" placeholder='category' value={newTransaction.category} onChange={handleChange} required />
                </label>
                <button type="submit" className='btn'>CREATE NEW ITEM</button>
            </form>
        </div>
    );
};

export default New;
