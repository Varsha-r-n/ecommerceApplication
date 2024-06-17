import axios from 'axios';

const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get('http://localhost:3000/protected', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
    } catch (err) {
        console.error('Error fetching data', err);
    }
};

useEffect(() => {
    fetchData();
}, []);
