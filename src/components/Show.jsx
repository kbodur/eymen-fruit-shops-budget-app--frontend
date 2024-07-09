import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Show = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(response => response.json())
            .then(data => setTransaction(data))
            .catch(error => console.error('Error fetching transaction:', error));
    }, [index]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                const total = data.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
                setTotalAmount(total);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this transaction?')) {
            fetch(`${API}/${index}`, { method: 'DELETE' })
                .then(() => navigate('/transactions'))
                .catch(error => console.error('Error deleting transaction:', error));
        }
    };

    if (!transaction) return <p>Loading...</p>;

    return (
        <div>
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <h1 className='shw'>Show Item</h1>
            <div className="show-page">
                <h2>Item_name: {transaction.item_name}</h2>
                <p>Date: {transaction.date}</p>
                <p>Amount: {transaction.amount}</p>
                <p>From :{transaction.from}</p>
                <p>Category: {transaction.category}</p>

            </div>

            <button onClick={() => navigate('/transactions')} className='btn-back'>Back</button>
            <button onClick={() => navigate(`/transactions/${index}/edit`)} className='btn-edit'>Edit</button>
            <button onClick={handleDelete} className='btn-delete'>Delete</button>
        </div>
    );
};

export default Show;
