import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Index = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [filter, setFilter] = useState('All');
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setTransactions(data);
                setFilteredTransactions(data);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, [API]);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredTransactions(transactions);
        } else {
            setFilteredTransactions(transactions.filter(transaction => transaction.category === filter));
        }
    }, [filter, transactions]);

    const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

    const getTotalAmountClass = (amount) => {
        if (amount > 100) {
            return 'total-amount green';
        } else if (amount >= 0 && amount <= 100) {
            return 'total-amount yellow';
        } else {
            return 'total-amount red';
        }
    };

    return (
        <div className="index-page">
            <h2 className={getTotalAmountClass(totalAmount)}>
                Total Amount: {totalAmount.toFixed(2)}
            </h2>
            <div className="filter-container">
                <label htmlFor="filter">Filter by:</label>
                <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Sales">Sales</option>
                    <option value="Purchases">Purchases</option>
                </select>
            </div>
            <table className='tbl'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td><Link to={`/transactions/${index}`}>{transaction.from}</Link></td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
