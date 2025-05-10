# React TypeScript Application

A modern React application built with TypeScript, Vite, and Tailwind CSS.

## Project Description

This project is a simulation game interface where two teams negotiate on various terms. The application features a component-based architecture with emphasis on visual design and user experience.

Key features include:
- **Team Negotiation Interface**: Team 1 inputs term values, while Team 2 can only view these values
- **Interactive Components**: 
  - Sidebar with modal windows for video and text content
  - Functional timer that counts forward
  - First-time guidance accordion with instructional text
  - Six interactive input fields with TBD/OK toggle functionality
- **Dynamic Calculations**: Real-time updates to valuation and pie chart based on EBITDA, Multiple, and interest rate inputs
- **Role-Based Permissions**: Team 1 can modify input values, while Team 2 can toggle between TBD and OK states
- **Responsive Design**: Works across multiple device sizes
- **Modern UI Components**: Built with Radix UI primitives
- **Type-Safe Development**: Implemented with TypeScript

## Prerequisites

- Node.js (version 22)
- yarn

## Getting Started

Follow these steps to set up and run the project locally:

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd assignment
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

### Development

To run the development server:

```bash
yarn dev
```

This will start the Vite development server at `http://localhost:5173` (default).

### Accessing the Application

Once the development server is running, you can access the application in your web browser:

- Development mode: `http://localhost:5173`
- Production preview: `http://localhost:4173` (when using the preview command)

You can customize the port by setting the `PORT` environment variable:
```bash
# For development
PORT=3000 yarn dev

# For preview
PORT=8080 yarn preview
```

### Building for Production

To create a production build:

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
yarn preview
```

## Available Scripts

- `dev` - Start the development server
- `build` - Create a production build
- `preview` - Preview the production build
- `lint` - Run ESLint for code linting
- `format` - Run Prettier to format code
- `check-types` - Run TypeScript type checking
- `check-format` - Check code formatting
- `check-lint` - Check code linting
- `test-all` - Run all checks (format, lint, types)

## Project Structure

```
src/
├── app/              # Application-specific files
├── components/       # Reusable UI components
├── lib/              # Utility functions and helpers
├── pages/            # Page components
├── main.tsx          # Application entry point
└── global.type.d.ts  # Global TypeScript type definitions
```

## Technologies Used

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Recharts](https://recharts.org/)

## Code Quality Tools

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- TypeScript strict mode
