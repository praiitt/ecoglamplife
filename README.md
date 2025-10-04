# Cottage Kalga - Mountain Eco Glamp Life

A beautiful, modern landing page for your mountain-based eco glamp experience. This website showcases the serene beauty of Cottage Kalga, where luxury meets wilderness in the heart of the mountains.

## 🌟 Features

### Design & User Experience
- **Modern, Responsive Design** - Beautiful across all devices
- **Mountain Theme** - Forest green color scheme with warm accents
- **Smooth Animations** - Floating mountains, parallax effects, and smooth transitions
- **Interactive Elements** - Hover effects, ripple buttons, and smooth scrolling

### Sections
1. **Hero Section** - Captivating mountain scene with animated elements
2. **About Section** - Three key features: Eco-Friendly, Home-Cooked Meals, Starry Nights
3. **Experiences Section** - Three unique experiences:
   - Solo Escape
   - Group Adventure  
   - Digital Detox
4. **Gallery Section** - Visual showcase with hover effects
5. **Contact/Enquiry Form** - Comprehensive booking form
6. **Footer** - Contact information and social links

### Technical Features
- **Mobile-First Design** - Responsive navigation with hamburger menu
- **Form Validation** - Client-side validation with user-friendly notifications
- **Local Storage** - Enquiries stored in browser localStorage (ready for Firestore migration)
- **Smooth Scrolling** - Navigation links smoothly scroll to sections
- **Intersection Observer** - Elements animate as they come into view

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No server required - runs entirely in the browser

### Installation
1. Download all files to your project directory
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### File Structure
```
eco_glamp_life/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #2d5a27;      /* Forest green */
    --secondary-color: #8b4513;    /* Brown */
    --accent-color: #f4a261;       /* Warm orange */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #7f8c8d;         /* Light text */
}
```

### Content
- **Text Content**: Edit the HTML file to change text, descriptions, and contact information
- **Images**: Replace the gradient backgrounds in CSS with actual images for a more realistic look
- **Contact Details**: Update phone, email, and address in the contact section

### Form Fields
The enquiry form includes:
- Full Name
- Email Address
- Phone Number
- Experience Type (Solo/Group/Detox)
- Arrival Date
- Number of Guests
- Custom Message

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons and forms
- Optimized layouts for small screens
- Smooth mobile interactions

## 🔧 Technical Details

### Browser Storage
- Enquiries are stored in `localStorage` under the key `cottageKalgaEnquiries`
- Data structure includes all form fields plus timestamp and status
- Ready for easy migration to Firestore or other backend services

### Performance
- Optimized CSS with efficient selectors
- Minimal JavaScript for smooth performance
- Lazy loading animations using Intersection Observer
- Efficient event handling and memory management

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text ready for images
- Keyboard navigation support
- Screen reader friendly

## 🚀 Future Enhancements

### Easy to Add
- **Real Images**: Replace gradient backgrounds with actual photos
- **Booking Calendar**: Integrate a date picker for availability
- **Payment Integration**: Add payment processing for bookings
- **Multi-language Support**: Add language switcher
- **Blog Section**: Add travel stories and mountain experiences

### Backend Integration
- **Firestore**: Easy migration from localStorage
- **Email Service**: Connect form to email service (SendGrid, Mailgun)
- **Admin Panel**: Dashboard to manage enquiries and bookings
- **Real-time Updates**: Live availability and pricing

## 📞 Support

For technical support or customization requests:
- Email: rijumajumder7@gmail.com
- Phone: +91 9163563763

## 📄 License

This project is created for Cottage Kalga. Feel free to modify and use for your own mountain retreat business.

---

**Cottage Kalga** - Where luxury meets wilderness in the heart of the mountains. 🏔️✨
# ecoglamplife
