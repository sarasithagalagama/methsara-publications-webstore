# Complete Product Backlog

**Based on Component Responsibilities v1.0**

This backlog is strictly derived from the `Component_Responsibilities.md` document. It organizes requirements into the 6 core components (Epics) and breaks down "Core Functions" into specific User Stories.

---

## 1. User & Admin Management Component (Epic 1)

**Goal:** Manage customer identity, staff access, and security.

| ID | User Story | Estimated Story Points | Priority |
| :--- | :--- | :--- | :--- |
| **E1.1** | As a **Customer**, I want to **self-register with email verification**, so that I can create a verified account. | 5 | **High** |
| **E1.2** | As a **Customer**, I want to **login securely**, so that I can access my personalized account. | 3 | **High** |
| **E1.3** | As a **Customer**, I want to **manage my profile (name, address, phone)**, so that my details are up to date for orders. | 3 | **High** |
| **E1.4** | As a **System Administrator**, I want to **create Master Inventory Manager accounts**, so that they can oversee all location stock. | 3 | **High** |
| **E1.4.1** | As a **System Administrator**, I want to **create Location-Specific Inventory Manager accounts (Balangoda, Kottawa, Main)**, so that they can manage their specific branch. | 3 | **High** |
| **E1.4.2** | As a **System Administrator**, I want to **create Finance Manager accounts**, so that they can handle financial reporting and invoices. | 3 | **High** |
| **E1.4.3** | As a **System Administrator**, I want to **create Supplier Manager accounts**, so that they can manage procurement and vendors. | 3 | **High** |
| **E1.4.4** | As a **System Administrator**, I want to **create Marketing Team accounts**, so that they can manage campaigns and coupons. | 3 | **High** |
| **E1.4.5** | As a **System Administrator**, I want to **create Product Manager accounts**, so that they can manage the catalog and categories. | 3 | **High** |
| **E1.4.6** | As a **System Administrator**, I want to **create System Administrator accounts**, so that they can manage system-wide settings and security. | 3 | **High** |
| **E1.4.7** | As a **System Administrator**, I want to **update staff account details and roles**, so that employee information remains accurate. | 3 | **Medium** |
| **E1.5** | As a **System Administrator**, I want to **assign staff to specific locations**, so that inventory managers only access their branch data. | 3 | **High** |
| **E1.6** | As a **System**, I want to **enforce Role-Based Access Control (RBAC)**, so that users only access authorized features. | 8 | **High** |
| **E1.7** | As a **User**, I want to **reset my password via email**, so that I can recover my account if I forget my credentials. | 5 | **Medium** |
| **E1.8** | As a **Staff Member**, I want to **be forced to change my password on first login**, so that my account is secure. | 3 | **Medium** |
| **E1.9** | As a **System Administrator**, I want to **view and search all customer accounts**, so that I can provide support. | 3 | **Medium** |
| **E1.10** | As a **System Administrator**, I want to **deactivate customer or staff accounts**, so that I can prevent access for specific users. | 2 | **Medium** |
| **E1.11** | As a **System Administrator**, I want to **view login history and security logs**, so that I can monitor for suspicious activity. | 3 | **Low** |
| **E1.12** | As a **Customer**, I want to **manage multiple delivery addresses**, so that I can choose where to receive my orders. | 5 | **Medium** |
| **E1.13** | As a **Customer**, I want to **view and logout from active sessions**, so that I can secure my account. | 5 | **Medium** |

---

## 2. Product Catalog Component (Epic 2)

**Goal:** Manage product data and enable discovery.

| ID | User Story | Estimated Story Points | Priority |
| :--- | :--- | :--- | :--- |
| **E2.1** | As a **Product Manager**, I want to **create and update products**, so that the catalog is accurate and complete. | 5 | **High** |
| **E2.2** | As a **Product Manager**, I want to **upload multiple product images**, so that customers can see what they are buying. | 3 | **High** |
| **E2.3** | As a **Product Manager**, I want to **manage categories (Grade, Subject, Exam)**, so that products are organized logically. | 5 | **High** |
| **E2.4** | As a **Customer**, I want to **search for products by name or SKU**, so that I can find specific items quickly. | 5 | **High** |
| **E2.5** | As a **Customer**, I want to **filter products by Grade, Subject, and Price**, so that I can narrow down my choices. | 5 | **High** |
| **E2.6** | As a **Customer**, I want to **view detailed product information**, so that I can make informed purchase decisions. | 5 | **High** |
| **E2.7** | As a **Customer**, I want to **sort products by price, popularity, and newest**, so that I can find the best options. | 3 | **Medium** |
| **E2.8** | As a **Customer**, I want to **submit reviews and ratings**, so that I can share my feedback. | 3 | **Medium** |
| **E2.9** | As a **Product Manager**, I want to **moderate reviews**, so that I can remove inappropriate content. | 3 | **Low** |
| **E2.10** | As a **Customer**, I want to **see "Related Products"**, so that I can discover similar items. | 5 | **Low** |
| **E2.11** | As a **Product Manager**, I want to **view product analytics (e.g., best sellers)**, so that I can understand sales trends. | 3 | **Low** |
| **E2.12** | As a **Customer**, I want to **mark reviews as helpful**, so that useful feedback is highlighted. | 2 | **Low** |
| **E2.13** | As a **Customer**, I want to **view my recently viewed products**, so that I can easily find items I looked at. | 3 | **Low** |

---

## 3. Order & Transaction Component (Epic 3)

**Goal:** Handle the purchasing flow and financial records.

| ID | User Story | Estimated Story Points | Priority |
| :--- | :--- | :--- | :--- |
| **E3.1** | As a **Customer**, I want to **add items to my shopping cart**, so that I can purchase them later. | 3 | **High** |
| **E3.2** | As a **Customer**, I want to **view and update my cart**, so that I can adjust quantities before checkout. | 3 | **High** |
| **E3.3** | As a **Customer**, I want to **checkout using Cash on Delivery (COD)**, so that I can pay when I receive the order. | 3 | **High** |
| **E3.4** | As a **Customer**, I want to **checkout by uploading a Bank Transfer Slip**, so that I can pay via bank transfer. | 5 | **High** |
| **E3.5** | As a **Guest**, I want to **checkout without an account**, so that I can buy quickly. | 5 | **Medium** |
| **E3.6** | As a **Customer**, I want to **view my order history**, so that I can track past purchases. | 3 | **Medium** |
| **E3.7** | As a **Customer**, I want to **track my order status**, so that I know when it will arrive. | 3 | **High** |
| **E3.8** | As a **System Administrator**, I want to **update order status (e.g., Shipped, Delivered)**, so that customers are informed. | 3 | **High** |
| **E3.9** | As a **Finance Manager**, I want to **view a financial dashboard**, so that I can see real-time revenue. | 5 | **Medium** |
| **E3.10** | As a **Finance Manager**, I want to **generate invoices**, so that I can provide proof of purchase. | 3 | **Medium** |
| **E3.11** | As a **Finance Manager**, I want to **process customer refunds**, so that I can handle returned orders. | 5 | **Low** |
| **E3.13** | As a **Finance Manager**, I want to **manage staff salaries and payments**, so that employees are paid on time. | 5 | **Medium** |
| **E3.14** | As a **Finance Manager**, I want to **process supplier invoices and payments**, so that we maintain good vendor relationships. | 5 | **Medium** |
| **E3.12** | As a **System**, I want to **apply discounts from coupons**, so that the total price reflects promotions. | 5 | **High** |

---

## 4. Supplier Management Component (Epic 4)

**Goal:** Manage suppliers and procurement (Purchase Orders).

| ID | User Story | Estimated Story Points | Priority |
| :--- | :--- | :--- | :--- |
| **E4.1** | As a **Supplier Manager**, I want to **create and update supplier profiles**, so that I have accurate contact info. | 3 | **High** |
| **E4.2** | As a **Supplier Manager**, I want to **create Purchase Orders (POs)**, so that I can restock inventory. | 8 | **High** |
| **E4.3** | As a **Supplier Manager**, I want to **track PO status**, so that I know when stock is arriving. | 5 | **High** |
| **E4.4** | As a **Supplier Manager**, I want to **email POs to suppliers**, so that they receive the order details. | 3 | **Medium** |
| **E4.5** | As a **Supplier Manager**, I want to **link products to suppliers**, so that reordering is easier. | 3 | **Medium** |
| **E4.6** | As a **Supplier Manager**, I want to **manage payment terms**, so that I track credit limits and schedules. | 2 | **Low** |
| **E4.7** | As a **Supplier Manager**, I want to **verify deliveries against POs**, so that I ensure we received what we ordered. | 5 | **High** |

---

## 5. Inventory Management Component (Epic 5)

**Goal:** Track stock across multiple locations (Main, Balangoda, Kottawa).

| ID | User Story | Estimated Story Points | Priority |
| :--- | :--- | :--- | :--- |
| **E5.1** | As a **Location-Specific Inventory Manager**, I want to **view real-time stock levels for my location**, so that I know what is available. | 5 | **High** |
| **E5.2** | As a **Master Inventory Manager**, I want to **view stock across ALL locations**, so that I have a holistic view. | 5 | **High** |
| **E5.3** | As a **Location-Specific Inventory Manager**, I want to **manually adjust stock (damage/loss)**, so that records align with reality. | 3 | **High** |
| **E5.10** | As a **Location-Specific Inventory Manager**, I want to **generate stock movement and valuation reports**, so that I can analyze branch performance. | 5 | **Low** |
| **E5.4** | As a **Location-Specific Inventory Manager**, I want to **request a stock transfer from another branch**, so that I can fulfill local demand. | 5 | **Medium** |
| **E5.5** | As a **Location-Specific Inventory Manager**, I want to **approve incoming transfer requests**, so that I control stock leaving my branch. | 3 | **Medium** |
| **E5.6** | As a **Location-Specific Inventory Manager**, I want to **receive stock from a Purchase Order**, so that inventory counts increase. | 5 | **High** |
| **E5.7** | As a **System Administrator**, I want to **manage warehouse/branch locations**, so that I can expand the business. | 3 | **Low** |
| **E5.8** | As a **System**, I want to **automatically deduct stock on order placement**, so that inventory is always current. | 5 | **High** |
| **E5.9** | As a **Location-Specific Inventory Manager**, I want to **receive low stock alerts**, so that I can reorder before running out. | 3 | **Medium** |

---

## 6. Promotion & Loyalty Component (Epic 6)

**Goal:** Manage marketing campaigns and discounts.

| ID | User Story | Estimated Story Points | Priority |
| :--- | :--- | :--- | :--- |
| **E6.1** | As a **Marketing Manager**, I want to **create discount coupons with rules**, so that I can run sales. | 5 | **High** |
| **E6.2** | As a **Marketing Manager**, I want to **set coupon validity dates**, so that promotions are time-bound. | 2 | **Medium** |
| **E6.3** | As a **Marketing Manager**, I want to **track coupon usage**, so that I can measure campaign success. | 3 | **Medium** |
| **E6.4** | As a **Marketing Manager**, I want to **create and sell Gift Vouchers**, so that customers can give them as gifts. | 5 | **Low** |
| **E6.5** | As a **Marketing Manager**, I want to **run seasonal campaigns**, so that I can boost sales during specific periods. | 5 | **Low** |
| **E6.6** | As a **System**, I want to **validate coupons at checkout**, so that only eligible discounts are applied. | 5 | **High** |
| **E6.7** | As a **Marketing Manager**, I want to **set usage limits for coupons**, so that they are not abused. | 3 | **Medium** |
