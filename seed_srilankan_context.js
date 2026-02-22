const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Supplier = require("./models/Supplier");
const Product = require("./models/Product");
const Location = require("./models/Location");
const Campaign = require("./models/Campaign");
const Category = require("./models/Category");

dotenv.config();

const seedSriLankanData = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully.");

    // 1. Clear existing sample data (Optional - toggle if you want to keep existing)
    // await Supplier.deleteMany({ name: { $in: ['Sarasavi Bookshop', 'M.D. Gunasena', 'Samayawardhana Publishers', 'Vijitha Yapa Bookshop'] } });

    console.log("Seeding Sri Lankan Locations...");
    const locations = await Location.insertMany([
      {
        name: "Colombo Main Warehouse",
        address: "No. 45, High Level Road, Colombo 06",
        contactNumber: "0112345678",
        status: "Active",
        isMainWarehouse: true,
      },
      {
        name: "Kandy Regional Branch",
        address: "No. 12, Dalada Veediya, Kandy",
        contactNumber: "0812345678",
        status: "Active",
      },
      {
        name: "Matara Distribution Center",
        address: "Beach Road, Matara",
        contactNumber: "0412345678",
        status: "Active",
      },
    ]).catch((err) => {
      console.log("Locations might already exist, skipping duplicates...");
      return [];
    });

    console.log("Seeding Sri Lankan Suppliers...");
    const suppliers = await Supplier.insertMany([
      {
        name: "Sarasavi Bookshop",
        contactPerson: "Mr. Chandana Perera",
        email: "info@sarasavi.lk",
        phone: "0112123456",
        category: "Bookshop",
        address: {
          street: "30 Stanley Thilakaratne Mawatha",
          city: "Nugegoda",
          postalCode: "10250",
        },
        isActive: true,
        isVerified: true,
      },
      {
        name: "M.D. Gunasena",
        contactPerson: "Ms. Nilanthi Silva",
        email: "sales@mdgunasena.lk",
        phone: "0112423123",
        category: "Distributor",
        address: {
          street: "217 Olcott Mawatha",
          city: "Colombo 11",
          postalCode: "01100",
        },
        isActive: true,
        isVerified: true,
      },
      {
        name: "Samayawardhana Publishers",
        contactPerson: "Mr. Ariyapala",
        email: "orders@samayawardhana.com",
        phone: "0112694682",
        category: "Material Supplier",
        address: {
          street: "53 Maligakanda Road",
          city: "Maradana",
          postalCode: "01000",
        },
        isActive: true,
        isVerified: true,
      },
    ]);

    console.log("Seeding Sri Lankan Educational Products...");
    const products = await Product.insertMany([
      {
        title: "Combined Mathematics Part I (Pure Mathematics)",
        titleSinhala: "සංයුක්ත ගණිතය I කොටස (ශුද්ධ ගණිතය)",
        author: "Prof. S. R. D. Rosa",
        description:
          "Comprehensive guide for G.C.E. Advanced Level Students in Sri Lanka covering the Pure Mathematics syllabus.",
        isbn: "978-955-30-1234-5",
        price: 1250,
        category: "A/L",
        grade: "Grade 12",
        subject: "Mathematics",
        examType: "A/L",
        stock: 150,
        supplier: suppliers[0]._id,
        image:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
        isActive: true,
        isFeatured: true,
      },
      {
        title: "Physics MCQ Mastery for A/L",
        titleSinhala: "භෞතික විද්‍යාව බහුවරණ ප්‍රශ්නාවලිය",
        author: "K. C. J. Malan",
        description:
          "A dedicated MCQ book with step-by-step explanations for Sri Lankan Advanced Level Physics.",
        isbn: "978-955-30-5678-9",
        price: 950,
        category: "A/L",
        grade: "Grade 13",
        subject: "Physics",
        examType: "A/L",
        stock: 200,
        supplier: suppliers[1]._id,
        image:
          "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400",
        isActive: true,
      },
      {
        title: "Sinhala Sahithya Vichara - Grade 11",
        titleSinhala: "සිංහල සාහිත්‍ය විචාර - 11 ශ්‍රේණිය",
        author: "Saman Kalupahana",
        description:
          "Guided analysis of Sinhala literature texts for G.C.E. Ordinary Level exams.",
        isbn: "978-955-20-9988-1",
        price: 550,
        category: "Grade 6-11",
        grade: "Grade 11",
        subject: "Sinhala",
        examType: "O/L",
        stock: 300,
        supplier: suppliers[2]._id,
        image:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
        isActive: true,
      },
      {
        title: "Grade 5 Scholarship Model Papers",
        titleSinhala: "ශිෂ්‍යත්ව ආදර්ශ ප්‍රශ්න පත්‍ර",
        author: "Education Department S.L.",
        description:
          "Set of 10 model papers following the latest Scholarship exam pattern with answers.",
        isbn: "978-955-10-2233-1",
        price: 450,
        category: "Others",
        grade: "Other",
        subject: "General",
        examType: "Scholarship",
        stock: 500,
        supplier: suppliers[0]._id,
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
        isActive: true,
      },
    ]);

    console.log("Seeding Sri Lankan Marketing Campaigns...");
    const now = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(now.getMonth() + 1);

    await Campaign.insertMany([
      {
        name: "Sinhala & Tamil New Year Sale",
        type: "Seasonal",
        description:
          "Celebrate the Avurudu season with massive discounts on all educational books!",
        startDate: now,
        endDate: nextMonth,
        discountType: "Percentage",
        discountValue: 15,
        isActive: true,
        applicableCategories: ["A/L", "Grade 6-11"],
      },
      {
        name: "Back to School 2026",
        type: "Seasonal",
        description:
          "Get ready for the new school term with 10% off on all Grade 6-11 textbooks.",
        startDate: now,
        endDate: nextMonth,
        discountType: "Percentage",
        discountValue: 10,
        isActive: true,
        applicableCategories: ["Grade 6-11"],
      },
      {
        name: "Advanced Level Flash Sale",
        type: "Flash Sale",
        description:
          "Limited time offer: Extra discounts for Science & Math stream students!",
        startDate: now,
        endDate: nextMonth,
        discountType: "Fixed Amount",
        discountValue: 100,
        isActive: true,
        applicableProducts: [products[0]._id, products[1]._id],
      },
    ]);

    console.log("Database seeded with Sri Lankan context successfully!");
    process.exit(0);
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Validation Error Details:");
      for (let field in error.errors) {
        console.error(`- ${field}: ${error.errors[field].message}`);
      }
    } else {
      console.error("Error seeding data:", error);
    }
    process.exit(1);
  }
};

seedSriLankanData();
