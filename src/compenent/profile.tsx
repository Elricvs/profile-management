import React, { useEffect, useState } from 'react';
import ProfileImage from '../assets/photo.jpg';

const Profile: React.FC = () => {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        description: '',
        email: '',
        github: '',
        linkedin: ''
    });

    useEffect(() => {
        fetch('http://localhost:5000/api/customer')
            .then(response => response.json())
            .then(data => setCustomer(data));
    }, []);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="img-fluid rounded-circle mb-3"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{customer.firstName} {customer.lastName}</h1>
                    <p className="lead">
                        Je suis un développeur passionné par les technologies web et les mangas.
                    </p>
                    <ul className="list-unstyled">
                        <li><strong>Email:</strong> elric.vs@gmail.com</li>
                        <li><strong>GitHub:</strong> <a href="#">github.com/Elricvs</a></li>
                        <li><strong>linkedin:</strong> <a href="#">linkedin.com/in/elric-vs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;