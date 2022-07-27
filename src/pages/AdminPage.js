import React from 'react';
import '../App';
import AdminProfile from '../components/UserAndAdmin/AdminProfile';
import NavBarAdmin from '../components/UserAndAdmin/NavBarAdmin';


function UserProfile() {
    return (
        <>
            <NavBarAdmin />
            <AdminProfile/>
        </>
    );
}

export default UserProfile