// userService.js
import { error } from '@sveltejs/kit';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, signOut } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

export async function register(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {email});

        return {error: false, message: 'register success', token: user.accessToken};
    } catch (error) {
        console.error("Error creating new user:", error.message);
        return {error: true, message: error.message, token: null}
    }
}

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return {error: false, message: 'login success', token: userCredential.user.accessToken};
    } catch (error) {
        console.error("Error logging in user:", error.message);
        return {error: true, message: error, token: null}
    }
}

export async function logout() {
    try {
        await signOut(auth);
        return {error: false, message: 'logout success'};
    } catch (error) {
        console.error("Error logging in user:", error.message);
        return {error: true, message: error.message}
    }
}

export async function updateProfile(user_id, user) {
    try {
        const userRef = doc(db, "users", user_id);
        const filteredUser = Object.fromEntries(Object.entries(user).filter(([_, v]) => v !== ''));

        await updateDoc(userRef, filteredUser);
        return {error: false, message: "Profile updated successfully"};
    } catch (error) {
        console.error("Error updating profile:", error.message);
        return {error: true, message: error.message}
    }
}

export async function editPassword(user, newPassword) {
    try {
        await updatePassword(auth.currentUser, newPassword);
        return {error: false, message: "Password updated successfully" };
    } catch (error) {
        console.error("Error updating password:", error.message)
        return {error: true, message: error.message}
    }
}
