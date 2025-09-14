from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional, List
import uvicorn

app = FastAPI(title="Bright Pixel API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    preferred_contact: Optional[str] = "email"  # email, phone, whatsapp

class PortfolioItem(BaseModel):
    id: int
    title: str
    description: str
    image_url: str
    technologies: List[str]
    client_type: str  # small_business, startup, etc.
    live_url: Optional[str] = None

class ServicePackage(BaseModel):
    id: int
    name: str
    description: str
    price: str  # e.g., "R2,500" or "From R1,500"
    features: List[str]
    popular: bool = False

# Sample data
portfolio_items = [
    PortfolioItem(
        id=1,
        title="Restaurant Website",
        description="Modern, responsive website for a local restaurant with online menu and reservation system.",
        image_url="/api/images/restaurant-website.jpg",
        technologies=["React", "Node.js", "MongoDB"],
        client_type="small_business",
        live_url="https://example-restaurant.com"
    ),
    PortfolioItem(
        id=2,
        title="Startup Landing Page",
        description="Clean, conversion-focused landing page for a tech startup's product launch.",
        image_url="/api/images/startup-landing.jpg",
        technologies=["Next.js", "Tailwind CSS", "Framer Motion"],
        client_type="startup",
        live_url="https://example-startup.com"
    ),
    PortfolioItem(
        id=3,
        title="E-commerce Store",
        description="Full-featured online store with payment integration and inventory management.",
        image_url="/api/images/ecommerce-store.jpg",
        technologies=["React", "FastAPI", "PostgreSQL", "Stripe"],
        client_type="small_business",
        live_url="https://example-store.com"
    )
]

service_packages = [
    ServicePackage(
        id=1,
        name="Starter Website",
        description="Perfect for small businesses getting online for the first time",
        price="From R1,500",
        features=[
            "Up to 5 pages",
            "Responsive design",
            "Contact form",
            "Basic SEO setup",
            "1 month support"
        ]
    ),
    ServicePackage(
        id=2,
        name="Professional Website",
        description="Comprehensive solution for growing businesses",
        price="R3,500",
        features=[
            "Up to 10 pages",
            "Custom design",
            "Content management system",
            "Advanced SEO",
            "Analytics integration",
            "3 months support",
            "WhatsApp integration"
        ],
        popular=True
    ),
    ServicePackage(
        id=3,
        name="E-commerce Website",
        description="Full online store with payment processing",
        price="From R5,500",
        features=[
            "Unlimited products",
            "Payment gateway integration",
            "Inventory management",
            "Order tracking",
            "Customer accounts",
            "6 months support",
            "Mobile app (optional)"
        ]
    )
]

@app.get("/")
async def root():
    return {"message": "Bright Pixel API - Professional Web Design Services"}

@app.get("/api/portfolio")
async def get_portfolio():
    return {"portfolio": portfolio_items}

@app.get("/api/packages")
async def get_packages():
    return {"packages": service_packages}

@app.get("/api/company-info")
async def get_company_info():
    return {
        "name": "Bright Pixel",
        "tagline": "Affordable, professional websites for small businesses and startups",
        "location": "Cape Town, South Africa",
        "service_area": "Available worldwide",
        "contact": {
            "phone": "+27 82 123 4567",
            "whatsapp": "+27 82 123 4567",
            "email": "hello@brightpixel.co.za",
            "website": "https://brightpixel.co.za"
        },
        "about": {
            "founder": "Blessing Sithole",
            "mission": "Making professional web design accessible to small businesses and startups without breaking the bank.",
            "experience": "5+ years in web development and design",
            "specialties": ["React", "FastAPI", "Modern Web Design", "E-commerce", "SEO"]
        }
    }

@app.post("/api/contact")
async def submit_contact_form(contact: ContactForm):
    # In a real application, you would:
    # 1. Save to database
    # 2. Send email notification
    # 3. Send WhatsApp message if preferred
    
    return {
        "message": "Thank you for your message! We'll get back to you within 24 hours.",
        "status": "success",
        "contact_id": f"CONTACT_{hash(contact.email)}"  # Mock ID
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Bright Pixel API"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
