# Methsara Publications Webstore - Project Structure

## 📁 Folder Organization

```
methsara-publications-webstore/
│
├── 📂 docs/                          # All documentation
│   ├── 📂 sprint-0/                  # Sprint 0 deliverables
│   │   ├── README.md                 # Sprint 0 overview
│   │   ├── Complete_Product_Backlog.md
│   │   ├── Epic_Structure_Summary.md
│   │   └── Sprint_0_Checklist.md
│   │
│   ├── 📂 guides/                    # How-to guides
│   │   ├── Jira_Quick_Start.md
│   │   ├── Assignment_Guide.md
│   │   └── Product_Backlog_Guide.md
│   │
│   ├── 📂 planning/                  # Project planning docs
│   │   ├── AGILE_PLAN.md
│   │   ├── GIT_WORKFLOW.md
│   │   └── VIVA_CONTRIBUTION_MAP.md
│   │
│   └── 📂 presentations/             # Presentation materials
│       └── Sprint_0_Presentation_Guide.pdf
│
├── 📂 Week 01/                       # Week 1 submissions
│   └── (existing files)
│
├── 📂 Week 02/                       # Week 2 submissions
│   └── (existing files)
│
├── 📂 src/                           # Source code (to be created)
│   ├── 📂 frontend/                  # React frontend
│   ├── 📂 backend/                   # Node.js/Express backend
│   └── 📂 database/                  # MongoDB schemas
│
├── 📂 tests/                         # Test files (to be created)
│   ├── 📂 unit/
│   ├── 📂 integration/
│   └── 📂 e2e/
│
├── 📂 config/                        # Configuration files (to be created)
│   ├── .env.example
│   └── database.config.js
│
├── .git/                             # Git repository
├── .gitignore                        # Git ignore file
└── README.md                         # Main project README
```

## 📋 Recommended Organization

### Current Files to Move:

**From Root → docs/planning/**
- AGILE_PLAN.md
- GIT_WORKFLOW.md
- VIVA_CONTRIBUTION_MAP.md

**From Week 02 → docs/sprint-0/**
- Complete_Product_Backlog.md
- README.md (rename to Sprint_0_Overview.md)

**From Week 02 → docs/guides/**
- Jira_Quick_Start.md
- Assignment_Guide.md
- Product_Backlog_Guide.md

**From Week 02 → docs/presentations/**
- IE2091_Sprint_0_Presentation_Guide.pdf
- 2026-S2-IE2091-Practical 2.pdf

## 🎯 Benefits of This Structure:

1. **Clear Separation**: Documentation vs. Code vs. Tests
2. **Easy Navigation**: Find files by category
3. **Scalability**: Easy to add new sprints/features
4. **Professional**: Industry-standard structure
5. **Git-Friendly**: Clean commit history

## 📝 Next Steps:

1. Create folder structure
2. Move files to appropriate locations
3. Update file references in documentation
4. Commit organized structure to Git

---

**Note**: This structure follows MERN stack best practices and Agile project organization standards.
