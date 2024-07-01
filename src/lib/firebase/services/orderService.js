// orderService.js
import { db } from '../firebase';
import { collection, doc, getDocs, getDoc, addDoc, updateDoc } from 'firebase/firestore';

export async function getHoldedOrder(user_id) {
    try {
        const historiesCol = collection(db, "users", user_id, "histories");
        const historySnapshot = await getDocs(historiesCol);
        return historySnapshot.docs.filter(doc => !doc.data().finishDate).map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching holded orders:", error);
        throw error;
    }
}

export async function detailOrder(user_id, history_id) {
    try {
        const historyRef = doc(db, "users", user_id, "histories", history_id);
        const historyDoc = await getDoc(historyRef);

        const orderListCol = collection(db, "users", user_id, "histories", history_id, "order_list");
        const orderListSnapshot = await getDocs(orderListCol);
        const orderList = orderListSnapshot.docs.map(doc => doc.data());

        return { id: historyDoc.id, ...historyDoc.data(), orderList };
    } catch (error) {
        console.error("Error fetching order detail:", error);
        throw error;
    }
}

export async function getOrderHistory(user_id, month) {
    try {
        const historiesCol = collection(db, "users", user_id, "histories");
        const historySnapshot = await getDocs(historiesCol);
        const now = new Date();
        const currentMonth = month ? new Date(month) : new Date(now.getFullYear(), now.getMonth(), 1);
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(currentMonth.getMonth() + 1);

        return historySnapshot.docs.filter(doc => {
            const orderDate = new Date(doc.data().orderDate);
            return orderDate >= currentMonth && orderDate < nextMonth;
        }).map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching order history:", error);
        throw error;
    }
}

export async function createNewOrder(user_id, orderDetail) {
    try {
        const historiesCol = collection(db, "users", user_id, "histories");
        const historyDocRef = await addDoc(historiesCol, {
            label: orderDetail.label,
            total: orderDetail.total,
            money: orderDetail.money,
            method: orderDetail.method,
            orderDate: orderDetail.orderDate,
            finishDate: orderDetail.finishDate
        });

        const orderListCol = collection(db, "users", user_id, "histories", historyDocRef.id, "order_list");
        const batch = orderDetail.orderList.map(order => addDoc(orderListCol, order));
        await Promise.all(batch);

        return { id: historyDocRef.id, ...orderDetail };
    } catch (error) {
        console.error("Error creating new order:", error);
        throw error;
    }
}

export async function updateOrder(user_id, history_id, orderDetail) {
    try {
        const historyRef = doc(db, "users", user_id, "histories", history_id);
        await updateDoc(historyRef, {
            label: orderDetail.label,
            total: orderDetail.total,
            money: orderDetail.money,
            method: orderDetail.method,
            orderDate: orderDetail.orderDate,
            finishDate: orderDetail.finishDate
        });

        const orderListCol = collection(db, "users", user_id, "histories", history_id, "order_list");
        const existingOrdersSnapshot = await getDocs(orderListCol);
        const deleteBatch = existingOrdersSnapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(deleteBatch);

        const batch = orderDetail.orderList.map(order => addDoc(orderListCol, order));
        await Promise.all(batch);

        return { id: history_id, ...orderDetail };
    } catch (error) {
        console.error("Error updating order:", error);
        throw error;
    }
}
