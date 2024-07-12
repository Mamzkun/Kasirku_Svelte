// orderService.js
import { db } from '../firebase';
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, Timestamp, where } from 'firebase/firestore';

export async function getHoldedOrder(user_id) {
    const startOfDay = new Date();
    const orderHistory = await getOrderHistory(user_id, startOfDay)
    if (orderHistory.error) {
        return orderHistory
    }

    const holdedHistory = {
        "error": orderHistory.error,
        "message": orderHistory.message,
        "data": {
            "total_data": orderHistory.data.length,
            "total_money": orderHistory.data.reduce((sum, item) => sum + item.total, 0),
            "holded": [],
            "success": []
        }
    };

    orderHistory.data.forEach(item => {
        if (item.finish_date) {
            holdedHistory.data.success.push(item);
        } else {
            holdedHistory.data.holded.push(item);
        }
    });
    return holdedHistory
}

export async function detailOrder(user_id, history_id) {
    try {
        const historyRef = doc(db, "users", user_id, "histories", history_id);
        const historyDoc = await getDoc(historyRef);

        const orderListCol = collection(db, "users", user_id, "histories", history_id, "order_list");
        const orderListSnapshot = await getDocs(orderListCol);
        const orderList = orderListSnapshot.docs.map(doc => doc.data());
        const orderDetail = { id: historyDoc.id, ...historyDoc.data(), orderList };

        return { error: false, message: 'getting data successfully', data: orderDetail };
    } catch (error) {
        console.error("Error fetching order detail:", error);
        return { error: false, message: error.message, data: null };
    }
}

export async function getOrderHistory(user_id, date) {
    try {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const historiesCol = collection(db, "users", user_id, "histories");
        const q = query(
            historiesCol, 
            where("order_date", ">=", Timestamp.fromDate(startOfDay)),
            where("order_date", "<=", Timestamp.fromDate(endOfDay))
        )

        const historySnapshot = await getDocs(q);
        const holdedHistory = historySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return { error: false, message: 'getting data successfully', data: holdedHistory };
    } catch (error) {
        console.error("Error fetching holded orders:", error);
        return { error: true, message: error.message, data: null };
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
            order_date: orderDetail.orderDate,
            finish_date: orderDetail.finishDate
        });

        const orderListCol = collection(db, "users", user_id, "histories", historyDocRef.id, "order_list");
        const batch = orderDetail.orderList.map(order => addDoc(orderListCol, order));
        await Promise.all(batch);
        const result = { id: historyDocRef.id, ...orderDetail }

        return { error: false, message: 'create new order success', data: result };
    } catch (error) {
        console.error("Error creating new order:", error);
        return { error: true, message: error.message, data: null };
    }
}

export async function updateOrder(user_id, history_id, orderDetail) {
    try {
        console.log(orderDetail);
        const historyRef = doc(db, "users", user_id, "histories", history_id);
        await updateDoc(historyRef, {
            label: orderDetail.label,
            total: orderDetail.total,
            money: orderDetail.money,
            method: orderDetail.method,
            order_date: orderDetail.orderDate,
            finish_date: orderDetail.finishDate
        });

        const orderListCol = collection(db, "users", user_id, "histories", history_id, "order_list");
        const existingOrdersSnapshot = await getDocs(orderListCol);
        const deleteBatch = existingOrdersSnapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(deleteBatch);

        const batch = orderDetail.orderList.map(order => addDoc(orderListCol, order));
        await Promise.all(batch);
        const result = { id: history_id, ...orderDetail };

        return { error: false, message: 'create new order success', data: result };
    } catch (error) {
        console.error("Error updating order:", error);
        return { error: true, message: error.message, data: null };
    }
}
