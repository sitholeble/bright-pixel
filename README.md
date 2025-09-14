# Bright Pixel - Professional Web Design Services

A modern, responsive website for Bright Pixel, a web design company specializing in affordable, professional websites for small businesses and startups.

## 🚀 Features

- **Modern Tech Stack**: FastAPI backend with React frontend
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Contact Integration**: WhatsApp, email, and phone contact options
- **Portfolio Showcase**: Display of previous work and projects
- **Service Packages**: Clear pricing and service offerings
- **Contact Form**: Functional contact form with backend integration
- **SEO Optimized**: Built with SEO best practices
- **Fast Performance**: Optimized for speed and user experience

## 🏗️ Architecture

### Backend (FastAPI)
- RESTful API endpoints
- CORS enabled for frontend integration
- Pydantic models for data validation
- Sample portfolio and pricing data
- Contact form submission handling

### Frontend (React)
- Modern React with hooks
- Responsive CSS Grid and Flexbox layouts
- Smooth scrolling navigation
- Interactive components with animations
- Mobile-optimized design

## 📁 Project Structure

```
bright-pixel/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## 🌐 API Endpoints

- `GET /` - API information
- `GET /api/company-info` - Company information and contact details
- `GET /api/portfolio` - Portfolio items and projects
- `GET /api/packages` - Service packages and pricing
- `POST /api/contact` - Contact form submission
- `GET /api/health` - Health check endpoint

## 📱 Features Overview

### Homepage
- Hero section with company tagline
- Business statistics and achievements
- Call-to-action buttons

### About Section
- Founder introduction and mission
- Company specialties and features
- Trust indicators and guarantees

### Services
- Three service packages with pricing
- Feature comparisons
- Additional services
- Money-back guarantee

### Portfolio
- Project showcase with mockups
- Technology stack display
- Client type categorization

### Contact
- Multiple contact methods (phone, WhatsApp, email)
- Functional contact form
- Company location and service area

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Gradient Accents**: Beautiful color gradients
- **Smooth Animations**: Framer Motion for interactions
- **Responsive Layout**: Works on all device sizes
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized images and code splitting

## 📞 Contact Information

- **Location**: Cape Town, South Africa
- **Service Area**: Available worldwide
- **Phone**: +27 82 123 4567
- **WhatsApp**: +27 82 123 4567
- **Email**: hello@brightpixel.co.za

## 🔧 Customization

### Company Information
Update the company details in `backend/main.py`:
- Company name and tagline
- Contact information
- Location and service area
- About section content

### Portfolio Items
Modify portfolio data in the `portfolio_items` list in `backend/main.py`

### Service Packages
Update pricing and features in the `service_packages` list in `backend/main.py`

### Styling
Customize colors, fonts, and layout in the CSS files in `frontend/src/components/`

## 🚀 Deployment

### Backend Deployment
- Deploy FastAPI to platforms like Heroku, Railway, or DigitalOcean
- Set up environment variables for production
- Configure CORS for your domain

### Frontend Deployment
- Build the React app: `npm run build`
- Deploy to platforms like Netlify, Vercel, or GitHub Pages
- Configure API endpoints for production

## 📄 License

This project is created for Bright Pixel web design services. All rights reserved.

## 🤝 Support

For support or questions about this website, contact:
- Email: hello@brightpixel.co.za
- WhatsApp: +27 82 123 4567
