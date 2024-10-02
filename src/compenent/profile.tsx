import React from 'react';
import ProfileImage from '../assets/photo.jpg';

const Profile: React.FC = () => {
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
                    <h1>Van Steenwinckel</h1>
                    <p className="lead">
                        Je suis un développeur passionné par les technologies web et les mangas.
                    </p>
                    <ul className="list-unstyled">
                        <li><strong>Email:</strong> elric.vs@gmail.com</li>
                        <li><strong>GitHub:</strong> <a href="#">github.com/Elricvs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;