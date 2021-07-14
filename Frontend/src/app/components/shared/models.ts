export interface Order {
  customer_id: string;
  customer_name: string;
  tailor_id: string;
  status: string;
  design: Array<string>;
  customer_sizes: {
    chest: number;
    armLength: number;
    waist: number;
    height: number;
    inseam: number;
    shoulder: number;
    collar: number;
    thigh: number;
  };
}

export interface CustomerSignup {
  email: String;
  phone: String;
  name: String;
  password: String;
}

export interface UserLogin {
  email: String;
  password: String;
}

export interface Tailor {}
export interface Comment {}
export interface User {
  avatar: String;
  name: String;
  email: String;
  phone: String;
  password: String;
  gender: String;
  sizes: {
    chest: number;
    armLength: number;
    waist: number;
    height: number;
    inseam: number;
    shoulder: number;
    collar: number;
    thigh: number;
  };
}
