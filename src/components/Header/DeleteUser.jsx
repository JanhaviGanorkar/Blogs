import React from 'react';
import { Button } from '../index';
import authService from '../../appwrite/auth';

export default function DeleteUser() {
    const userId = 'uniqueUserId'; // Replace with actual user ID

    const handleClick = async () => {
        try {
            await authService.deleteUserAndPosts(userId);
            console.log(`User and their posts deleted successfully.`);
        } catch (error) {
            console.error('Error deleting user and posts:', error);
        }
    };

    return (
        <div>
            <Button onClick={handleClick}>Delete User and Posts</Button>
        </div>
    );
}
