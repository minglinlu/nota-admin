# Nota Admin - Page Builder

Visual drag-and-drop page builder for managing Nota multi-tenant restaurant websites.

## 🎯 Overview

Nota Admin is a React-based administration interface that allows you to visually build and edit pages for your restaurant storefronts using Craft.js. Build pages by dragging and dropping components, then export the craftState as base64 to use in your storefront.

## ✨ Features

- **Dashboard**: Overview of all restaurant sites
- **Drag-and-Drop Editor**: Visual page builder powered by Craft.js
- **10 Components**: Basic, Layout, and F&B components
- **Save/Load**: Persist your work in localStorage
- **Export Base64**: Export craftState for use in nota-storefront
- **3 Mock Sites**: Pre-configured demo restaurants
- **Shared Components**: Uses nota-components submodule

## 🏗️ Architecture

```
nota-admin/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   └── SiteCard.jsx          # Site selection cards
│   │   └── editor/
│   │       ├── Canvas.jsx            # Drag-and-drop canvas
│   │       ├── Toolbox.jsx           # Component library
│   │       └── Toolbar.jsx           # Save/Export actions
│   ├── pages/
│   │   ├── Dashboard.jsx             # Main landing page
│   │   └── Editor.jsx                # Page builder
│   ├── data/
│   │   └── mock-sites.json           # 3 demo restaurants
│   ├── lib/
│   │   └── resolver.js               # Craft.js component resolver
│   └── shared/craft/                 # Git submodule (nota-components)
│       ├── components/               # 10 craft components
│       └── lib/                      # Base64 utilities
├── dist/                             # Production build
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Initialize submodule (nota-components)
git submodule update --init --recursive

# Start development server
npm run dev

# Build for production
npm run build
```

### Usage

1. **Select a Site**: Choose from cafe-delights, bella-trattoria, or sushi-zen
2. **Drag Components**: Drag components from the left sidebar onto the canvas
3. **Edit Properties**: Click components to edit their properties
4. **Save Work**: Click "Save" to store in localStorage
5. **Export**: Click "Export Base64" to get the craftState string
6. **Use in Storefront**: Paste the base64 string into nota-storefront's mock-tenants.json

## 📦 Available Components

### Basic Components
- **Container** 📦 - Layout container with padding/styling
- **Text** 📝 - Typography with customizable styles
- **Button** 🔘 - Interactive button with variants
- **Image** 🖼️ - Platform-agnostic image display

### Layout Components
- **Flex** ↔️ - Flexbox container
- **Grid** ▦ - CSS Grid layout
- **Columns** ||| - Multi-column responsive layout

### F&B Components
- **Menu** 📋 - Menu section with title
- **Menu Item** 🍽️ - Individual menu item card
- **Hours** 🕐 - Business hours display

## 🎨 Mock Sites

### Café Delights
- **Theme**: Orange/Amber
- **Domain**: `cafe-delights.localhost:3000`
- **Description**: Artisan coffee & pastries

### Bella Trattoria
- **Theme**: Red
- **Domain**: `bella-trattoria.localhost:3000`
- **Description**: Authentic Italian cuisine

### Sushi Zen
- **Theme**: Green
- **Domain**: `sushi-zen.localhost:3000`
- **Description**: Modern Japanese dining

## 🔗 Integration with Storefront

The base64 export is designed to work seamlessly with nota-storefront:

1. Build your page in the editor
2. Click "Export Base64"
3. Copy the generated string
4. Open `nota-storefront/src/data/mock-tenants.json`
5. Paste into the `craftState` field for the corresponding tenant
6. Rebuild nota-storefront

```json
{
  "tenants": [
    {
      "id": "cafe-delights",
      "craftState": "<paste-base64-here>"
    }
  ]
}
```

## 🛠️ Technology Stack

- **React 19.2** - UI library
- **Vite 7.3** - Build tool & dev server
- **Craft.js 0.2.12** - Page builder framework
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **nota-components** - Shared component library (Git submodule)

## 📝 Development

### Component Submodule

This project uses `nota-components` as a Git submodule for shared craft components:

```bash
# Update to latest components
git submodule update --remote src/shared/craft
git add src/shared/craft
git commit -m "Update nota-components"
```

### Path Aliases

- `@/` → `./src`
- `@shared/` → `./src/shared/craft`

### Storage

- **Save/Load**: Uses localStorage (`site-{siteId}` key)
- **Persistent**: Survives page refreshes
- **Per-Site**: Each site has independent state

## 🚧 Limitations & Future Work

### Current Limitations
- LocalStorage only (no database)
- No user authentication
- No real-time collaboration
- No undo/redo functionality
- Dev server requires Node.js 20.19+ (build works on 18.20.8)

### Planned Features
- [ ] Backend API integration
- [ ] Database persistence
- [ ] User accounts and permissions
- [ ] Undo/redo stack
- [ ] Component preview tooltips
- [ ] Properties panel for editing component props
- [ ] Layers panel (@craftjs/layers)
- [ ] Theme customization per site
- [ ] Media library for images
- [ ] Deploy directly to storefront

## 🤝 Related Projects

- **nota-storefront** - Customer-facing Next.js storefront
- **nota-components** - Shared craft.js component library

## 📄 License

MIT

## 🙏 Built With

- [Craft.js](https://craft.js.org/) - Page builder framework
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling

---

**Happy Building! 🎨**
