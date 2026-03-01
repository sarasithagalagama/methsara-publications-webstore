# Methsara Publications Webstore

**Full-Stack E-commerce Platform for Educational Materials**

---

## 📋 Project Information

**Client**: Methsara Publications  
**Technology Stack**: MERN (MongoDB, Express.js, React.js, Node.js)  
**Project Type**: Agile/Scrum Development  
**Team Size**: 6 Members  
**Status**: Fully Implemented — All 6 Epics Built & Running

---

## 🚀 Quick Start

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client && npm install && cd ..

# Run backend + frontend together
npm start
```

| Service | URL |
|---|---|
| Frontend (React) | http://localhost:3000 |
| Backend API | http://localhost:5000 |

See [QUICK_START.md](QUICK_START.md) for detailed setup and [ONE_COMMAND_START.md](ONE_COMMAND_START.md) for the single-command workflow.

---

## 📂 Documentation
- **Epic READMEs**: Each `epics/E*/README.md` — full API reference, functions, database schema, validations, viva Q&A
- **Database Design**: [`docs/database_design.md`](docs/database_design.md)
- **Postman Guide**: [`docs/guides/Postman_Testing_Guide.md`](docs/guides/Postman_Testing_Guide.md)
- **Sprint 0**: [`docs/sprint-0/`](docs/sprint-0/)
- **RE Assignment**: [`docs/re-assignment/`](docs/re-assignment/)

---

## 📁 Actual Project Structure
```
methsara-publications-webstore/
├── server.js                     # Express app entry point
├── package.json                  # Root scripts + backend deps
├── .env                          # Environment variables (secret)
│
├── epics/                        # Backend — organized by epic
│   ├── E1_UserAndRoleManagement/ # Auth, JWT, sessions, roles
│   ├── E2_ProductCatalog/        # Products, reviews, categories
│   ├── E3_OrderAndTransaction/   # Orders, cart, financial reports
│   ├── E4_SupplierManagement/    # Suppliers, purchase orders
│   ├── E5_InventoryManagement/   # Stock, locations, transfers
│   └── E6_PromotionAndLoyalty/   # Coupons, campaigns, vouchers
│
├── client/                       # React frontend
│   ├── src/
│   │   ├── epics/                # Frontend components per epic
│   │   ├── components/           # Shared UI components
│   │   ├── pages/                # Home, About, Contact
│   │   ├── context/              # React context (auth, cart)
│   │   ├── services/             # Axios API service layer
│   │   └── api/config.js         # Base URL config
│   └── package.json
│
├── docs/                         # All documentation
├── scripts/                      # Utility / migration scripts
└── uploads/                      # Uploaded files (product images)
```

---

## 👥 Team Structure

| IT Number | Name | Role | Epic | Backend Entry Point |
|---|---|---|---|---|
| IT24100799 | Gawrawa G H Y | Scrum Master | E4: Supplier Management | `epics/E4_SupplierManagement/` |
| IT24100548 | Galagama S.T | Developer | E1: User & Role Management | `epics/E1_UserAndRoleManagement/` |
| IT24101314 | Appuhami H A P L | Developer | E2: Product Catalog | `epics/E2_ProductCatalog/` |
| IT24100191 | Jayasinghe D.B.P | Developer | E3: Order & Transaction | `epics/E3_OrderAndTransaction/` |
| IT24100264 | Bandara N W C D | Developer | E5: Inventory Management | `epics/E5_InventoryManagement/` |
| IT24101266 | Perera M.U.E | Developer | E6: Promotion & Loyalty | `epics/E6_PromotionAndLoyalty/` |

---

## 🎯 6 Core Epics

| Epic | Name | API Base URL | README |
|---|---|---|---|
| **E1** | User & Role Management | `/api/auth`, `/api/approvals` | [E1 README](epics/E1_UserAndRoleManagement/README.md) |
| **E2** | Product Catalog | `/api/products`, `/api/upload` | [E2 README](epics/E2_ProductCatalog/README.md) |
| **E3** | Order & Transaction | `/api/orders`, `/api/cart`, `/api/financial` | [E3 README](epics/E3_OrderAndTransaction/README.md) |
| **E4** | Supplier Management | `/api/suppliers`, `/api/purchase-orders` | [E4 README](epics/E4_SupplierManagement/README.md) |
| **E5** | Inventory Management | `/api/inventory`, `/api/locations`, `/api/stock-transfers` | [E5 README](epics/E5_InventoryManagement/README.md) |
| **E6** | Promotion & Loyalty | `/api/coupons`, `/api/gift-vouchers` | [E6 README](epics/E6_PromotionAndLoyalty/README.md) |

---

## � Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/methsara_publications
JWT_SECRET=your_super_secret_key
PORT=5000
NODE_ENV=development
```

---

## 🌐 All API Endpoints

| Epic | Method | Endpoint | Auth |
|---|---|---|---|
| E1 | POST | `/api/auth/register` | No |
| E1 | POST | `/api/auth/login` | No |
| E1 | GET  | `/api/auth/me` | Yes |
| E1 | GET  | `/api/approvals` | Admin |
| E2 | GET  | `/api/products` | No |
| E2 | POST | `/api/products` | Product Mgr |
| E2 | POST | `/api/upload/product-image` | Yes |
| E3 | POST | `/api/orders` | Optional |
| E3 | GET  | `/api/cart` | Yes |
| E3 | GET  | `/api/financial/dashboard` | Finance Mgr |
| E4 | GET  | `/api/suppliers` | Supplier Mgr |
| E4 | POST | `/api/purchase-orders` | Supplier Mgr |
| E5 | GET  | `/api/inventory/location/:id` | Inventory Mgr |
| E5 | POST | `/api/stock-transfers/request` | Inventory Mgr |
| E6 | POST | `/api/coupons/validate` | Yes |
| E6 | GET  | `/api/coupons/campaigns/active` | No |
| E6 | POST | `/api/gift-vouchers/validate` | No |

Full endpoint tables are in each epic's README.

---

## 🔐 User Roles

| Role | Access |
|---|---|
| `customer` | Browse, cart, checkout, own orders |
| `admin` | Full access to all epics |
| `product_manager` | Create/edit/archive products |
| `finance_manager` | Financial dashboard, transactions, refunds |
| `supplier_manager` | Suppliers, purchase orders |
| `master_inventory_manager` | All stock, transfers, adjustments |
| `location_inventory_manager` | Own location stock only |
| `marketing_manager` | Coupons, campaigns, gift vouchers |

---

## 📚 Key Documents

- **Product Backlog**: [`docs/sprint-0/Complete_Product_Backlog.md`](docs/sprint-0/Complete_Product_Backlog.md)
- **Epic Structure**: [`docs/sprint-0/Epic_Structure_Summary.md`](docs/sprint-0/Epic_Structure_Summary.md)
- **Component Responsibilities**: [`docs/planning/Component_Responsibilities.md`](docs/planning/Component_Responsibilities.md)
- **Agile Plan**: [`docs/planning/AGILE_PLAN.md`](docs/planning/AGILE_PLAN.md)
- **Git Workflow**: [`docs/planning/GIT_WORKFLOW.md`](docs/planning/GIT_WORKFLOW.md)
- **Postman Testing Guide**: [`docs/guides/Postman_Testing_Guide.md`](docs/guides/Postman_Testing_Guide.md)
- **Folder Structure**: [`FOLDER_STRUCTURE.md`](FOLDER_STRUCTURE.md)

---

## 🎯 Current Status

**Sprint**: Sprint 0 (Week 2)  
**Phase**: Planning & Documentation  
**Next Milestone**: Sprint 1 Planning (Week 3)

### Sprint 0 Deliverables:
- ✅ Product Backlog (37 stories)
- ✅ Epic Structure (6 Epics)
- ✅ Team Assignments
- ✅ Documentation Organized
- ✅ RE Assignment 1 (88 Requirements, 67 User Stories, 88 Test Cases)
- 🔄 Jira Setup (In Progress)
- 🔄 Presentation Preparation (In Progress)

---

## 📞 Contact & Resources

**Project Repository**: [GitHub Link - To be added]  
**Jira Board**: [Jira Link - To be added]  
**Team Communication**: WhatsApp/Discord

---

## 📖 License

This project is developed as part of IE2091 - Information Systems Project course.

---

**Last Updated**: February 12, 2026  
**Version**: 1.1 (Sprint 0 + RE Assignment 1)  
**Status**: Active Development 🚀
