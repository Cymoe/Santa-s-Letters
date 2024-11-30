import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

// Types for our collections
export interface Order {
    id: string;
    created: string;
    updated: string;
    childName: string;
    childAge: number;
    packageType: 'standard' | 'special' | 'ultimate';
    parentName: string;
    email: string;
    address: string;
    specialRequests?: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
    trackingNumber?: string;
}

export interface OrderCreate extends Omit<Order, 'id' | 'created' | 'updated' | 'status' | 'trackingNumber'> {}
