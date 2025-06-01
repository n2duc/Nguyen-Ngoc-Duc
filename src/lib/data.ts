import type { Customer, User } from "./validations";
import customers from "@/assets/customer-data.json";

export const users: User[] = [
  {
    id: "LO00001",
    fullname: "Mr. David Nguyen",
    username: "davidnguyen",
    avatar: "https://avatar.iran.liara.run/public",
    phoneNumber: "(322) 243-3452",
    email: "david.nguyen@gmail.com",
    type: "Loan Officer",
    experience: "5 years",
    status: "active",
  },
  {
    id: "UW00001",
    fullname: "Ms. Jennie Pink",
    username: "jenniepink",
    avatar: "https://avatar.iran.liara.run/public",
    phoneNumber: "(322) 243-3452",
    email: "jenniepink@gmail.com",
    type: "Underwriter",
    experience: "5 years",
    status: "active",
  },
  {
    id: "LP00001",
    fullname: "Mr. Pep Guardiola",
    username: "pepguardiola",
    avatar: "https://avatar.iran.liara.run/public",
    phoneNumber: "(322) 243-3452",
    email: "pepguardiola@gmail.com",
    type: "Loan Processor",
    experience: "5 years",
    status: "active",
  },
  {
    id: "AD00001",
    fullname: "Mr. Bruno Mar",
    username: "brunomars",
    avatar: "https://avatar.iran.liara.run/public",
    phoneNumber: "(322) 243-3452",
    email: "brunomors@gmail.com",
    type: "Admin",
    experience: "5 years",
    status: "active",
  },
  {
    id: "ME00001",
    fullname: "Mr. David Beckham",
    username: "davidbeckham",
    avatar: "https://avatar.iran.liara.run/public",
    phoneNumber: "(322) 243-3452",
    email: "davidbeckham@gmail.com",
    type: "Member",
    experience: "5 years",
    status: "active",
  },
];

export const vietnameseData = {
  "Hà Nội": [
    "Quận Ba Đình",
    "Quận Hoàn Kiếm",
    "Quận Tây Hồ",
    "Quận Long Biên",
    "Quận Cầu Giấy",
    "Quận Đống Đa",
    "Quận Hai Bà Trưng",
    "Quận Hoàng Mai",
  ],
  "TP Hồ Chí Minh": [
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận Thủ Đức",
    "Quận Bình Thạnh",
  ],
  "Đà Nẵng": [
    "Quận Hải Châu",
    "Quận Thanh Khê",
    "Quận Sơn Trà",
    "Quận Ngũ Hành Sơn",
    "Quận Liên Chiểu",
    "Quận Cẩm Lệ",
  ],
};

export const sampleSchema = {
  title: "User Profile",
  description: "Basic user information form",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
      description: "Enter your first name",
    },
    lastName: {
      type: "string",
      title: "Last Name",
      description: "Enter your last name",
    },
    email: {
      type: "string",
      format: "email",
      title: "Email Address",
      description: "Enter your email address",
    },
    age: {
      type: "integer",
      title: "Age",
      description: "Enter your age",
    },
    address: {
      type: "string",
      format: "vietnamese-address",
      title: "Địa chỉ",
      description: "Nhập địa chỉ đầy đủ của bạn",
    },
    newsletter: {
      type: "boolean",
      title: "Subscribe to Newsletter",
      description: "Receive updates and news",
    },
  },
};

export const customersData: Customer[] = customers as Customer[];