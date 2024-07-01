// productService.js
import { db, storage } from '../firebase';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function getAllProduct(user_id) {
    try {
        const productsCol = collection(db, "users", user_id, "products");
        const productSnapshot = await getDocs(productsCol);
        return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function addProduct(user_id, product, image) {
    try {
        if (image) {
            const storageRef = ref(storage, `products/${user_id}/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            product.image = await getDownloadURL(snapshot.ref);
        }

        const productsCol = collection(db, "users", user_id, "products");
        const docRef = await addDoc(productsCol, product);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
}

export async function updateProduct(user_id, product_id, product, image) {
    try {
        if (image) {
            const storageRef = ref(storage, `products/${user_id}/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            product.image = await getDownloadURL(snapshot.ref);
        }

        const productRef = doc(db, "users", user_id, "products", product_id);
        await updateDoc(productRef, product);
        return { id: product_id, ...product };
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
}

export async function deleteProduct(user_id, product_id) {
    try {
        const productRef = doc(db, "users", user_id, "products", product_id);
        await deleteDoc(productRef);
        return { message: "Product deleted successfully" };
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
}
