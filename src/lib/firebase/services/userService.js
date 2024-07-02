// userService.js
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

export async function register(name, phone, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            name,
            phone,
            email,
            address: "",
            open_time: "",
            close_time: "",
            instagram: ""
        });

        return user;
    } catch (error) {
        console.error("Error creating new user:", error);
        throw error;
    }
}

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}

export async function updateProfile(user_id, user) {
    try {
        const userRef = doc(db, "users", user_id);
        const filteredUser = Object.fromEntries(Object.entries(user).filter(([_, v]) => v !== ''));

        await updateDoc(userRef, filteredUser);
        return { message: "Profile updated successfully" };
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
}

export async function updatePassword(user, newPassword) {
    try {
        await updatePassword(auth.currentUser, newPassword);
        return { message: "Password updated successfully" };
    } catch (error) {
        console.error("Error updating password:", error);
        throw error;
    }
}
