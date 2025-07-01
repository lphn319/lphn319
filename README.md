# Interests Suggestion App

React application implementing "Suggest your interests" functionality.

## Features

- **Skills List Display**: Shows a searchable list of interests/skills
- **Interest Suggestion**: When no skills match the search, displays a clickable "Đề xuất sở thích của bạn" link
- **Toggle Form**: Clicking the suggestion link shows/hides a form with:
  - Title "Đề xuất"
  - Text input with placeholder "Nhập sở thích"
  - "Thêm sở thích" button
- **Responsive Design**: Clean UI that matches modern design patterns

## Implementation Details

### Key Components

1. **App.js**: Main application component
2. **SkillsList.js**: Core component containing the suggestion functionality
3. **index.css**: Styling for the suggestion form and UI elements

### Core Functionality

The implementation replaces the original code:
```javascript
{filteredSkills?.length === 0 && (
  <span className="text-gray3 text-center m-auto">Không có sở thích bạn cần tìm?</span>
)}
```

With a clickable link and toggleable suggestion form:
```javascript
<span 
  className="clickable-link" 
  onClick={toggleSuggestion}
>
  Đề xuất sở thích của bạn
</span>
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view the app

### Building for Production

```bash
npm run build
```

## Usage

1. **Normal View**: When skills are displayed, the suggestion link is hidden
2. **No Results**: When search returns no results, click "Đề xuất sở thích của bạn"
3. **Suggestion Form**: 
   - Enter a new skill in the text input
   - Click "Thêm sở thích" to submit
   - Form automatically closes and clears after submission
4. **Toggle**: Click the suggestion link again to hide/show the form

## Screenshots

![Skills List](https://github.com/user-attachments/assets/534c7224-a076-49a2-b77a-2c9d8a1e51d5)

*Normal skills list view with search functionality*
