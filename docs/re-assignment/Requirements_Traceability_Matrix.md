# Requirements Traceability Matrix (RTM)

**Project:** Methsara Publications Webstore  
**Purpose:** Map stakeholders to requirements, user stories, and test cases

---

## RTM Structure

This Requirements Traceability Matrix provides bidirectional traceability between:
- **Stakeholders** → Requirements → User Stories → Test Cases
- Ensuring all stakeholder needs are addressed
- Verifying all requirements are implemented
- Confirming all implementations are tested

---

## Epic 1: User & Admin Management Component

| Stakeholder | Requirement ID | User Story ID | Test Case ID | Verification Method |
|-------------|---------------|---------------|--------------|---------------------|
| Students, Parents, Teachers | FR1.1 | E1.1 | TC-001 | Automated: Unit test for registration API, Integration test for email verification |
| All Users | FR1.2 | E1.2 | TC-002 | Automated: Unit test for authentication, Security test for session management |
| Students, Parents, Teachers | FR1.3 | E1.3 | TC-003 | Automated: Integration test for profile update API |
| System Administrator | FR1.4 | E1.4, E1.4.1-E1.4.6 | TC-004 | Automated: Unit tests for each role creation, Manual: Admin panel testing |
| System Administrator | FR1.5 | E1.5 | TC-005 | Automated: Integration test for location assignment |
| System Administrator | FR1.6 | E1.6 | TC-006 | Automated: Security tests for RBAC enforcement across all endpoints |
| All Users | FR1.7 | E1.7 | TC-007 | Automated: Integration test for password reset flow, Email verification test |
| Staff Members | FR1.8 | E1.8 | TC-008 | Automated: Integration test for forced password change on first login |
| System Administrator | FR1.9 | E1.9 | TC-009 | Manual: Admin panel search functionality testing |
| System Administrator | FR1.10 | E1.10 | TC-010 | Automated: Unit test for account deactivation, Manual: Verify access denial |
| System Administrator | FR1.11 | E1.11 | TC-011 | Manual: Security log review and audit trail verification |
| Students, Parents, Teachers | FR1.12 | E1.12 | TC-012 | Automated: Integration test for multiple address management |
| Students, Parents, Teachers | FR1.13 | E1.13 | TC-013 | Automated: Integration test for session management and logout |
| System Administrator | NFR2.1 | - | TC-014 | Automated: Security test to verify password hashing |
| All Users | NFR2.2 | - | TC-015 | Automated: Security scan for HTTPS enforcement |
| All Users | NFR2.3 | - | TC-016 | Automated: Session timeout test |
| All Users | NFR2.4 | - | TC-017 | Automated: Account lockout test after failed attempts |

---

## Epic 2: Product Catalog Component

| Stakeholder | Requirement ID | User Story ID | Test Case ID | Verification Method |
|-------------|---------------|---------------|--------------|---------------------|
| Product Manager | FR2.1 | E2.1 | TC-018 | Automated: CRUD operation tests for products |
| Product Manager | FR2.2 | E2.2 | TC-019 | Automated: File upload test, Manual: Image display verification |
| Product Manager | FR2.3 | E2.3 | TC-020 | Automated: Category management CRUD tests |
| Students, Parents, Teachers | FR2.4 | E2.4 | TC-021 | Automated: Search functionality tests with various queries |
| Students, Parents, Teachers | FR2.5 | E2.5 | TC-022 | Automated: Filter functionality tests for all filter combinations |
| Students, Parents, Teachers | FR2.6 | E2.6 | TC-023 | Manual: Product detail page display verification |
| Students, Parents, Teachers | FR2.7 | E2.7 | TC-024 | Automated: Sorting functionality tests |
| Students, Parents, Teachers | FR2.8 | E2.8 | TC-025 | Automated: Review submission API test, Manual: Review display verification |
| Product Manager | FR2.9 | E2.9 | TC-026 | Manual: Review moderation workflow testing |
| Students, Parents, Teachers | FR2.10 | E2.10 | TC-027 | Automated: Related products algorithm test |
| Product Manager | FR2.11 | E2.11 | TC-028 | Manual: Analytics dashboard verification |
| Students, Parents, Teachers | FR2.12 | E2.12 | TC-029 | Automated: Review helpfulness voting test |
| Students, Parents, Teachers | FR2.13 | E2.13 | TC-030 | Automated: Recently viewed tracking test |
| All Users | NFR1.1 | - | TC-031 | Automated: Performance test for search response time |
| All Users | NFR1.3 | - | TC-032 | Automated: Image load time performance test |

---

## Epic 3: Order & Transaction Component

| Stakeholder | Requirement ID | User Story ID | Test Case ID | Verification Method |
|-------------|---------------|---------------|--------------|---------------------|
| Students, Parents, Teachers | FR3.1 | E3.1 | TC-033 | Automated: Add to cart API test |
| Students, Parents, Teachers | FR3.2 | E3.2 | TC-034 | Automated: Cart update and removal tests |
| Students, Parents, Teachers | FR3.3 | E3.3 | TC-035 | Automated: COD checkout flow test, Manual: End-to-end order placement |
| Students, Parents, Teachers | FR3.4 | E3.4 | TC-036 | Automated: Bank slip upload test, Manual: File storage verification |
| Students, Parents, Teachers | FR3.5 | E3.5 | TC-037 | Automated: Guest checkout flow test |
| Students, Parents, Teachers | FR3.6 | E3.6 | TC-038 | Automated: Order history retrieval test |
| Students, Parents, Teachers | FR3.7 | E3.7 | TC-039 | Automated: Order tracking API test, Manual: Status display verification |
| System Administrator | FR3.8 | E3.8 | TC-040 | Automated: Order status update test, Manual: Customer notification verification |
| Finance Manager | FR3.9 | E3.9 | TC-041 | Manual: Financial dashboard accuracy verification |
| Finance Manager | FR3.10 | E3.10 | TC-042 | Automated: Invoice generation test, Manual: Invoice format verification |
| Finance Manager | FR3.11 | E3.11 | TC-043 | Automated: Refund processing test, Manual: Payment reversal verification |
| Students, Parents, Teachers | FR3.12 | E3.12 | TC-044 | Automated: Coupon application and discount calculation test |
| Finance Manager | FR3.13 | E3.13 | TC-045 | Manual: Salary payment workflow testing |
| Finance Manager | FR3.14 | E3.14 | TC-046 | Manual: Supplier payment processing testing |
| All Users | NFR1.4 | - | TC-047 | Automated: Checkout transaction performance test |
| All Users | NFR2.6 | - | TC-048 | Automated: Bank slip file access control test |

---

## Epic 4: Supplier Management Component

| Stakeholder | Requirement ID | User Story ID | Test Case ID | Verification Method |
|-------------|---------------|---------------|--------------|---------------------|
| Supplier Manager | FR4.1 | E4.1 | TC-049 | Automated: Supplier CRUD operation tests |
| Supplier Manager | FR4.2 | E4.2 | TC-050 | Automated: PO creation test, Manual: PO calculation verification |
| Supplier Manager | FR4.3 | E4.3 | TC-051 | Automated: PO status tracking test |
| Supplier Manager | FR4.4 | E4.4 | TC-052 | Automated: Email sending test, Manual: Email content verification |
| Supplier Manager | FR4.5 | E4.5 | TC-053 | Automated: Product-supplier linking test |
| Supplier Manager | FR4.6 | E4.6 | TC-054 | Manual: Payment terms management testing |
| Supplier Manager | FR4.7 | E4.7 | TC-055 | Automated: Delivery verification test, Manual: PO completion workflow |

---

## Epic 5: Inventory Management Component

| Stakeholder | Requirement ID | User Story ID | Test Case ID | Verification Method |
|-------------|---------------|---------------|--------------|---------------------|
| Location-Specific Inventory Managers | FR5.1 | E5.1 | TC-056 | Automated: Stock level retrieval test with location filter |
| Master Inventory Manager | FR5.2 | E5.2 | TC-057 | Automated: Multi-location stock aggregation test |
| Location-Specific Inventory Managers | FR5.3 | E5.3 | TC-058 | Automated: Stock adjustment test, Manual: Audit trail verification |
| Location-Specific Inventory Managers | FR5.4 | E5.4 | TC-059 | Automated: Transfer request creation test |
| Location-Specific Inventory Managers | FR5.5 | E5.5 | TC-060 | Automated: Transfer approval workflow test |
| Location-Specific Inventory Managers | FR5.6 | E5.6 | TC-061 | Automated: Stock receipt from PO test |
| System Administrator | FR5.7 | E5.7 | TC-062 | Manual: Location management testing |
| System | FR5.8 | E5.8 | TC-063 | Automated: Automatic stock deduction test, Concurrency test for overselling prevention |
| Location-Specific Inventory Managers | FR5.9 | E5.9 | TC-064 | Automated: Low stock alert trigger test |
| Location-Specific Inventory Managers | FR5.10 | E5.10 | TC-065 | Manual: Stock report generation and accuracy verification |

---

## Epic 6: Promotion & Loyalty Component

| Stakeholder | Requirement ID | User Story ID | Test Case ID | Verification Method |
|-------------|---------------|---------------|--------------|---------------------|
| Marketing Manager | FR6.1 | E6.1 | TC-066 | Automated: Coupon creation with rules test |
| Marketing Manager | FR6.2 | E6.2 | TC-067 | Automated: Coupon validity date enforcement test |
| Marketing Manager | FR6.3 | E6.3 | TC-068 | Manual: Coupon usage analytics verification |
| Marketing Manager | FR6.4 | E6.4 | TC-069 | Automated: Gift voucher creation and redemption test |
| Marketing Manager | FR6.5 | E6.5 | TC-070 | Manual: Campaign management workflow testing |
| System | FR6.6 | E6.6 | TC-071 | Automated: Coupon validation test (all rules: date, min spend, usage limits) |
| Marketing Manager | FR6.7 | E6.7 | TC-072 | Automated: Usage limit enforcement test |

---

## Non-Functional Requirements Traceability

| NFR Category | Requirement ID | Test Case ID | Verification Method | Success Criteria |
|--------------|---------------|--------------|---------------------|------------------|
| Performance | NFR1.1 | TC-031 | Automated: Load testing with JMeter/K6 | 95% of searches < 500ms |
| Performance | NFR1.2 | TC-073 | Automated: Concurrent user load test | 500 concurrent users, response time maintained |
| Performance | NFR1.3 | TC-032 | Automated: Image load performance test | 90% of images < 2s |
| Performance | NFR1.4 | TC-047 | Automated: Transaction performance test | Checkout < 3s |
| Security | NFR2.1 | TC-014 | Automated: Password storage inspection | 100% hashed passwords |
| Security | NFR2.2 | TC-015 | Automated: SSL/TLS scan | All endpoints HTTPS |
| Security | NFR2.3 | TC-016 | Automated: Session timeout test | 30 min idle timeout |
| Security | NFR2.4 | TC-017 | Automated: Account lockout test | Lockout at 5 failures |
| Security | NFR2.5 | TC-074 | Manual: Audit log review | All critical ops logged |
| Security | NFR2.6 | TC-048 | Automated: File access control test | RBAC enforced |
| Usability | NFR3.1 | TC-075 | Manual: Responsive design testing | 320px-1920px support |
| Usability | NFR3.2 | TC-076 | Manual: Language toggle testing | English/Sinhala available |
| Usability | NFR3.3 | TC-077 | Manual: User testing session | 80% complete purchase in 5 min |
| Usability | NFR3.4 | TC-078 | Manual: Error message review | Clear, actionable errors |
| Reliability | NFR4.1 | TC-079 | Automated: Uptime monitoring | 99.5% uptime |
| Reliability | NFR4.2 | TC-080 | Automated: Backup verification | Daily backup success |
| Reliability | NFR4.3 | TC-081 | Manual: Disaster recovery drill | MTTR < 1 hour |
| Scalability | NFR5.1 | TC-082 | Manual: New location addition test | No code changes required |
| Scalability | NFR5.2 | TC-083 | Automated: Catalog size performance test | 3x catalog, performance maintained |
| Maintainability | NFR6.1 | TC-084 | Manual: Code review | 90% compliance |
| Maintainability | NFR6.2 | TC-085 | Manual: API documentation review | All endpoints documented |
| Maintainability | NFR6.3 | TC-086 | Manual: Architecture review | Component boundaries clear |
| Compliance | NFR7.1 | TC-087 | Manual: Legal compliance review | Regulations met |
| Compliance | NFR7.2 | TC-088 | Manual: Records retention audit | 7-year retention enforced |

---

## Stakeholder Coverage Summary

| Stakeholder | Requirements Covered | User Stories | Test Cases |
|-------------|---------------------|--------------|------------|
| Students, Parents, Teachers | FR1.1-1.3, FR1.12-1.13, FR2.4-2.8, FR2.10, FR2.12-2.13, FR3.1-3.7, FR3.12 | 21 | 24 |
| System Administrator | FR1.4-1.6, FR1.9-1.11, FR3.8, FR5.7 | 13 | 14 |
| Master Inventory Manager | FR5.2 | 1 | 1 |
| Location-Specific Inventory Managers | FR5.1, FR5.3-5.6, FR5.9-5.10 | 7 | 7 |
| Product Manager | FR2.1-2.3, FR2.9, FR2.11 | 5 | 5 |
| Marketing Manager | FR6.1-6.7 | 7 | 7 |
| Finance Manager | FR3.9-3.11, FR3.13-3.14 | 5 | 5 |
| Supplier Manager | FR4.1-4.7 | 7 | 7 |
| Staff Members | FR1.8 | 1 | 1 |
| System (Automated) | FR1.6, FR3.12, FR5.8, FR6.6 | 4 | 4 |

**Total Requirements:** 67 Functional + 21 Non-Functional = **88 Requirements**  
**Total User Stories:** 67  
**Total Test Cases:** 88  
**Coverage:** 100%

---

## Traceability Verification

✅ **Forward Traceability:** All stakeholder needs → Requirements → User Stories → Test Cases  
✅ **Backward Traceability:** All Test Cases → User Stories → Requirements → Stakeholders  
✅ **Coverage Completeness:** Every requirement has at least one test case  
✅ **Stakeholder Satisfaction:** All stakeholder concerns addressed

---

**Document Version:** 1.0  
**Last Updated:** February 12, 2026  
**Purpose:** Requirements traceability for RE Assignment 1
