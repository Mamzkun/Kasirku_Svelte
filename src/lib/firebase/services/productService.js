// productService.js
import { db, storage } from '../firebase';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFormattedDateToday } from '$lib/helpers/dateFormatter'

export async function getAllProduct(user_id) {
    try {
        const productsCol = collection(db, "users", user_id, "products");
        const productSnapshot = await getDocs(productsCol);
        const result = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return { error: false, message: 'getting data product successfully', data: result };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { error: true, message: error.message, data: null };
    }
}

export async function addProduct(user_id, product, image) {
    try {
        if (image != undefined) {
            const binaryImage = getBinaryFileOf(image)
            const storageRef = ref(storage, `products/${user_id}/${getFormattedDateToday()}_${product.name}`);
            const snapshot = await uploadBytes(storageRef, binaryImage, {contentType: 'image/webp'});
            product.image = await getDownloadURL(snapshot.ref);
        }

        const productsCol = collection(db, "users", user_id, "products");
        const docRef = await addDoc(productsCol, product);
        return { error: false, message: 'add product successfully', data: { id: docRef.id, ...product } };
    } catch (error) {
        console.error("Error adding product:", error);
        return { error: true, message: error.message, data: null };
    }
}

export async function updateProduct(user_id, product_id, product, image) {
    try {
        if (image != undefined) {
            const binaryImage = getBinaryFileOf(image)
            const storageRef = ref(storage, `products/${user_id}/${getFormattedDateToday()}_${product.name}`);
            const snapshot = await uploadBytes(storageRef, binaryImage, {contentType: 'image/webp'});
            product.image = await getDownloadURL(snapshot.ref);
        }

        const productRef = doc(db, "users", user_id, "products", product_id);
        await updateDoc(productRef, product);
        return { error: false, message: 'update product successfully', data: { id: product_id, ...product } };
    } catch (error) {
        console.error("Error updating product:", error);
        return { error: true, message: error.message, data: null };
    }
}

export async function deleteProduct(user_id, product_id) {
    try {
        const productRef = doc(db, "users", user_id, "products", product_id);
        await deleteDoc(productRef);
        return { error: false, message: "Product deleted successfully" };
    } catch (error) {
        console.error("Error deleting product:", error);
        return { error: true, message: error.message };
    }
}

function getBinaryFileOf(image) {
    const base64Data = image.split(',')[1]
    return Buffer.from(base64Data, 'base64')
}
