import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Edit = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(null);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(response => response.json())
            .then(data => setTransaction(data))
            .catch(error => console.error('Error fetching log:', error));
    }, [index]);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setTransaction(prevTransaction => ({
            ...prevTransaction,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/${index}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                navigate(`/transactions/${index}`);
            })
            .catch(error => {
                console.error('Error updating transaction:', error);

            });
    };

    if (!transaction) return <p>Loading...</p>;

    return (
        <div className="edit-transaction-page">
            <h2>Edit Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Item's Name:
                    <input type="text" name="item_name" value={transaction.item_name} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={transaction.date} onChange={handleChange} />
                </label>
                <label>
                    Amount:
                    <input type="number" name="amount" value={transaction.amount} onChange={handleChange} />
                </label>
                <label>
                    From:
                    <input type="text" name="from" value={transaction.from} onChange={handleChange} />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={transaction.category} onChange={handleChange} />
                </label>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Edit;
