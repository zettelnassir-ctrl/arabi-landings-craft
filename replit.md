# Replit.md

## Overview

Talkhisli (تلخيصلي) is an Arabic-language AI-powered educational application designed to help students summarize lectures using artificial intelligence. The application features a modern Arabic-first landing page with RTL (right-to-left) support, built as a full-stack web application with a coming-soon registration system for early access.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom Arabic-optimized design system and RTL support
- **Typography**: Noto Kufi Arabic font for proper Arabic text rendering
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for consistent type safety across the stack
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **API Design**: RESTful API structure with centralized route registration

### Design System
- **Color Palette**: Cyan primary color (188 100% 50%) with neutral grays for Arabic UI aesthetics
- **Layout**: Container-based responsive design with consistent spacing units (4, 8, 12, 16)
- **Components**: Glass morphism effects, gradient backgrounds, and hover states optimized for Arabic content
- **Accessibility**: Proper ARIA labels, semantic HTML structure, and keyboard navigation support

### Application Features
- **Coming Soon Landing**: Hero section with countdown timer, email/phone registration, and feature showcase
- **Registration System**: Contact form supporting both email and phone number collection with validation
- **Arabic Localization**: Full RTL layout support with Arabic-optimized typography and spacing
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for Neon hosting
- **@radix-ui/react-***: Comprehensive suite of unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management and data fetching library
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect support
- **express**: Minimal web application framework for Node.js

### UI and Styling
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe component variant management
- **clsx**: Conditional className utility for dynamic styling
- **lucide-react**: Modern icon library with React components

### Development Tools
- **vite**: Fast build tool with HMR and optimization features
- **typescript**: Static type checking for improved development experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for various schema libraries
- **zod**: TypeScript-first schema validation library

### Database and Session Management
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

The application is configured for deployment on Replit with environment-specific optimizations and includes development tools for enhanced debugging and development experience.