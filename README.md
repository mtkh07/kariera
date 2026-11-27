# Kariera

A job and internship search platform that connects recruiters and candidates.
End-of-module project for **Développement digital**.- Academic year: 2026/2027

## Features

- Browse internship and job offers
- Search by domain and location
- Filter by contract type (Initiation, PFA, PFE internships, CDI, CDD, Freelance)
- Application form with validation
- Favorite offers (saved in the browser)

> Status: 🚧 In progress

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla, DOM manipulation)
- localStorage for favorites and applications
- Git and GitHub for teamwork

## Project structure

```
kariera/
├── index.html        # offers list, search, filters
├── favorites.html    # favorite offers
├── apply.html        # application form
├── css/
│   └── style.css
└── js/
    ├── data.js       # offers data
    ├── app.js        # display, search, filters
    ├── favorites.js  # favorites logic
    └── apply.js      # form validation and saving
```

## How to run

1. Clone the repository:
   ```
   git clone https://github.com/mtkh07/kariera.git
   ```
2. Open the folder and double-click `index.html`
   (or use the Live Server extension in VS Code).

No installation or server is needed.

## Team

| Member                 | Responsibilities                |
| ---------------------- | ------------------------------- |
| KHARBOUCH Mohamed Taha | Offers display, search, filters |
| SABBANI Yahia          | Favorites, application form     |
