# QxLabs Blockchain App Template

A modern, production-ready Next.js template featuring tRPC, Supabase, and a custom quantum-inspired design system. Perfect for building high-performance blockchain applications or any modern web application requiring authentication, database integration, and a stunning UI.

## Features

### 🎨 Design System
- **Quantum-inspired UI components** with custom animations and effects
- **Dark mode optimized** with carefully crafted color palette
- **Responsive design** that works beautifully on all devices
- **Custom components**: QuantumButton, QuantumCard, QuantumText, MatrixBackground, and more
- **shadcn/ui integration** for consistent, accessible components

### 🔧 Tech Stack
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **tRPC** for end-to-end type-safe APIs
- **Supabase** for authentication and database
- **Tailwind CSS** for styling
- **React Query** for data fetching and caching

### 🔐 Authentication
- Email/password authentication with Supabase
- Protected routes and middleware
- Password reset functionality
- Session management

### 📊 Database Integration
- Supabase PostgreSQL database
- Type-safe database queries
- Row Level Security (RLS) ready
- Example project management schema

### 🚀 Developer Experience
- Hot reload and fast refresh
- Type-safe API routes with tRPC
- Automatic type generation from database schema
- ESLint and TypeScript configured

## Demo Mode

This template can be explored **without setting up environment variables**. When environment variables are not configured, the app runs in demo mode with:
- Mock authentication (explore UI without real login)
- Sample data for demonstration
- Full navigation and UI exploration
- Informational banners indicating demo mode

## Quick Start

### 1. Clone or Download

\`\`\`bash
# If using the v0 CLI
npx v0 add [template-id]

# Or download the ZIP and extract
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### 3. Run in Demo Mode (Optional)

You can immediately run the app to explore the UI:

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the template in action. The app will run in demo mode, allowing you to explore all pages and components.

### 4. Set Up for Production

To enable full functionality with real authentication and database:

#### A. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > API
4. Copy your project URL and anon key

#### B. Configure Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

For production deployment, update `NEXT_PUBLIC_SITE_URL` to your actual domain.

#### C. Set Up Database Schema

Run the SQL scripts in the `scripts/sql` directory in your Supabase SQL editor:

1. `001_initial_schema.sql` - Creates the projects table
2. `002_enable_rls.sql` - Enables Row Level Security

Or use the Supabase CLI:

\`\`\`bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
\`\`\`

#### D. Run the App

\`\`\`bash
npm run dev
\`\`\`

The app will now use real authentication and database functionality.

## Project Structure

\`\`\`
├── app/                      # Next.js app directory
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── (protected)/         # Protected routes (require auth)
│   │   ├── dashboard/
│   │   └── projects/
│   ├── api/                 # API routes
│   │   └── trpc/           # tRPC endpoints
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── ui-extensions/      # Custom quantum components
│   └── layout/             # Layout components
├── server/                  # Server-side code
│   ├── routers/            # tRPC routers
│   └── trpc.ts             # tRPC configuration
├── utils/                   # Utility functions
│   ├── supabase/           # Supabase clients
│   └── trpc.ts             # tRPC client
├── actions/                 # Server actions
├── providers/               # React providers
├── types/                   # TypeScript types
└── scripts/                 # Database scripts
\`\`\`

## Key Components

### Quantum UI Components

Located in `components/ui-extensions/`:

- **QuantumButton** - Animated button with glow effects
- **QuantumCard** - Card with quantum-themed styling
- **QuantumText** - Gradient text with quantum effects
- **MatrixBackground** - Animated matrix-style background
- **HexContainer** - Hexagonal container component

### Authentication Flow

1. User signs up/logs in via Supabase Auth
2. Middleware checks authentication status
3. Protected routes redirect to login if not authenticated
4. Session is maintained across page loads

### tRPC API

Example router in `server/routers/project.ts`:

\`\`\`typescript
export const projectRouter = router({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    // Type-safe database query
    return await ctx.supabase.from("projects").select("*")
  }),
  // ... more procedures
})
\`\`\`

## Customization

### Theming

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
:root {
  --quantum: 210 100% 59%;        /* Primary quantum color */
  --quantum-highlight: 210 100% 75%;
  /* ... more variables */
}
\`\`\`

### Adding New Routes

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. For protected routes, place in `app/(protected)/`

### Adding tRPC Procedures

1. Create a new router in `server/routers/`
2. Add to `server/routers/_app.ts`
3. Use in components with `trpc.yourRouter.yourProcedure.useQuery()`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy

### Other Platforms

This template works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes* | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes* | Your Supabase anonymous key |
| `NEXT_PUBLIC_SITE_URL` | Yes* | Your site URL (for auth redirects) |

*Required for production. Optional for demo mode.

## Troubleshooting

### "Invalid API key" error
- Verify your Supabase credentials in `.env.local`
- Ensure you're using the anon key, not the service role key

### Authentication not working
- Check that `NEXT_PUBLIC_SITE_URL` matches your current URL
- Verify Supabase email settings are configured
- Check browser console for errors

### Database queries failing
- Ensure RLS policies are set up correctly
- Verify your database schema matches the types
- Check Supabase logs for detailed errors

## Contributing

This template is designed to be a starting point. Feel free to:
- Add new features
- Customize the design
- Extend the database schema
- Share improvements with the community

## License

MIT License - feel free to use this template for any project.

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Credits

Built with modern web technologies and inspired by quantum computing aesthetics. Perfect for blockchain applications, SaaS products, or any modern web application.
