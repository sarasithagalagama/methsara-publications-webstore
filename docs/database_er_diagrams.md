# Database ER Diagrams

Here are the PlantUML diagrams for the Methsara Publications Webstore project database. I've provided two versions: 
1. **Academic Chen ER Diagram** (as requested, highlighting entities, relationships, and key attributes).
2. **Standard ER Diagram (Crow's Foot)** (which is more practical for viewing all fields and data types).

## 1. Chen ER Diagram (Academic Notation)
In academic contexts (like an IT project viva), Chen notation is often requested. PlantUML doesn't have a built-in "Chen" template, but we can recreate it using basic shapes (`rectangle` for entities, `diamond` for relationships, and `usecase` (ellipse) for attributes).

> **Note:** To keep the diagram readable, only primary keys and major attributes are shown. Adding all 100+ attributes would make a Chen diagram completely unreadable.

```plantuml
@startuml
skinparam handwritten false
skinparam defaultFontName Arial
left to right direction

' --- Entities ---
rectangle "User" as User
rectangle "Product" as Product
rectangle "Category" as Category
rectangle "Order" as Order
rectangle "Supplier" as Supplier
rectangle "PurchaseOrder" as PO
rectangle "Inventory" as Inventory
rectangle "Location" as Location
rectangle "Review" as Review

' --- Relationships ---
hexagon "places" as R_Places
hexagon "contains" as R_Contains
hexagon "categorizes" as R_Categorizes
hexagon "writes" as R_Writes
hexagon "receives" as R_Receives
hexagon "receives_po" as R_Supplies
hexagon "includes" as R_Includes
hexagon "stores" as R_Stores
hexagon "stocked_in" as R_Stocked

' --- Connections (Multiplicities) ---
User "1" -- "N" R_Places
R_Places -- "N" Order

Order "N" -- "M" R_Contains
R_Contains -- "N" Product

Category "1" -- "N" R_Categorizes
R_Categorizes -- "N" Product

User "1" -- "N" R_Writes
R_Writes -- "N" Review

Product "1" -- "N" R_Receives
R_Receives -- "N" Review

Supplier "1" -- "N" R_Supplies
R_Supplies -- "N" PO

PO "N" -- "M" R_Includes
R_Includes -- "N" Product

Location "1" -- "N" R_Stores
R_Stores -- "N" Inventory

Product "1" -- "N" R_Stocked
R_Stocked -- "N" Inventory

' --- Key Attributes ---
usecase "UserID" as a_uid
usecase "Email" as a_uemail
User -- a_uid
User -- a_uemail

usecase "ProductID" as a_pid
usecase "ISBN" as a_isbn
Product -- a_pid
Product -- a_isbn

usecase "OrderID" as a_oid
usecase "Total" as a_ototal
Order -- a_oid
Order -- a_ototal

usecase "SupplierID" as a_sid
Supplier -- a_sid

usecase "PONumber" as a_pon
PO -- a_pon

usecase "LocID" as a_lid
Location -- a_lid

@enduml
```

## 2. Standard ER Diagram (Crow's Foot Notation)
This is the industry-standard way to represent a database schema in PlantUML. It includes all major entities, their fields, and accurate multiplicity relationships (1-to-many, many-to-many, etc.).

```plantuml
@startuml
hide circle
skinparam linetype ortho

entity "User" as User {
  * _id : ObjectId
  --
  * name : String
  * email : String
  * password : String
  phone : String
  userType : String
  role : String
  assignedLocation : String
  nic : String
  isActive : Boolean
}

entity "Product" as Product {
  * _id : ObjectId
  --
  * title : String
  * author : String
  * isbn : String
  * price : Number
  * category : String
  * grade : String
  * subject : String
  stock : Number
  averageRating : Number
  isActive : Boolean
}

entity "Category" as Category {
  * _id : ObjectId
  --
  * name : String
  slug : String
  type : String
  parent : ObjectId
}

entity "Order" as Order {
  * _id : ObjectId
  --
  customer : ObjectId
  subtotal : Number
  total : Number
  orderStatus : String
  paymentMethod : String
  fulfillmentLocation : String
}

entity "Supplier" as Supplier {
  * _id : ObjectId
  --
  * name : String
  * contactPerson : String
  * email : String
  * phone : String
  category : String
}

entity "PurchaseOrder" as PO {
  * _id : ObjectId
  --
  * poNumber : String
  supplier : ObjectId
  totalAmount : Number
  status : String
  paymentStatus : String
}

entity "Inventory" as Inventory {
  * _id : ObjectId
  --
  * product : ObjectId
  * location : String
  * quantity : Number
  availableQuantity : Number
}

entity "Location" as Location {
  * _id : ObjectId
  --
  * name : String
  * address : String
  manager : ObjectId
  isMainWarehouse : Boolean
}

entity "StockTransfer" as StockTransfer {
  * _id : ObjectId
  --
  * transferNumber : String
  * product : ObjectId
  * fromLocation : String
  * toLocation : String
  * quantity : Number
  status : String
}

entity "FinancialTransaction" as FinTransaction {
  * _id : ObjectId
  --
  * type : String
  * amount : Number
  status : String
  date : Date
}

entity "Campaign" as Campaign {
  * _id : ObjectId
  --
  * name : String
  * type : String
  * discountType : String
  * discountValue : Number
}

entity "Coupon" as Coupon {
  * _id : ObjectId
  --
  * code : String
  * discountType : String
  * discountValue : Number
}

entity "GiftVoucher" as GiftVoucher {
  * _id : ObjectId
  --
  * code : String
  * value : Number
  balance : Number
  expiryDate : Date
}

entity "Review" as Review {
  * _id : ObjectId
  --
  * product : ObjectId
  * user : ObjectId
  * rating : Number
  * comment : String
}

entity "Cart" as Cart {
  * _id : ObjectId
  --
  * user : ObjectId
  totalAmount : Number
}

' Relationships
User ||--o{ Order : places
User ||--o{ Review : writes
User ||--|| Cart : owns
Category ||--|{ Product : categorizes
Product ||--o{ Review : receives
Product ||--o{ Inventory : stocks
Order ||--|{ Product : contains
Supplier ||--o{ PO : receives
PO ||--|{ Product : includes
Location ||--o{ Inventory : stores
StockTransfer }o--|| Product : transfers
User ||--o{ FinTransaction : processes
Campaign }o--o{ Product : promotes
Coupon ||--o{ Order : applies_to
GiftVoucher ||--o{ Order : pays_for
@enduml
```
