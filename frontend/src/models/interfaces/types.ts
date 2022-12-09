/* eslint-disable camelcase */
export interface BasicRatingProps {
    text: string
}

// Example

export interface ExampleResponse {
    id: number;
    uid: string;
    account_number: string;
    iban: string;
    bank_name: string;
    routing_number: string;
    swift_bic: string;
}

// Login

export interface LoginResponse {
    token: string;
    success: boolean;
}

export interface LoginRequest {
    email: string;
    password: string;
}

// List Friends

export interface ListFriendsResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface MediaCardProps {
    image: string;
    alt: string;
    height: string;
    maxWidth: number;
    title: string;
    body: string;
}

export type BasicAlertsProps = BasicRatingProps